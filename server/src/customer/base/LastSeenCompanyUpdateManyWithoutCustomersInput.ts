/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LastSeenCompanyWhereUniqueInput } from "../../lastSeenCompany/base/LastSeenCompanyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class LastSeenCompanyUpdateManyWithoutCustomersInput {
  @Field(() => [LastSeenCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LastSeenCompanyWhereUniqueInput],
  })
  connect?: Array<LastSeenCompanyWhereUniqueInput>;

  @Field(() => [LastSeenCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LastSeenCompanyWhereUniqueInput],
  })
  disconnect?: Array<LastSeenCompanyWhereUniqueInput>;

  @Field(() => [LastSeenCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LastSeenCompanyWhereUniqueInput],
  })
  set?: Array<LastSeenCompanyWhereUniqueInput>;
}
export { LastSeenCompanyUpdateManyWithoutCustomersInput };
