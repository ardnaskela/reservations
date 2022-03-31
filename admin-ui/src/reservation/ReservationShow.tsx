import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { NOTIFICATION_TITLE_FIELD } from "../notification/NotificationTitle";
import { RESERVATION_TITLE_FIELD } from "./ReservationTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { RESERVABLESLOT_TITLE_FIELD } from "../reservableSlot/ReservableSlotTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isAccepted" source="isAccepted" />
        <ReferenceField
          label="ReservableSlot"
          source="reservableslot.id"
          reference="ReservableSlot"
        >
          <TextField source={RESERVABLESLOT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReservationNotification"
          target="ReservationId"
          label="ReservationNotifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
