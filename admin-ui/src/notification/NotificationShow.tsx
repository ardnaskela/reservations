import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { NOTIFICATION_TITLE_FIELD } from "./NotificationTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { RESERVATION_TITLE_FIELD } from "../reservation/ReservationTitle";

export const NotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="minutesBefore" source="minutesBefore" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CompanySetNotification"
          target="NotificationId"
          label="CompanySetNotifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
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
              label="TimeSlot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ReservationNotification"
          target="NotificationId"
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
