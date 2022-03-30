import { StringFilter } from "../../util/StringFilter";
import { TimeSlotListRelationFilter } from "../timeSlot/TimeSlotListRelationFilter";

export type DayOfWeekWhereInput = {
  code?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  timeSlots?: TimeSlotListRelationFilter;
};
