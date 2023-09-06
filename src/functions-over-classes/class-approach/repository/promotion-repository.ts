// ❌ Grouping unrelated functions in a class
export class PromotionRepository {
  async getCart() {
    return {
      userId: 1,
      total: 20,
    };
  }

  async getPromotion() {
    return {
      amount: 10,
    };
  }

  async updateCart() {
    return;
  }
}
