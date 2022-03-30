import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type ReservableSlotWhereInput = {
  dateTimeFrom?: DateTimeFilter;
  dateTimeTo?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  reservations?: ReservationListRelationFilter;
  seatsLeft?: IntNullableFilter;
  timeSlot?: TimeSlotWhereUniqueInput;
};
