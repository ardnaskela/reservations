import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LastSeenCompanyUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
