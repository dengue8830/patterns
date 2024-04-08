// Example google docs.

interface Command {
  execute: (current: string, text: string) => string;
  undo: () => string;
}

class TextEditCommand implements Command {
  prevState: string = "";

  public execute(current: string, text: string) {
    this.prevState = current;
    return current + text;
  }

  public undo() {
    return this.prevState;
  }
}

function save(text: string) {
  // send over api.
}

// Create more concrete actions like this to provide features like pasting images, tables, etc.
function editAndSave(current: string, text: string): [string, Command] {
  const edit = new TextEditCommand();
  const newText = edit.execute(current, text);
  save(newText);
  return [newText, edit];
}

function undoAndSave(command: Command) {
  const newText = command.undo();
  save(newText);
  return newText;
}

function main() {
  let text = "";
  const commands: Command[] = [];
  const [mod1, command1] = editAndSave(text, "hello");
  text = mod1;
  commands.push(command1);
  console.log(text);
  const [mod2, command2] = editAndSave(text, " world");
  text = mod2;
  commands.push(command2);
  console.log(text);
  if (commands.length) {
    text = undoAndSave(commands.pop());
    console.log(text);
  }
  if (commands.length) {
    text = undoAndSave(commands.pop());
    console.log(text);
  }
}
