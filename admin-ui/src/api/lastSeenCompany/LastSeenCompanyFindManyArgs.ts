import { LastSeenCompanyWhereInput } from "./LastSeenCompanyWhereInput";
import { LastSeenCompanyOrderByInput } from "./LastSeenCompanyOrderByInput";

export type LastSeenCompanyFindManyArgs = {
  where?: LastSeenCompanyWhereInput;
  orderBy?: Array<LastSeenCompanyOrderByInput>;
  skip?: number;
  take?: number;
};
