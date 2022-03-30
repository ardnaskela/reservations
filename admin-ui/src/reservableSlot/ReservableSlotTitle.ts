import { ReservableSlot as TReservableSlot } from "../api/reservableSlot/ReservableSlot";

export const RESERVABLESLOT_TITLE_FIELD = "id";

export const ReservableSlotTitle = (record: TReservableSlot): string => {
  return record.id || record.id;
};
