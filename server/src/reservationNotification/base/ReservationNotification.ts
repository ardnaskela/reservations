/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Notification } from "../../notification/base/Notification";
import { Reservation } from "../../reservation/base/Reservation";
@ObjectType()
class ReservationNotification {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Notification,
  })
  @ValidateNested()
  @Type(() => Notification)
  notification?: Notification;

  @ApiProperty({
    required: true,
    type: () => Reservation,
  })
  @ValidateNested()
  @Type(() => Reservation)
  reservation?: Reservation;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { ReservationNotification };
