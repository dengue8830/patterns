import { di } from "../di/di";

export async function trackPromotionApplied(promoCode: string) {
  const getPromotion = di.get("getPromotion");
  const promotion = await getPromotion(promoCode);
  console.log(`tracking promo id ${promotion.id} applied`);
}
