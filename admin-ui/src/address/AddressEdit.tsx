import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <ReferenceArrayInput
          source="companies"
          reference="Company"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="postal_code" source="postalCode" />
        <TextInput label="province" source="province" />
        <TextInput label="street" source="street" />
        <TextInput label="street_number" source="streetNumber" />
      </SimpleForm>
    </Edit>
  );
};
