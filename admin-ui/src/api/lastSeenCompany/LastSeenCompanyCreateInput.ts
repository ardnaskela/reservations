import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LastSeenCompanyCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
