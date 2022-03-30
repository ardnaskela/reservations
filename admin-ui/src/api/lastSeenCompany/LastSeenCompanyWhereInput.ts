import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LastSeenCompanyWhereInput = {
  company?: CompanyWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
