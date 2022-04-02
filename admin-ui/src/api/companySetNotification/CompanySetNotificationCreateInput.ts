import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";

export type CompanySetNotificationCreateInput = {
  company: CompanyWhereUniqueInput;
  customText?: string | null;
  notification: NotificationWhereUniqueInput;
};
