// So Java 🙄
// interface Clonable<T> {
//   clone(): T;
// }

// If your language allows constructor override you can make more complex
// logic like delegate the basics of copy to its parent class.

class Shape {
  color: string;

  clone() {
    const shape = new Shape();
    shape.color = this.color;
    return shape;
  }

  render() {}
}

const program = () => {
  const customShape = new Shape();
  customShape.render();
  const newShape = customShape.clone();
  newShape.render();
};
