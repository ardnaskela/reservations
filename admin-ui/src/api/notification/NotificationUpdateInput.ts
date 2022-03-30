import { CompanySetNotificationUpdateManyWithoutNotificationsInput } from "./CompanySetNotificationUpdateManyWithoutNotificationsInput";
import { ReservationNotificationUpdateManyWithoutNotificationsInput } from "./ReservationNotificationUpdateManyWithoutNotificationsInput";

export type NotificationUpdateInput = {
  companySetNotifications?: CompanySetNotificationUpdateManyWithoutNotificationsInput;
  minutesBefore?: number;
  reservationNotifications?: ReservationNotificationUpdateManyWithoutNotificationsInput;
};
