import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DayOfWeekWhereUniqueInput } from "../dayOfWeek/DayOfWeekWhereUniqueInput";
import { ReservableSlotUpdateManyWithoutTimeSlotsInput } from "./ReservableSlotUpdateManyWithoutTimeSlotsInput";
import { CompanySetNotificationUpdateManyWithoutTimeSlotsInput } from "./CompanySetNotificationUpdateManyWithoutTimeSlotsInput";

export type TimeSlotUpdateInput = {
  company?: CompanyWhereUniqueInput;
  dayOfWeek?: DayOfWeekWhereUniqueInput | null;
  maxSeatsAvailable?: number;
  reservableSlots?: ReservableSlotUpdateManyWithoutTimeSlotsInput;
  timeFrom?: string;
  timeSlotNotifications?: CompanySetNotificationUpdateManyWithoutTimeSlotsInput;
  timeTo?: string;
};
