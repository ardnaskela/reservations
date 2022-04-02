import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NOTIFICATION_TITLE_FIELD } from "../notification/NotificationTitle";
import { RESERVATION_TITLE_FIELD } from "../reservation/ReservationTitle";

export const ReservationNotificationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReservationNotifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customText" source="customText" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Notification"
          source="notification.id"
          reference="Notification"
        >
          <TextField source={NOTIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Reservation"
          source="reservation.id"
          reference="Reservation"
        >
          <TextField source={RESERVATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
