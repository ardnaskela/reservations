import { Company } from "../company/Company";

export type Address = {
  city: string | null;
  companies?: Array<Company>;
  createdAt: Date;
  id: string;
  postalCode: string | null;
  province: string | null;
  street: string | null;
  streetNumber: string | null;
  updatedAt: Date;
};
