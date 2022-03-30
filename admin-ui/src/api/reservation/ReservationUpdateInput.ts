import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReservableSlotWhereUniqueInput } from "../reservableSlot/ReservableSlotWhereUniqueInput";
import { ReservationNotificationUpdateManyWithoutReservationsInput } from "./ReservationNotificationUpdateManyWithoutReservationsInput";

export type ReservationUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  reservableSlot?: ReservableSlotWhereUniqueInput | null;
  reservationNotifications?: ReservationNotificationUpdateManyWithoutReservationsInput;
};
