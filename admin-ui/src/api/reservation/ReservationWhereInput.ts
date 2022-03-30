import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ReservableSlotWhereUniqueInput } from "../reservableSlot/ReservableSlotWhereUniqueInput";
import { ReservationNotificationListRelationFilter } from "../reservationNotification/ReservationNotificationListRelationFilter";

export type ReservationWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  reservableSlot?: ReservableSlotWhereUniqueInput;
  reservationNotifications?: ReservationNotificationListRelationFilter;
};
