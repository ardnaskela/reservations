import { ReservationCreateNestedManyWithoutReservableSlotsInput } from "./ReservationCreateNestedManyWithoutReservableSlotsInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type ReservableSlotCreateInput = {
  dateTimeFrom: Date;
  dateTimeTo: Date;
  isActive: boolean;
  reservations?: ReservationCreateNestedManyWithoutReservableSlotsInput;
  seatsLeft?: number | null;
  timeSlot: TimeSlotWhereUniqueInput;
};
