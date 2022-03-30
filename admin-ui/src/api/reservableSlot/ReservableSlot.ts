import { Reservation } from "../reservation/Reservation";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type ReservableSlot = {
  createdAt: Date;
  dateTimeFrom: Date;
  dateTimeTo: Date;
  id: string;
  isActive: boolean;
  reservations?: Array<Reservation>;
  seatsLeft: number | null;
  timeSlot?: TimeSlot;
  updatedAt: Date;
};
