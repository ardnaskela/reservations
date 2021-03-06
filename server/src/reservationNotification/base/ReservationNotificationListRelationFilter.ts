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
import { ReservationNotificationWhereInput } from "./ReservationNotificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReservationNotificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReservationNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => ReservationNotificationWhereInput)
  @IsOptional()
  @Field(() => ReservationNotificationWhereInput, {
    nullable: true,
  })
  every?: ReservationNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReservationNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => ReservationNotificationWhereInput)
  @IsOptional()
  @Field(() => ReservationNotificationWhereInput, {
    nullable: true,
  })
  some?: ReservationNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReservationNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => ReservationNotificationWhereInput)
  @IsOptional()
  @Field(() => ReservationNotificationWhereInput, {
    nullable: true,
  })
  none?: ReservationNotificationWhereInput;
}
export { ReservationNotificationListRelationFilter };
