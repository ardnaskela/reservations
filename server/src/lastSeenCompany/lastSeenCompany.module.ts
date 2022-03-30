import { Module } from "@nestjs/common";
import { LastSeenCompanyModuleBase } from "./base/lastSeenCompany.module.base";
import { LastSeenCompanyService } from "./lastSeenCompany.service";
import { LastSeenCompanyController } from "./lastSeenCompany.controller";
import { LastSeenCompanyResolver } from "./lastSeenCompany.resolver";

@Module({
  imports: [LastSeenCompanyModuleBase],
  controllers: [LastSeenCompanyController],
  providers: [LastSeenCompanyService, LastSeenCompanyResolver],
  exports: [LastSeenCompanyService],
})
export class LastSeenCompanyModule {}
