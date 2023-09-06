import { di, setupDI } from "./di/di";

setupDI();

export async function applyPromoController({ userId, promoCode }) {
  const promotionService = di.get("promotionService");

  await promotionService.applyPromotion({ userId, promoCode });
  await promotionService.trackPromotionApplied(promoCode);
}
