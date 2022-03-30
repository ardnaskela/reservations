import { TimeSlot as TTimeSlot } from "../api/timeSlot/TimeSlot";

export const TIMESLOT_TITLE_FIELD = "timeFrom";

export const TimeSlotTitle = (record: TTimeSlot): string => {
  return record.timeFrom || record.id;
};
