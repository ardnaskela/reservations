import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type CompanySetNotificationWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  notification?: NotificationWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
};
