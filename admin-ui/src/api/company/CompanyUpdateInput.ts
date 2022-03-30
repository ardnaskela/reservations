import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanySetNotificationUpdateManyWithoutCompaniesInput } from "./CompanySetNotificationUpdateManyWithoutCompaniesInput";
import { CompanyTypeWhereUniqueInput } from "../companyType/CompanyTypeWhereUniqueInput";
import { FavoriteCompanyUpdateManyWithoutCompaniesInput } from "./FavoriteCompanyUpdateManyWithoutCompaniesInput";
import { LastSeenCompanyUpdateManyWithoutCompaniesInput } from "./LastSeenCompanyUpdateManyWithoutCompaniesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TimeSlotUpdateManyWithoutCompaniesInput } from "./TimeSlotUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput;
  companySetNotifications?: CompanySetNotificationUpdateManyWithoutCompaniesInput;
  companyType?: CompanyTypeWhereUniqueInput | null;
  favoriteCompanies?: FavoriteCompanyUpdateManyWithoutCompaniesInput;
  lastSeenCompanies?: LastSeenCompanyUpdateManyWithoutCompaniesInput;
  logo?: string | null;
  name?: string;
  owner?: CustomerWhereUniqueInput;
  phoneNumber?: string;
  timeSlots?: TimeSlotUpdateManyWithoutCompaniesInput;
  vatCode?: string;
};
