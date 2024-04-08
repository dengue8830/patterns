// Two payment methods with 99% common logic.

abstract class PaymentMethod {
  public pay() {
    if (!this.isTokenValid()) {
      throw new Error("no auth");
    }
    if (!this.hasFounds()) {
      throw new Error("no founds");
    }
    this.save();
  }

  private isTokenValid() {
    return true;
  }

  // ⚠️ Different for each payment mehtod.
  protected abstract hasFounds(): boolean;

  private save() {
    console.log("saved");
  }
}

class DebitCard extends PaymentMethod {
  protected hasFounds() {
    console.log("checking for founds in bank account");
    return true;
  }
}

class CreditCard extends PaymentMethod {
  protected hasFounds() {
    console.log("checking for founds in card provider");
    return false;
  }
}

function main() {
  const debitCard = new DebitCard();
  const creditCard = new CreditCard();

  debitCard.pay();
  creditCard.pay();
}
