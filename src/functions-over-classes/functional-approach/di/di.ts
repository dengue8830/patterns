// 😴 Just a DI container, dont pay too much attention on this file

import { getCart } from "../repository/get-cart";
import { getPromotion } from "../repository/get-promotion";
import { updateCart } from "../repository/update-cart";

const container = {};

type Keys = "getPromotion" | "getCart" | "updateCart";

export const di = {
  get: (key: Keys) => container[key],
  set: (key: Keys, value: any) => (container[key] = value),
};

export function setupDI() {
  di.set("getPromotion", getPromotion);
  di.set("getCart", getCart);
  di.set("updateCart", updateCart);
}
