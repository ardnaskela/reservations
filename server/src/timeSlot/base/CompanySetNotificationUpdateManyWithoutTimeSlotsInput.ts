/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CompanySetNotificationWhereUniqueInput } from "../../companySetNotification/base/CompanySetNotificationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CompanySetNotificationUpdateManyWithoutTimeSlotsInput {
  @Field(() => [CompanySetNotificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanySetNotificationWhereUniqueInput],
  })
  connect?: Array<CompanySetNotificationWhereUniqueInput>;

  @Field(() => [CompanySetNotificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanySetNotificationWhereUniqueInput],
  })
  disconnect?: Array<CompanySetNotificationWhereUniqueInput>;

  @Field(() => [CompanySetNotificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanySetNotificationWhereUniqueInput],
  })
  set?: Array<CompanySetNotificationWhereUniqueInput>;
}
export { CompanySetNotificationUpdateManyWithoutTimeSlotsInput };
