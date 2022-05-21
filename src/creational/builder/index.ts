// ℹ️ Problem: you need to create different configurations of the same model.
// ❌ Wrong interpretation: requiring subclasses. No, it's not a new class because
// is the same group of attributes, responsabilities and behaviour.
// Having restrictions for specific configurations doesn't necessarly implies subclasses.

// ❌ 1st try: place the code directly into the client.
// Problem: That will be impossible to scale, mantain and re use. Should be only your first try.
// const robot = new Robot();
// robot.arms = 3;
// robot.legs = 3;
// if (robot.arms == 0) {
//   throw new Error('The robot needs at least 1 arm to equip weapons');
// }

export class Robot {
  arms?: number;
  legs?: number;
  weapons?: number;
  turnOn() {}

  // ❌ 2nd try: place that logic in the model.
  // Problem: Creating specific a robot with an configuration but receiving params
  // will make this impossible to scale and mantain due to the multiple
  // combinations.
  createTripoidRobot(weapons: number) {
    const robot = new Robot();
    robot.arms = 3;
    robot.legs = 3;
    if (robot.arms == 0) {
      throw new Error("The robot needs at least 1 arm to equip weapons");
    } else {
      robot.weapons = weapons;
    }
    return robot;
  }

  // ❌
  createBipodRobot(weapons: number) {
    const robot = new Robot();
    robot.arms = 3;
    robot.legs = 2;
    if (robot.arms == 0) {
      throw new Error("The robot needs at least 1 arm to equip weapons");
    } else {
      robot.weapons = weapons;
    }
    return robot;
  }
}

// ❌ 3rd try: directly with the director.
// Problem: Same problem but with a cleaner model class.
const director = {
  createTripoidRobot(weapons: number) {
    const robot = new Robot();
    robot.arms = 3;
    robot.legs = 3;
    // ❗️ Check this custom logic in the middle of your config steps.
    if (robot.arms == 0) {
      throw new Error("The robot needs at least 1 arm to equip weapons");
    } else {
      robot.weapons = weapons;
    }
    return robot;
  },

  createBipodRobot(weapons: number) {
    const robot = new Robot();
    robot.arms = 3;
    robot.legs = 3;
    if (robot.arms == 0) {
      throw new Error("The robot needs at least 1 arm to equip weapons");
    } else {
      robot.weapons = weapons;
    }
    return robot;
  },
};

// ✅ 4th try: modularize the configuration into unordered steps.
class RobotBuilder {
  private robot: Robot = new Robot();

  addArms(arms: number) {
    this.robot.arms = arms;
    return this;
  }

  addLegs(legs: number) {
    this.robot.legs = legs;
    return this;
  }

  addWeapons(weapons: number) {
    // ✅ Now your logic doesn't corrupt the different step combinations.
    if (this.robot.arms == 0) {
      throw new Error("The robot needs at least 1 arm to equip weapons");
    } else {
      this.robot.weapons = weapons;
    }
    return this;
  }

  build() {
    // ✅ You can even check for a "ready" condition.
    if (!this.robot.arms || !this.robot.legs || !this.robot.weapons) {
      throw new Error("Your robot is incomplete!");
    }
    return this.robot;
  }
}

// ✅ Improve: abstract common robot pre-configuration. (Optional)
const correctDirector = {
  createTripoidRobot() {
    return new RobotBuilder().addArms(3).addLegs(3).addWeapons(2);
  },

  createBipodRobot() {
    return new RobotBuilder().addArms(3).addLegs(2).addWeapons(2);
  },
};

correctDirector.createTripoidRobot().build().turnOn();
correctDirector.createBipodRobot().addArms(1).build().turnOn();
