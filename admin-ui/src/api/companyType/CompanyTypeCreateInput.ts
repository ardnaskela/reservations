import { CompanyCreateNestedManyWithoutCompanyTypesInput } from "./CompanyCreateNestedManyWithoutCompanyTypesInput";

export type CompanyTypeCreateInput = {
  code: string;
  companies?: CompanyCreateNestedManyWithoutCompanyTypesInput;
  description: string;
};
