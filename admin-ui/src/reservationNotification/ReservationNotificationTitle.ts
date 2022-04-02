import { ReservationNotification as TReservationNotification } from "../api/reservationNotification/ReservationNotification";

export const RESERVATIONNOTIFICATION_TITLE_FIELD = "customText";

export const ReservationNotificationTitle = (
  record: TReservationNotification
): string => {
  return record.customText || record.id;
};
