import { CompanySetNotification } from "../companySetNotification/CompanySetNotification";
import { ReservationNotification } from "../reservationNotification/ReservationNotification";

export type Notification = {
  companySetNotifications?: Array<CompanySetNotification>;
  createdAt: Date;
  id: string;
  minutesBefore: number;
  reservationNotifications?: Array<ReservationNotification>;
  updatedAt: Date;
};
