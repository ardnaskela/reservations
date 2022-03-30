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
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COMPANYTYPE_TITLE_FIELD } from "../companyType/CompanyTypeTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const CompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Companies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="companyType"
          source="companytype.id"
          reference="CompanyType"
        >
          <TextField source={COMPANYTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="name" source="name" />
        <ReferenceField label="Owner" source="customer.id" reference="Customer">
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vatCode" source="vatCode" />
      </Datagrid>
    </List>
  );
};
