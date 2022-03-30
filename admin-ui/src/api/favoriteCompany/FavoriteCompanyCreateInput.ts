import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FavoriteCompanyCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  customer: CustomerWhereUniqueInput;
};
