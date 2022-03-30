import { SortOrder } from "../../util/SortOrder";

export type LastSeenCompanyOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
