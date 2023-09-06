// 😴 Just a DI container, dont pay too much attention on this file

import { PromotionService } from "../domain/promotion-service";
import { PromotionRepository } from "../repository/promotion-repository";

const container = {};

type Keys = "promotionRepository" | "promotionService";

export const di = {
  get: (key: Keys) => container[key],
  set: (key: Keys, value: any) => (container[key] = value),
};

export function setupDI() {
  // ❌ Class instances are not giving us any benefit
  di.set("promotionRepository", new PromotionRepository());
  di.set("promotionService", new PromotionService());
}
