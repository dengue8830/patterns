// Problem: Product cards. Render different types of products on a different way.

// ❌ 1st try: create one component/class per combination.
class FullLatinProductCard {}
class FullEuropeanProductCard {}
class PromotedLatinProductCard {}
class PormotedEuropeanProductCard {}
class CBDLatinProductCard {}
class CBDEuropeanProductCard {}
// ...

function wrong() {
  const items = [];
  items.push(new FullLatinProductCard());
  items.push(new FullEuropeanProductCard());
  items.push(new PromotedLatinProductCard());
  // ...
}

// ✅ 2nd try: separate abstraction from implementation. Kinda obvious.

// Implementations.
class Product {
  title;
  image;
  shortDescription;
  longDescription;
}
class LatinProduct extends Product {}
class EuropeanProduct extends Product {}

// Abstractions.
class Card {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}
class FullCard extends Card {
  render() {
    const { title, image, longDescription } = this.product;
    console.log("really long layout" + title + image + longDescription);
  }
}
class PromotedCard extends Card {
  render() {
    const { title, image, shortDescription } = this.product;
    console.log(
      "really special colorful layout" + title + image + shortDescription
    );
  }
}
class CBDCard extends Card {
  render() {
    const { title, shortDescription } = this.product;
    console.log("really green layout" + title + shortDescription);
  }
}

function correct() {
  const items: Card[] = [];
  items.push(new FullCard(new LatinProduct()));
  items.push(new FullCard(new EuropeanProduct()));
  items.push(new CBDCard(new LatinProduct()));
  items.push(new PromotedCard(new EuropeanProduct()));
  // render items.
}
