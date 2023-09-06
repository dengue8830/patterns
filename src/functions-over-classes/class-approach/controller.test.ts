import { applyPromoController } from "./controller";
import { di, setupDI } from "./di/di";

setupDI();

describe("Controller", () => {
  before(() => {
    // Mock the expensive operation
    // ❌ It's hard to mock just one method
    const repository = di.get("promotionRepository");
    repository.updateCart = async () => {};
    di.set("promotionRepository", repository);
  });

  it("should update the cart total", async () => {
    await applyPromoController({ userId: 1, promoCode: "10off" });
    const repository = di.get("promotionRepository");
    const cart = await repository.getCart({ userId: 1 });
    expect(cart.total).eq(10);
  });
});

// Test runner boilerplate
function describe(name, cb) {}
function before(cb) {}
function it(name, cb) {}
function expect(param) {
  return {} as any;
}
