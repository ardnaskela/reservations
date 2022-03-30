import { ReservationNotification as TReservationNotification } from "../api/reservationNotification/ReservationNotification";

export const RESERVATIONNOTIFICATION_TITLE_FIELD = "id";

export const ReservationNotificationTitle = (
  record: TReservationNotification
): string => {
  return record.id || record.id;
};
