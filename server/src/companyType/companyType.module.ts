import { Module } from "@nestjs/common";
import { CompanyTypeModuleBase } from "./base/companyType.module.base";
import { CompanyTypeService } from "./companyType.service";
import { CompanyTypeController } from "./companyType.controller";
import { CompanyTypeResolver } from "./companyType.resolver";

@Module({
  imports: [CompanyTypeModuleBase],
  controllers: [CompanyTypeController],
  providers: [CompanyTypeService, CompanyTypeResolver],
  exports: [CompanyTypeService],
})
export class CompanyTypeModule {}
