// Functional version of the pattern, OOP version looks more readable and type safe.

const paymentMethod = {
  pay: function () {
    if (!this.isTokenValid()) {
      throw new Error("no auth");
    }
    if (!this.hasFounds()) {
      throw new Error("no founds");
    }
    this.save();
  },
  isTokenValid: () => true,
  hasFounds: () => {
    // Implement.
  },
  save: () => {
    console.log("saving");
  },
};

const debitCard = {
  ...paymentMethod,
  hasFounds: () => {
    console.log("checking founds in bank account");
    return true;
  },
};

debitCard.pay();
