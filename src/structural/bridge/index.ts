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

// ✅ 2nd try: separate abstraction from implementation.
// Implementations.
class Product {
  title;
  image;
}
class LatinProduct extends Product {}
class EuropeanProduct extends Product {}

// Abstractions.
class Card {
  product;

  constructor(product: Product) {
    this.product = product;
  }
}
class FullCard extends Card {}
class PromotedCard extends Card {}
class CBDCard extends Card {}

function correct() {
  const items: Card[] = [];
  items.push(new FullCard(new LatinProduct()));
  items.push(new FullCard(new EuropeanProduct()));
  items.push(new CBDCard(new LatinProduct()));
  items.push(new PromotedCard(new EuropeanProduct()));
  // render items.
}
