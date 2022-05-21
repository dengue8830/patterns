// Problem: you can't use the api object because incompatible format between
// what the api object receives and what you have in your hands.

const api = {
  // Current age in the source object is string.
  createComment(comment: { name: string; age: number; comment: string }) {
    // Server call
    return {
      id: 1,
      ...comment,
    };
  },
  removeComment(id: number) {
    // Server call
  },
};

const adapt = (comment: { name: string; age: string; comment: string }) => {
  return {
    ...comment,
    // Really complex conversion logic...
    age: Number(comment.age),
  };
};

// 🏆 1st try: use just a function adapter.
// ✅ Simple and easy.
// ✅ No extra code, just what is needed.
// ❌ Not the best SRP code. Client does know about what needs to be adapted (but not how).

function main() {
  const comment = { name: "peep", age: "12", comment: "hola" };
  const output = api.createComment(adapt(comment));
  api.removeComment(output.id);
}

// 2nd try: use an adapter with the shape of the target object.
// ✅ Easier to read on client code.
// ✅ More SRP friendly.
// ❌ Duplicate code when methods interface does match: you have to wrap methods unnecessarily.
// ❌ Code grows: you have to write more adapter objects for different combinations.
// ❌ Hard to think on the correct abstraction when the differences are small.

const apiAdapter = {
  createComment: (author: { name: string; age: string; comment: string }) => {
    // Server call
    return api.createComment(adapt(author));
  },
  removeComment(id: number) {
    api.removeComment(id);
  },
};

function main2() {
  const author = { name: "peep", age: "12", comment: "hola" };
  const output = apiAdapter.createComment(author);
  apiAdapter.removeComment(output.id);
}
