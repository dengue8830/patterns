import { applyPromoController } from "./controller";
import { di, setupDI } from "./di/di";

setupDI();

describe("Controller", () => {
  before(() => {
    // ✅ Mock the expensive operation its easy and precise
    di.set("updateCart", () => {});
  });

  it("should update the cart total", async () => {
    await applyPromoController({ userId: 1, promoCode: "10off" });
    const getCart = di.get("getCart");
    const cart = await getCart({ userId: 1 });
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
