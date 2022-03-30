import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompanyTypeService } from "./companyType.service";
import { CompanyTypeControllerBase } from "./base/companyType.controller.base";

@swagger.ApiTags("companyTypes")
@common.Controller("companyTypes")
export class CompanyTypeController extends CompanyTypeControllerBase {
  constructor(
    protected readonly service: CompanyTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
