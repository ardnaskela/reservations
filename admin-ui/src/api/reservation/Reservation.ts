import { Company } from "../company/Company";
import { Customer } from "../customer/Customer";
import { ReservableSlot } from "../reservableSlot/ReservableSlot";
import { ReservationNotification } from "../reservationNotification/ReservationNotification";

export type Reservation = {
  company?: Company | null;
  createdAt: Date;
  customer?: Customer;
  id: string;
  isAccepted: boolean | null;
  reservableSlot?: ReservableSlot | null;
  reservationNotifications?: Array<ReservationNotification>;
  updatedAt: Date;
};
