import { SortOrder } from "../../util/SortOrder";

export type FavoriteCompanyOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
