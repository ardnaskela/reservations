/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FavoriteCompanyWhereUniqueInput } from "../../favoriteCompany/base/FavoriteCompanyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class FavoriteCompanyUpdateManyWithoutCompaniesInput {
  @Field(() => [FavoriteCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteCompanyWhereUniqueInput],
  })
  connect?: Array<FavoriteCompanyWhereUniqueInput>;

  @Field(() => [FavoriteCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteCompanyWhereUniqueInput],
  })
  disconnect?: Array<FavoriteCompanyWhereUniqueInput>;

  @Field(() => [FavoriteCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FavoriteCompanyWhereUniqueInput],
  })
  set?: Array<FavoriteCompanyWhereUniqueInput>;
}
export { FavoriteCompanyUpdateManyWithoutCompaniesInput };