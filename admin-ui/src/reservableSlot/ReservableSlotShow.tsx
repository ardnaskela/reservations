import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { RESERVABLESLOT_TITLE_FIELD } from "./ReservableSlotTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";

export const ReservableSlotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Reservation"
          target="ReservableSlotId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
