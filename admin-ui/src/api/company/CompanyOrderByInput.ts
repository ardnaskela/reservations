import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  addressId?: SortOrder;
  companyTypeId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  vatCode?: SortOrder;
};
