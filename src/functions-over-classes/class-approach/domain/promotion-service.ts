import { di } from "../di/di";

// ❌ Services as classes are just a bunch of unrelated methods that makes this file grow
export class PromotionService {
  public async applyPromotion({ userId, promoCode }) {
    const promotionRepository = di.get("promotionRepository");

    const promotion = await promotionRepository.getPromotion(promoCode);
    const cart = await promotionRepository.getCart({ userId });

    if (promotion.amount > cart.total) {
      throw new Error("Promotion amount is greater than discount amount");
    }

    await promotionRepository.updateCart({
      userId,
      total: cart.total - promotion.amount,
    });
  }

  public async trackPromotionApplied(promoCode) {
    const promotionRepository = di.get("promotionRepository");

    const promotion = await promotionRepository.getPromotion(promoCode);
    console.log(`tracking promo id ${promotion.id} applied`);
  }

  // ❌ Unrelated utility methods are a common mistake in classes
  private someUtilityMethodForApplyPromotion() {}

  private someUtilityMethodForTrackPromotionApplied() {}
}
