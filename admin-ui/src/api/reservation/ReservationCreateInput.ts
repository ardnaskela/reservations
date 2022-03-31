import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReservableSlotWhereUniqueInput } from "../reservableSlot/ReservableSlotWhereUniqueInput";
import { ReservationNotificationCreateNestedManyWithoutReservationsInput } from "./ReservationNotificationCreateNestedManyWithoutReservationsInput";

export type ReservationCreateInput = {
  customer: CustomerWhereUniqueInput;
  isAccepted?: boolean | null;
  reservableSlot?: ReservableSlotWhereUniqueInput | null;
  reservationNotifications?: ReservationNotificationCreateNestedManyWithoutReservationsInput;
};
