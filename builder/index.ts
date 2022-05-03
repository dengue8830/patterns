// Requirements: the object need to be configured in a defer way
// from different places in different moments.

import { SimpleNotificationBuilder } from "./builder";
import { director } from "./director";
import { PlayerNotification, SimpleNotification } from "./model";
import { preferences } from "./utils";

// Problem: repetitive setup code.
const simpleNotif = new SimpleNotification();
simpleNotif.icon = preferences.appIcon;
simpleNotif.title = preferences.appName;
simpleNotif.subtitle = "Message from Jhon";
simpleNotif.show();

const playerNotif = new PlayerNotification();
playerNotif.icon = preferences.appIcon;
playerNotif.title = preferences.appName;
playerNotif.subtitle = "Message from Laura";
playerNotif.state = "paused";
playerNotif.coverImage = "...";
playerNotif.show();

// Solution: Builder
new SimpleNotificationBuilder()
  .addIcon()
  .addTitle()
  .addSubtitle("message from Jhon")
  .setWarningStyle()
  .build()
  .show();

new SimpleNotificationBuilder()
  .addIcon()
  .addTitle()
  .addSubtitle("Ups file upload failed")
  .setErrorStyle()
  .build()
  .show();

// Even better: Director. if you have too much steps and those are repetitive on each specific config lets
// abstract those steps in a director.
director
  .createWarningNotification()
  .addSubtitle("message from Jhon")
  .build()
  .show();

director
  .createErrorNotification()
  .addSubtitle("Ups file upload failed")
  .build()
  .show();

director.createPremiumPlayerNotification().build().show();

/** Conclussion:
 * Most of the time this will be an overkill. KISS: Use just the director
 * and add abstraction layers as necessary.
 */
