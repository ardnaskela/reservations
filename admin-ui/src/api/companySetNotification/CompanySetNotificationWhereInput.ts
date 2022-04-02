import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";

export type CompanySetNotificationWhereInput = {
  company?: CompanyWhereUniqueInput;
  customText?: StringNullableFilter;
  id?: StringFilter;
  notification?: NotificationWhereUniqueInput;
};
