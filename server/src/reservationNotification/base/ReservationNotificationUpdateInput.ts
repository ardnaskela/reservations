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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";
import { Type } from "class-transformer";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";
@InputType()
class ReservationNotificationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customText?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotificationWhereUniqueInput)
  @IsOptional()
  @Field(() => NotificationWhereUniqueInput, {
    nullable: true,
  })
  notification?: NotificationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ReservationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReservationWhereUniqueInput)
  @IsOptional()
  @Field(() => ReservationWhereUniqueInput, {
    nullable: true,
  })
  reservation?: ReservationWhereUniqueInput;
}
export { ReservationNotificationUpdateInput };
