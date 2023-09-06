import { setupDI } from "./di/di";
import { applyPromotion } from "./domain/apply-promotion";
import { trackPromotionApplied } from "./domain/track-promotion-applied";

setupDI();

export async function applyPromoController({ userId, promoCode }) {
  await applyPromotion({ userId, promoCode });
  await trackPromotionApplied(promoCode);
}
