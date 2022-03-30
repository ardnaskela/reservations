import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CompanyTypeResolverBase } from "./base/companyType.resolver.base";
import { CompanyType } from "./base/CompanyType";
import { CompanyTypeService } from "./companyType.service";

@graphql.Resolver(() => CompanyType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CompanyTypeResolver extends CompanyTypeResolverBase {
  constructor(
    protected readonly service: CompanyTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
