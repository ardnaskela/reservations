import { Notification } from "../notification/Notification";
import { Reservation } from "../reservation/Reservation";

export type ReservationNotification = {
  createdAt: Date;
  customText: string | null;
  id: string;
  notification?: Notification;
  reservation?: Reservation;
  updatedAt: Date;
};
