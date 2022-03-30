import { CompanyUpdateManyWithoutAddressesInput } from "./CompanyUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  companies?: CompanyUpdateManyWithoutAddressesInput;
  postalCode?: string | null;
  province?: string | null;
  street?: string | null;
  streetNumber?: string | null;
};
