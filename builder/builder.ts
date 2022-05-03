import { PlayerNotification, SimpleNotification } from "./model";
import { preferences } from "./utils";

export class SimpleNotificationBuilder {
  private notification: SimpleNotification = new SimpleNotification();

  addIcon() {
    this.notification.icon = preferences.appIcon;
    return this;
  }

  addTitle(title: string = preferences.appName) {
    this.notification.title = title;
    return this;
  }

  addSubtitle(subtitle: string = "Prepare for the awesome") {
    this.notification.subtitle = subtitle;
    return this;
  }

  setWarningStyle() {
    this.notification.backgroundColor = "yellow";
    return this;
  }

  setErrorStyle() {
    this.notification.backgroundColor = "red";
    return this;
  }

  build() {
    return this.notification;
  }
}

// Downside: you have to create a builder for each subclass.
export class PlayerNotificationBuilder {
  private notification: PlayerNotification;

  constructor() {
    this.notification = new PlayerNotification();
    this.notification.state = "paused";
    this.notification.coverImage = "default cover image";
  }

  addIcon() {
    this.notification.icon = preferences.appIcon;
    return this;
  }

  addTitle(title: string) {
    this.notification.title = title;
    return this;
  }

  addSubtitle(subtitle) {
    this.notification.subtitle = subtitle;
    return this;
  }

  build() {
    return this.notification;
  }
}
