import { Company } from "../company/Company";

export type CompanyType = {
  code: string;
  companies?: Array<Company>;
  createdAt: Date;
  description: string;
  id: string;
  updatedAt: Date;
};
