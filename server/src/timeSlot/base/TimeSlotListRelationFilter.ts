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
import { TimeSlotWhereInput } from "./TimeSlotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TimeSlotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TimeSlotWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereInput)
  @IsOptional()
  @Field(() => TimeSlotWhereInput, {
    nullable: true,
  })
  every?: TimeSlotWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimeSlotWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereInput)
  @IsOptional()
  @Field(() => TimeSlotWhereInput, {
    nullable: true,
  })
  some?: TimeSlotWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimeSlotWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereInput)
  @IsOptional()
  @Field(() => TimeSlotWhereInput, {
    nullable: true,
  })
  none?: TimeSlotWhereInput;
}
export { TimeSlotListRelationFilter };