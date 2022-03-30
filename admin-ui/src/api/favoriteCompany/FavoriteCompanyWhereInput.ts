import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FavoriteCompanyWhereInput = {
  company?: CompanyWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
