import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompanySetNotificationService } from "./companySetNotification.service";
import { CompanySetNotificationControllerBase } from "./base/companySetNotification.controller.base";

@swagger.ApiTags("companySetNotifications")
@common.Controller("companySetNotifications")
export class CompanySetNotificationController extends CompanySetNotificationControllerBase {
  constructor(
    protected readonly service: CompanySetNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
