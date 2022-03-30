import { ReservationUpdateManyWithoutReservableSlotsInput } from "./ReservationUpdateManyWithoutReservableSlotsInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type ReservableSlotUpdateInput = {
  dateTimeFrom?: Date;
  dateTimeTo?: Date;
  isActive?: boolean;
  reservations?: ReservationUpdateManyWithoutReservableSlotsInput;
  seatsLeft?: number | null;
  timeSlot?: TimeSlotWhereUniqueInput;
};
