import { DayOfWeek as TDayOfWeek } from "../api/dayOfWeek/DayOfWeek";

export const DAYOFWEEK_TITLE_FIELD = "code";

export const DayOfWeekTitle = (record: TDayOfWeek): string => {
  return record.code || record.id;
};
