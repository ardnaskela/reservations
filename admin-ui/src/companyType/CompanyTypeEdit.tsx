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

export const CompanyTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <ReferenceArrayInput
          source="company"
          reference="Company"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
