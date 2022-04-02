import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReservableSlotWhereUniqueInput } from "../reservableSlot/ReservableSlotWhereUniqueInput";
import { ReservationNotificationCreateNestedManyWithoutReservationsInput } from "./ReservationNotificationCreateNestedManyWithoutReservationsInput";

export type ReservationCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  customer: CustomerWhereUniqueInput;
  isAccepted?: boolean | null;
  reservableSlot?: ReservableSlotWhereUniqueInput | null;
  reservationNotifications?: ReservationNotificationCreateNestedManyWithoutReservationsInput;
};
