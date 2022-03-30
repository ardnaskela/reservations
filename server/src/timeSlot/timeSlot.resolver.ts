import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TimeSlotResolverBase } from "./base/timeSlot.resolver.base";
import { TimeSlot } from "./base/TimeSlot";
import { TimeSlotService } from "./timeSlot.service";

@graphql.Resolver(() => TimeSlot)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TimeSlotResolver extends TimeSlotResolverBase {
  constructor(
    protected readonly service: TimeSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
