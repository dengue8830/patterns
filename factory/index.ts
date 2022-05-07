type SupportedPaymentMethod = "debit-card" | "credit-card" | "wooloWallet";

interface PaymentMethod {
  pay(): void;
}

class DebitCard implements PaymentMethod {
  pay() {
    // pay with debit card
  }
}

class CreditCard implements PaymentMethod {
  pay() {
    // pay with credit card
  }
}

class WooloWallet implements PaymentMethod {
  pay() {
    // pay with wooloWallet
  }
}

// Problem
const program = () => {
  const input: SupportedPaymentMethod = "debit-card";
  let paymentMethod: PaymentMethod;

  switch (input) {
    case "debit-card":
      // Incredible complex instantiation logic...
      // Incredible complex instantiation logic...
      // Incredible complex instantiation logic...
      paymentMethod = new DebitCard();
      break;
    // @ts-ignore
    case "credit-card":
      // Incredible complex instantiation logic...
      // Incredible complex instantiation logic...
      // Incredible complex instantiation logic...
      paymentMethod = new CreditCard();
      break;
    // @ts-ignore
    case "wooloWallet":
      // Incredible complex instantiation logic...
      // Incredible complex instantiation logic...
      // Incredible complex instantiation logic...
      paymentMethod = new WooloWallet();
    default:
      throw new Error("Unsupported payment method");
  }

  paymentMethod.pay();
};

// Solution
const readPaymentMethod = (): SupportedPaymentMethod => {
  return "debit-card";
};

const createDebitCardMethod = () => {
  // Incredible complex instantiation logic...
  // Incredible complex instantiation logic...
  // Incredible complex instantiation logic...
  return new DebitCard();
};
const createCreditCardMethod = () => {
  // Incredible complex instantiation logic...
  // Incredible complex instantiation logic...
  // Incredible complex instantiation logic...
  return new CreditCard();
};
const createWooloWalletMethod = () => {
  // Incredible complex instantiation logic...
  // Incredible complex instantiation logic...
  // Incredible complex instantiation logic...
  return new WooloWallet();
};

const getPaymentMethod = () => {
  const input = readPaymentMethod();

  switch (input) {
    case "debit-card":
      return createDebitCardMethod();
    // @ts-ignore
    case "credit-card":
      return createCreditCardMethod();
    // @ts-ignore
    case "wooloWallet":
      return createWooloWalletMethod();
    default:
      throw new Error("Unsupported payment method");
  }
};

const solution = () => {
  const paymentMethod = getPaymentMethod();
  paymentMethod.pay();
};
