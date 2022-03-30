import { Module } from "@nestjs/common";
import { DayOfWeekModuleBase } from "./base/dayOfWeek.module.base";
import { DayOfWeekService } from "./dayOfWeek.service";
import { DayOfWeekController } from "./dayOfWeek.controller";
import { DayOfWeekResolver } from "./dayOfWeek.resolver";

@Module({
  imports: [DayOfWeekModuleBase],
  controllers: [DayOfWeekController],
  providers: [DayOfWeekService, DayOfWeekResolver],
  exports: [DayOfWeekService],
})
export class DayOfWeekModule {}
