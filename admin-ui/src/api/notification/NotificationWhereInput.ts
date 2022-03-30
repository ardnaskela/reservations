import { CompanySetNotificationListRelationFilter } from "../companySetNotification/CompanySetNotificationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReservationNotificationListRelationFilter } from "../reservationNotification/ReservationNotificationListRelationFilter";

export type NotificationWhereInput = {
  companySetNotifications?: CompanySetNotificationListRelationFilter;
  id?: StringFilter;
  minutesBefore?: IntFilter;
  reservationNotifications?: ReservationNotificationListRelationFilter;
};
