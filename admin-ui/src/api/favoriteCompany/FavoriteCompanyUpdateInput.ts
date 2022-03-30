import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type FavoriteCompanyUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput;
};
