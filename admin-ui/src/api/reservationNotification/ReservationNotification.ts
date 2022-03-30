import { Notification } from "../notification/Notification";
import { Reservation } from "../reservation/Reservation";

export type ReservationNotification = {
  createdAt: Date;
  id: string;
  notification?: Notification;
  reservation?: Reservation;
  updatedAt: Date;
};
