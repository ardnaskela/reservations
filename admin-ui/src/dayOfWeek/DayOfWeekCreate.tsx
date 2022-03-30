import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const DayOfWeekCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="timeslot"
          reference="TimeSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
