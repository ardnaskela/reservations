import { CompanyCreateNestedManyWithoutAddressesInput } from "./CompanyCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  companies?: CompanyCreateNestedManyWithoutAddressesInput;
  postalCode?: string | null;
  province?: string | null;
  street?: string | null;
  streetNumber?: string | null;
};
