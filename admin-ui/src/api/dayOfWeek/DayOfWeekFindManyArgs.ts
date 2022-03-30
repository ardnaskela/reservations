import { DayOfWeekWhereInput } from "./DayOfWeekWhereInput";
import { DayOfWeekOrderByInput } from "./DayOfWeekOrderByInput";

export type DayOfWeekFindManyArgs = {
  where?: DayOfWeekWhereInput;
  orderBy?: Array<DayOfWeekOrderByInput>;
  skip?: number;
  take?: number;
};
