import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { DayOfWeekTitle } from "../dayOfWeek/DayOfWeekTitle";
import { ReservableSlotTitle } from "../reservableSlot/ReservableSlotTitle";
import { CompanySetNotificationTitle } from "../companySetNotification/CompanySetNotificationTitle";

export const TimeSlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="dayofweek.id"
          reference="DayOfWeek"
          label="dayOfWeek"
        >
          <SelectInput optionText={DayOfWeekTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="maxSeatsAvailable"
          source="maxSeatsAvailable"
        />
        <ReferenceArrayInput
          source="reservableSlots"
          reference="ReservableSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservableSlotTitle} />
        </ReferenceArrayInput>
        <TextInput label="timeFrom" source="timeFrom" />
        <ReferenceArrayInput
          source="timeSlotNotifications"
          reference="CompanySetNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanySetNotificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="timeTo" source="timeTo" />
      </SimpleForm>
    </Create>
  );
};
