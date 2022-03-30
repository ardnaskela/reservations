import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DayOfWeekWhereUniqueInput } from "../dayOfWeek/DayOfWeekWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReservableSlotListRelationFilter } from "../reservableSlot/ReservableSlotListRelationFilter";
import { CompanySetNotificationListRelationFilter } from "../companySetNotification/CompanySetNotificationListRelationFilter";

export type TimeSlotWhereInput = {
  company?: CompanyWhereUniqueInput;
  dayOfWeek?: DayOfWeekWhereUniqueInput;
  id?: StringFilter;
  maxSeatsAvailable?: IntFilter;
  availabilities?: ReservableSlotListRelationFilter;
  timeFrom?: StringFilter;
  timeSlotNotifications?: CompanySetNotificationListRelationFilter;
  timeTo?: StringFilter;
};
