import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DayOfWeekService } from "./dayOfWeek.service";
import { DayOfWeekControllerBase } from "./base/dayOfWeek.controller.base";

@swagger.ApiTags("dayOfWeeks")
@common.Controller("dayOfWeeks")
export class DayOfWeekController extends DayOfWeekControllerBase {
  constructor(
    protected readonly service: DayOfWeekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
