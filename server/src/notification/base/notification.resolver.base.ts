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
import { CreateNotificationArgs } from "./CreateNotificationArgs";
import { UpdateNotificationArgs } from "./UpdateNotificationArgs";
import { DeleteNotificationArgs } from "./DeleteNotificationArgs";
import { NotificationFindManyArgs } from "./NotificationFindManyArgs";
import { NotificationFindUniqueArgs } from "./NotificationFindUniqueArgs";
import { Notification } from "./Notification";
import { CompanySetNotificationFindManyArgs } from "../../companySetNotification/base/CompanySetNotificationFindManyArgs";
import { CompanySetNotification } from "../../companySetNotification/base/CompanySetNotification";
import { ReservationNotificationFindManyArgs } from "../../reservationNotification/base/ReservationNotificationFindManyArgs";
import { ReservationNotification } from "../../reservationNotification/base/ReservationNotification";
import { NotificationService } from "../notification.service";

@graphql.Resolver(() => Notification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NotificationResolverBase {
  constructor(
    protected readonly service: NotificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async _notificationsMeta(
    @graphql.Args() args: NotificationFindManyArgs
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

  @graphql.Query(() => [Notification])
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async notifications(
    @graphql.Args() args: NotificationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Notification",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Notification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "own",
  })
  async notification(
    @graphql.Args() args: NotificationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Notification",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "create",
    possession: "any",
  })
  async createNotification(
    @graphql.Args() args: CreateNotificationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Notification",
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
        `providing the properties: ${properties} on ${"Notification"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "update",
    possession: "any",
  })
  async updateNotification(
    @graphql.Args() args: UpdateNotificationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Notification | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Notification",
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
        `providing the properties: ${properties} on ${"Notification"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "delete",
    possession: "any",
  })
  async deleteNotification(
    @graphql.Args() args: DeleteNotificationArgs
  ): Promise<Notification | null> {
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

  @graphql.ResolveField(() => [CompanySetNotification])
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async companySetNotifications(
    @graphql.Parent() parent: Notification,
    @graphql.Args() args: CompanySetNotificationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CompanySetNotification[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CompanySetNotification",
    });
    const results = await this.service.findCompanySetNotifications(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [ReservationNotification])
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async reservationNotifications(
    @graphql.Parent() parent: Notification,
    @graphql.Args() args: ReservationNotificationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ReservationNotification[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ReservationNotification",
    });
    const results = await this.service.findReservationNotifications(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}