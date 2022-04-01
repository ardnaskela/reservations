import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { TIMESLOT_TITLE_FIELD } from "./TimeSlotTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { NOTIFICATION_TITLE_FIELD } from "../notification/NotificationTitle";

export const TimeSlotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dayOfWeek" source="dayOfWeek" />
        <TextField label="ID" source="id" />
        <TextField label="maxSeatsAvailable" source="maxSeatsAvailable" />
        <TextField label="timeFrom" source="timeFrom" />
        <TextField label="timeTo" source="timeTo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ReservableSlot"
          target="TimeSlotId"
          label="ReservableSlots"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateTimeFrom" source="dateTimeFrom" />
            <TextField label="DateTimeTo" source="dateTimeTo" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <TextField label="seatsLeft" source="seatsLeft" />
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
          reference="CompanySetNotification"
          target="TimeSlotId"
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
      </SimpleShowLayout>
    </Show>
  );
};
