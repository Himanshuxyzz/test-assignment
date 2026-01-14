import * as Notifications from "expo-notifications";

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

/**
 * Initialize notifications - call this once at app startup
 * Returns true if permissions are granted
 */
export const initializeNotifications = async (): Promise<boolean> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  if (existingStatus === "granted") {
    return true;
  }

  // Only request if not already determined
  if (existingStatus === "undetermined") {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === "granted";
  }

  return false;
};

/**
 * Check if notifications are permitted (without prompting)
 */
export const hasNotificationPermission = async (): Promise<boolean> => {
  const { status } = await Notifications.getPermissionsAsync();
  return status === "granted";
};

/**
 * Schedule a local notification with a delay
 * @param title - Notification title
 * @param body - Notification body message
 * @param delaySeconds - Delay in seconds (2-5 seconds recommended)
 */
export const scheduleNotification = async (
  title: string,
  body: string,
  delaySeconds: number = 3
): Promise<string | undefined> => {
  // Only check permission status, don't prompt
  const hasPermission = await hasNotificationPermission();

  if (!hasPermission) {
    console.warn("Notification permissions not granted");
    return undefined;
  }

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delaySeconds,
    },
  });
  console.log(identifier);
  return identifier;
};

// Pre-defined notification messages
export const NotificationMessages = {
  WELCOME: {
    title: "👋 Welcome to LMS app",
    body: "You've successfully loaded the course catalog. Start learning today!",
    delay: 3,
  },
  REMINDER: {
    title: "📚 Daily Learning Reminder",
    body: "Don't forget to complete your lessons today. Knowledge is power!",
    delay: 4,
  },
  ACHIEVEMENT: {
    title: "🏆 Great Progress!",
    body: "You're doing amazing! Keep up the momentum with your studies.",
    delay: 5,
  },
  WEBVIEW_LOADED: {
    title: "✅ Content Loaded",
    body: "All lessons are now ready for you. Tap any lesson to begin!",
    delay: 2,
  },
} as const;

/**
 * Send welcome notification (triggered by button)
 */
export const sendWelcomeNotification = async (): Promise<void> => {
  const { title, body, delay } = NotificationMessages.WELCOME;
  await scheduleNotification(title, body, delay);
};

/**
 * Send reminder notification (triggered by button)
 */
export const sendReminderNotification = async (): Promise<void> => {
  const { title, body, delay } = NotificationMessages.REMINDER;
  await scheduleNotification(title, body, delay);
};

/**
 * Send WebView loaded notification
 */
export const sendWebViewLoadedNotification = async (): Promise<void> => {
  const { title, body, delay } = NotificationMessages.WEBVIEW_LOADED;
  await scheduleNotification(title, body, delay);
};
