import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DayOfWeekWhereUniqueInput } from "../dayOfWeek/DayOfWeekWhereUniqueInput";
import { ReservableSlotCreateNestedManyWithoutTimeSlotsInput } from "./ReservableSlotCreateNestedManyWithoutTimeSlotsInput";
import { CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput } from "./CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput";

export type TimeSlotCreateInput = {
  company: CompanyWhereUniqueInput;
  dayOfWeek?: DayOfWeekWhereUniqueInput | null;
  maxSeatsAvailable: number;
  availabilities?: ReservableSlotCreateNestedManyWithoutTimeSlotsInput;
  timeFrom: string;
  timeSlotNotifications?: CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput;
  timeTo: string;
};
