// So Java 🙄
// interface Clonable<T> {
//   clone(): T;
// }

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
