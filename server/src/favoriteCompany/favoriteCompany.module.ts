import { Module } from "@nestjs/common";
import { FavoriteCompanyModuleBase } from "./base/favoriteCompany.module.base";
import { FavoriteCompanyService } from "./favoriteCompany.service";
import { FavoriteCompanyController } from "./favoriteCompany.controller";
import { FavoriteCompanyResolver } from "./favoriteCompany.resolver";

@Module({
  imports: [FavoriteCompanyModuleBase],
  controllers: [FavoriteCompanyController],
  providers: [FavoriteCompanyService, FavoriteCompanyResolver],
  exports: [FavoriteCompanyService],
})
export class FavoriteCompanyModule {}
