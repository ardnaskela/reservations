import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { DAYOFWEEK_TITLE_FIELD } from "../dayOfWeek/DayOfWeekTitle";

export const TimeSlotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeSlots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="company" source="company.id" reference="Company">
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
    </List>
  );
};
