export class SimpleNotification {
  // wrong: doesn't fulfill the requirements.
  // constructor(icon, title, subtitle, image) {}

  icon: string;
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;

  show() {}
}

export class PlayerNotification {
  // wrong: doesn't fulfill the requirements.
  // constructor(icon, title, subtitle, coverImage, ...) {}

  icon: string;
  title: string;
  subtitle: string;
  coverImage: string;
  state: "playing" | "paused";

  show() {}
  play() {}
  pause() {}
  next() {}
  prev() {}
}
