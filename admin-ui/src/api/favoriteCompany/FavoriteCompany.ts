import { Company } from "../company/Company";
import { Customer } from "../customer/Customer";

export type FavoriteCompany = {
  company?: Company | null;
  createdAt: Date;
  customer?: Customer;
  id: string;
  updatedAt: Date;
};
