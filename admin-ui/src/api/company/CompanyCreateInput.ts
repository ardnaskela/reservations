import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanySetNotificationCreateNestedManyWithoutCompaniesInput } from "./CompanySetNotificationCreateNestedManyWithoutCompaniesInput";
import { CompanyTypeWhereUniqueInput } from "../companyType/CompanyTypeWhereUniqueInput";
import { FavoriteCompanyCreateNestedManyWithoutCompaniesInput } from "./FavoriteCompanyCreateNestedManyWithoutCompaniesInput";
import { LastSeenCompanyCreateNestedManyWithoutCompaniesInput } from "./LastSeenCompanyCreateNestedManyWithoutCompaniesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TimeSlotCreateNestedManyWithoutCompaniesInput } from "./TimeSlotCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address: AddressWhereUniqueInput;
  companySetNotifications?: CompanySetNotificationCreateNestedManyWithoutCompaniesInput;
  companyType?: CompanyTypeWhereUniqueInput | null;
  favoriteCompanies?: FavoriteCompanyCreateNestedManyWithoutCompaniesInput;
  lastSeenCompanies?: LastSeenCompanyCreateNestedManyWithoutCompaniesInput;
  logo?: string | null;
  name: string;
  owner: CustomerWhereUniqueInput;
  phoneNumber: string;
  timeSlots?: TimeSlotCreateNestedManyWithoutCompaniesInput;
  vatCode: string;
};
