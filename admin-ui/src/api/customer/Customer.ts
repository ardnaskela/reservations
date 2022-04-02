import { FavoriteCompany } from "../favoriteCompany/FavoriteCompany";
import { Company } from "../company/Company";
import { LastSeenCompany } from "../lastSeenCompany/LastSeenCompany";
import { Reservation } from "../reservation/Reservation";

export type Customer = {
  createdAt: Date;
  email: string;
  favoriteCompanies?: Array<FavoriteCompany>;
  firstName: string;
  handledCompanies?: Array<Company>;
  id: string;
  isVerified: boolean | null;
  lastName: string;
  lastSeenCompanies?: Array<LastSeenCompany>;
  phoneNumber: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
