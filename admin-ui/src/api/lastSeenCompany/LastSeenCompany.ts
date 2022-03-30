import { Company } from "../company/Company";
import { Customer } from "../customer/Customer";

export type LastSeenCompany = {
  company?: Company | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
