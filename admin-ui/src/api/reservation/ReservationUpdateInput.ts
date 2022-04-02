import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReservableSlotWhereUniqueInput } from "../reservableSlot/ReservableSlotWhereUniqueInput";
import { ReservationNotificationUpdateManyWithoutReservationsInput } from "./ReservationNotificationUpdateManyWithoutReservationsInput";

export type ReservationUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput;
  isAccepted?: boolean | null;
  reservableSlot?: ReservableSlotWhereUniqueInput | null;
  reservationNotifications?: ReservationNotificationUpdateManyWithoutReservationsInput;
};
