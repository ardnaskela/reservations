import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LastSeenCompanyService } from "./lastSeenCompany.service";
import { LastSeenCompanyControllerBase } from "./base/lastSeenCompany.controller.base";

@swagger.ApiTags("lastSeenCompanies")
@common.Controller("lastSeenCompanies")
export class LastSeenCompanyController extends LastSeenCompanyControllerBase {
  constructor(
    protected readonly service: LastSeenCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
