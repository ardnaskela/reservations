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

import { ADDRESS_TITLE_FIELD } from "./AddressTitle";
import { COMPANYTYPE_TITLE_FIELD } from "../companyType/CompanyTypeTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="postal_code" source="postalCode" />
        <TextField label="province" source="province" />
        <TextField label="street" source="street" />
        <TextField label="street_number" source="streetNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Company"
          target="AddressId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="address"
              source="address.id"
              reference="Address"
            >
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
            <ReferenceField
              label="Owner"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="phoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="vatCode" source="vatCode" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
