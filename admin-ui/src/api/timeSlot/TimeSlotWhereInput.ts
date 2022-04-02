import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReservableSlotListRelationFilter } from "../reservableSlot/ReservableSlotListRelationFilter";

export type TimeSlotWhereInput = {
  company?: CompanyWhereUniqueInput;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
  id?: StringFilter;
  maxSeatsAvailable?: IntNullableFilter;
  reservableSlots?: ReservableSlotListRelationFilter;
  timeFrom?: StringFilter;
  timeTo?: StringFilter;
};
