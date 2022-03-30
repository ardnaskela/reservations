import { CompanySetNotificationCreateNestedManyWithoutNotificationsInput } from "./CompanySetNotificationCreateNestedManyWithoutNotificationsInput";
import { ReservationNotificationCreateNestedManyWithoutNotificationsInput } from "./ReservationNotificationCreateNestedManyWithoutNotificationsInput";

export type NotificationCreateInput = {
  companySetNotifications?: CompanySetNotificationCreateNestedManyWithoutNotificationsInput;
  minutesBefore: number;
  reservationNotifications?: ReservationNotificationCreateNestedManyWithoutNotificationsInput;
};
