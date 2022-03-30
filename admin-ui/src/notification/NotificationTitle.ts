import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "id";

export const NotificationTitle = (record: TNotification): string => {
  return record.id || record.id;
};
