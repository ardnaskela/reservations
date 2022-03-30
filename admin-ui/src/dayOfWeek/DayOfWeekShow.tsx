import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { DAYOFWEEK_TITLE_FIELD } from "./DayOfWeekTitle";

export const DayOfWeekShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TimeSlot"
          target="DayOfWeekId"
          label="TimeSlots"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="dayOfWeek"
              source="dayofweek.id"
              reference="DayOfWeek"
            >
              <TextField source={DAYOFWEEK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="maxSeatsAvailable" source="maxSeatsAvailable" />
            <TextField label="timeFrom" source="timeFrom" />
            <TextField label="timeTo" source="timeTo" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
