import { di } from "../di/di";

export async function applyPromotion({ userId, promoCode }) {
  const getPromotion = di.get("getPromotion");
  const getCart = di.get("getCart");
  const updateCart = di.get("updateCart");

  const promotion = await getPromotion(promoCode);
  const cart = await getCart({ userId });

  if (promotion.amount > cart.total) {
    throw new Error("Promotion amount is greater than discount amount");
  }

  await updateCart({
    userId,
    total: cart.total - promotion.amount,
  });
}
