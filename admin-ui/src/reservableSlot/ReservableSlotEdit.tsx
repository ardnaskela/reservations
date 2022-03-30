import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const ReservableSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateTimeFrom" source="dateTimeFrom" />
        <DateTimeInput label="DateTimeTo" source="dateTimeTo" />
        <BooleanInput label="isActive" source="isActive" />
        <ReferenceArrayInput
          source="reservation"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="seatsLeft" source="seatsLeft" />
        <ReferenceInput
          source="timeslot.id"
          reference="TimeSlot"
          label="TimeSlot"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
