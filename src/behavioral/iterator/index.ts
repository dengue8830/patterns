// Social networks lists.

interface SDK {
  fetchMore(): Profile[];
}

// Avoid infinite loop.
let dbCounter = 0;

const facebookSdk: SDK = {
  fetchMore(): Profile[] {
    dbCounter++;
    return dbCounter <= 2 ? [{ name: "Deib" }] : [];
  },
};

const linkedinSdk: SDK = {
  fetchMore(): Profile[] {
    dbCounter++;
    return dbCounter <= 2 ? [{ name: "Deib" }] : [];
  },
};

interface Profile {
  name: string;
}

interface ProfileIterator {
  getNext(): Profile | undefined;
  hasNext(): Promise<boolean>;
}

class SocialIterator implements ProfileIterator {
  index: number = -1;
  array: Profile[] = [];

  constructor(private sdk: SDK) {}

  getNext() {
    this.index++;
    return this.array[this.index];
  }

  private async fetchMore() {
    this.array.push(...this.sdk.fetchMore());
  }

  private isAtTheTail() {
    return this.index === this.array.length - 1;
  }

  async hasNext() {
    if (this.isAtTheTail()) {
      await this.fetchMore();
    }
    return !this.isAtTheTail();
  }
}

async function render(iterator: ProfileIterator) {
  let html = "";
  while (await iterator.hasNext()) {
    html += iterator.getNext().name;
  }
  console.log(html);
}

const socialNetwork: "Facebook" | "Linkedin" = "Facebook";

function main() {
  let iterator: ProfileIterator;
  switch (socialNetwork) {
    case "Facebook":
      iterator = new SocialIterator(facebookSdk);
      break;
    case "Linkedin":
      iterator = new SocialIterator(facebookSdk);
      break;
    default:
      throw new Error("unkown social network");
  }
  render(iterator);
}
