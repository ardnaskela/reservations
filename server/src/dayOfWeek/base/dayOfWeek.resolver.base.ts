/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateDayOfWeekArgs } from "./CreateDayOfWeekArgs";
import { UpdateDayOfWeekArgs } from "./UpdateDayOfWeekArgs";
import { DeleteDayOfWeekArgs } from "./DeleteDayOfWeekArgs";
import { DayOfWeekFindManyArgs } from "./DayOfWeekFindManyArgs";
import { DayOfWeekFindUniqueArgs } from "./DayOfWeekFindUniqueArgs";
import { DayOfWeek } from "./DayOfWeek";
import { TimeSlotFindManyArgs } from "../../timeSlot/base/TimeSlotFindManyArgs";
import { TimeSlot } from "../../timeSlot/base/TimeSlot";
import { DayOfWeekService } from "../dayOfWeek.service";

@graphql.Resolver(() => DayOfWeek)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DayOfWeekResolverBase {
  constructor(
    protected readonly service: DayOfWeekService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "read",
    possession: "any",
  })
  async _dayOfWeeksMeta(
    @graphql.Args() args: DayOfWeekFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [DayOfWeek])
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "read",
    possession: "any",
  })
  async dayOfWeeks(
    @graphql.Args() args: DayOfWeekFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<DayOfWeek[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "DayOfWeek",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => DayOfWeek, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "read",
    possession: "own",
  })
  async dayOfWeek(
    @graphql.Args() args: DayOfWeekFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<DayOfWeek | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "DayOfWeek",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => DayOfWeek)
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "create",
    possession: "any",
  })
  async createDayOfWeek(
    @graphql.Args() args: CreateDayOfWeekArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<DayOfWeek> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "DayOfWeek",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"DayOfWeek"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DayOfWeek)
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "update",
    possession: "any",
  })
  async updateDayOfWeek(
    @graphql.Args() args: UpdateDayOfWeekArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<DayOfWeek | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "DayOfWeek",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"DayOfWeek"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DayOfWeek)
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "delete",
    possession: "any",
  })
  async deleteDayOfWeek(
    @graphql.Args() args: DeleteDayOfWeekArgs
  ): Promise<DayOfWeek | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [TimeSlot])
  @nestAccessControl.UseRoles({
    resource: "DayOfWeek",
    action: "read",
    possession: "any",
  })
  async timeSlots(
    @graphql.Parent() parent: DayOfWeek,
    @graphql.Args() args: TimeSlotFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TimeSlot[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TimeSlot",
    });
    const results = await this.service.findTimeSlots(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
