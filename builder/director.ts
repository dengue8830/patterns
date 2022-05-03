import {
  PlayerNotificationBuilder,
  SimpleNotificationBuilder,
} from "./builder";

export const director = {
  createWarningNotification() {
    return new SimpleNotificationBuilder()
      .addIcon()
      .addTitle()
      .setWarningStyle();
  },
  createErrorNotification() {
    return new SimpleNotificationBuilder().addIcon().addTitle().setErrorStyle();
  },
  createPremiumPlayerNotification() {
    return new PlayerNotificationBuilder()
      .addIcon()
      .addTitle("artist - song")
      .addSubtitle("you're a premium user");
  },
  // ... more steps abstractions.
};
