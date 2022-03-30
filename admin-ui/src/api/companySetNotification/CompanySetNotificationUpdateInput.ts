import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type CompanySetNotificationUpdateInput = {
  company?: CompanyWhereUniqueInput;
  notification?: NotificationWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput | null;
};