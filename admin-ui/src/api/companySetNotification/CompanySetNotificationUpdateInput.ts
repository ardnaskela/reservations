import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";

export type CompanySetNotificationUpdateInput = {
  company?: CompanyWhereUniqueInput;
  customText?: string | null;
  notification?: NotificationWhereUniqueInput;
};
