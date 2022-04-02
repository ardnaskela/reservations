import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReservableSlotListRelationFilter } from "../reservableSlot/ReservableSlotListRelationFilter";

export type TimeSlotWhereInput = {
  company?: CompanyWhereUniqueInput;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
  id?: StringFilter;
  maxSeatsAvailable?: IntFilter;
  reservableSlots?: ReservableSlotListRelationFilter;
  timeFrom?: StringFilter;
  timeTo?: StringFilter;
};
