import { SortOrder } from "../../util/SortOrder";

export type TimeSlotOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  dayOfWeek?: SortOrder;
  id?: SortOrder;
  maxSeatsAvailable?: SortOrder;
  timeFrom?: SortOrder;
  timeTo?: SortOrder;
  updatedAt?: SortOrder;
};
