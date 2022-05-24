// Problem: You have a recursive structure.
// Solution: Use polymorphism and recursion to create an interface
// that is used as the folder and as the file so it can be used as composites or leaf.

interface FSItem {
  title: string;
  render: () => string;
}

class FileItem implements FSItem {
  title: string;

  constructor(title) {
    this.title = title;
  }

  render() {
    return `<li>${this.title}</li>`;
  }
}

class Folder implements FSItem {
  title: string;
  items: FSItem[] = [];

  constructor(title) {
    this.title = title;
  }

  render() {
    let path = `<li><b>${this.title}</b><ul>`;
    for (const item of this.items) {
      path += item.render();
    }
    return path + "</ul></li>";
  }
}

function main() {
  const root = new Folder("photos");
  const vacations = new Folder("2022 vacations");
  vacations.items.push(new FileItem("mountain.jpeg"));
  root.items.push(vacations);
  root.items.push(new Folder("some empty folder"));
  console.log(root.render());
}
