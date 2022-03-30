/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";
@InputType()
class ReservationNotificationCreateInput {
  @ApiProperty({
    required: true,
    type: () => NotificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotificationWhereUniqueInput)
  @Field(() => NotificationWhereUniqueInput)
  notification!: NotificationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReservationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReservationWhereUniqueInput)
  @Field(() => ReservationWhereUniqueInput)
  reservation!: ReservationWhereUniqueInput;
}
export { ReservationNotificationCreateInput };
