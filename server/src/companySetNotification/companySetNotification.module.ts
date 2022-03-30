import { Module } from "@nestjs/common";
import { CompanySetNotificationModuleBase } from "./base/companySetNotification.module.base";
import { CompanySetNotificationService } from "./companySetNotification.service";
import { CompanySetNotificationController } from "./companySetNotification.controller";
import { CompanySetNotificationResolver } from "./companySetNotification.resolver";

@Module({
  imports: [CompanySetNotificationModuleBase],
  controllers: [CompanySetNotificationController],
  providers: [CompanySetNotificationService, CompanySetNotificationResolver],
  exports: [CompanySetNotificationService],
})
export class CompanySetNotificationModule {}
