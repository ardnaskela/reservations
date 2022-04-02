import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ReservableSlotWhereUniqueInput } from "../reservableSlot/ReservableSlotWhereUniqueInput";
import { ReservationNotificationListRelationFilter } from "../reservationNotification/ReservationNotificationListRelationFilter";

export type ReservationWhereInput = {
  company?: CompanyWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  isAccepted?: BooleanNullableFilter;
  reservableSlot?: ReservableSlotWhereUniqueInput;
  reservationNotifications?: ReservationNotificationListRelationFilter;
};
