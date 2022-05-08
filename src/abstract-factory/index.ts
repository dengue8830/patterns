// Scenario: Interior design app that shows pre-design ideas.
type SupportedDesign = "industrial" | "modern";

class Chair {}
class IndustrialChair extends Chair {}
class ModernChair extends Chair {}

class Table {
  addChair(chair: Chair) {}
  render() {}
}
class IndustrialTable extends Table {}
class ModernTable extends Table {}

// Problem
const wrongApp = () => {
  const input = readInput();
  let chair: Chair = null;
  let table: Table = null;

  // ⛔️ Client knows about a lot of implementation details.
  switch (input) {
    case "industrial":
      // Complex creation logic...
      chair = new IndustrialChair();
      // Complex creation logic...
      table = new IndustrialTable();
      break;
    case "modern":
      // ⚠️ This way is so error prone.
      // The table will render a chair with the wrong design.
      // App doesn't crash but works incorrectly.
      chair = new IndustrialChair();
      table = new ModernTable();
      break;
    default:
      throw new Error("Unsupported input");
  }
  // ⚠️ Possibly wrong relation.
  table.addChair(chair);
  table.render();
};

// ❌ 1st try: Create factory functions for everything.
// Code grows too much for each new model.
// Repetitive code.

// Complex creation logic...
const createIndustrialChair = () => new IndustrialChair();
const createModernChair = () => new ModernChair();
const createIndustrialTable = () => new IndustrialTable();
const createModernTable = () => new ModernTable();

const getChairDesign = (input: SupportedDesign): Chair => {
  switch (input) {
    case "industrial":
      return createIndustrialChair();
    case "modern":
      // Complex creation logic...
      return createModernChair();
    default:
      throw new Error("Unsupported input");
  }
};

const getTableDesign = (input: SupportedDesign): Table => {
  switch (input) {
    case "industrial":
      return createIndustrialTable();
    case "modern":
      return createModernTable();
    default:
      throw new Error("Unsupported input");
  }
};

// This looks pretty clean but the scruture required for that is huge.
const wrongAppFirstTry = () => {
  const input = readInput();
  const table = getTableDesign(input);
  table.addChair(getChairDesign(input));
  table.addChair(getChairDesign(input));
  table.render();
};

// ✅ Solution
interface DesignAbstractFactory {
  createChair(): Chair;
  createTable(): Table;
}

// By grouping the creation of related/dependent models
// we can create a single IF/SWITCH point to decide which
// kind of models we want to create (modern or industrial).
// Also we can replace this single object with a more complex class
// if necessary.
const industrialDesignFactory: DesignAbstractFactory = {
  createChair() {
    // Complex creation behaviour...
    return new IndustrialChair();
  },
  createTable() {
    // Complex creation behaviour...
    return new IndustrialTable();
  },
};

const modernDesignFactory: DesignAbstractFactory = {
  createChair() {
    // Complex creation behaviour...
    return new ModernChair();
  },
  createTable() {
    // Complex creation behaviour...
    return new ModernTable();
  },
};

const readInput = (): SupportedDesign => "modern";

const getDesign = () => {
  const input = readInput();
  switch (input) {
    case "industrial":
      return industrialDesignFactory;
    case "modern":
      return modernDesignFactory;
    default:
      throw new Error("Unsupported input");
  }
};

const app = () => {
  const designFactory = getDesign();
  const table = designFactory.createTable();
  table.addChair(designFactory.createChair());
  table.addChair(designFactory.createChair());
  table.render();
};
