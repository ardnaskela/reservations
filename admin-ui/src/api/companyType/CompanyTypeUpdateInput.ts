import { CompanyUpdateManyWithoutCompanyTypesInput } from "./CompanyUpdateManyWithoutCompanyTypesInput";

export type CompanyTypeUpdateInput = {
  code?: string;
  companies?: CompanyUpdateManyWithoutCompanyTypesInput;
  description?: string;
};
