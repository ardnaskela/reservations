import { CompanyTypeWhereInput } from "./CompanyTypeWhereInput";
import { CompanyTypeOrderByInput } from "./CompanyTypeOrderByInput";

export type CompanyTypeFindManyArgs = {
  where?: CompanyTypeWhereInput;
  orderBy?: Array<CompanyTypeOrderByInput>;
  skip?: number;
  take?: number;
};
