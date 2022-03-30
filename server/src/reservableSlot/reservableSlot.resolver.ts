import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ReservableSlotResolverBase } from "./base/reservableSlot.resolver.base";
import { ReservableSlot } from "./base/ReservableSlot";
import { ReservableSlotService } from "./reservableSlot.service";

@graphql.Resolver(() => ReservableSlot)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReservableSlotResolver extends ReservableSlotResolverBase {
  constructor(
    protected readonly service: ReservableSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
