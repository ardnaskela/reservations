import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DayOfWeekResolverBase } from "./base/dayOfWeek.resolver.base";
import { DayOfWeek } from "./base/DayOfWeek";
import { DayOfWeekService } from "./dayOfWeek.service";

@graphql.Resolver(() => DayOfWeek)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DayOfWeekResolver extends DayOfWeekResolverBase {
  constructor(
    protected readonly service: DayOfWeekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
