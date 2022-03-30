import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavoriteCompanyService } from "./favoriteCompany.service";
import { FavoriteCompanyControllerBase } from "./base/favoriteCompany.controller.base";

@swagger.ApiTags("favoriteCompanies")
@common.Controller("favoriteCompanies")
export class FavoriteCompanyController extends FavoriteCompanyControllerBase {
  constructor(
    protected readonly service: FavoriteCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
