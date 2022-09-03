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
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateReservationNotificationArgs } from "./CreateReservationNotificationArgs";
import { UpdateReservationNotificationArgs } from "./UpdateReservationNotificationArgs";
import { DeleteReservationNotificationArgs } from "./DeleteReservationNotificationArgs";
import { ReservationNotificationFindManyArgs } from "./ReservationNotificationFindManyArgs";
import { ReservationNotificationFindUniqueArgs } from "./ReservationNotificationFindUniqueArgs";
import { ReservationNotification } from "./ReservationNotification";
import { Notification } from "../../notification/base/Notification";
import { Reservation } from "../../reservation/base/Reservation";
import { ReservationNotificationService } from "../reservationNotification.service";

@graphql.Resolver(() => ReservationNotification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReservationNotificationResolverBase {
  constructor(
    protected readonly service: ReservationNotificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ReservationNotification",
    action: "read",
    possession: "any",
  })
  async _reservationNotificationsMeta(
    @graphql.Args() args: ReservationNotificationFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ReservationNotification])
  @nestAccessControl.UseRoles({
    resource: "ReservationNotification",
    action: "read",
    possession: "any",
  })
  async reservationNotifications(
    @graphql.Args() args: ReservationNotificationFindManyArgs
  ): Promise<ReservationNotification[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ReservationNotification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ReservationNotification",
    action: "read",
    possession: "own",
  })
  async reservationNotification(
    @graphql.Args() args: ReservationNotificationFindUniqueArgs
  ): Promise<ReservationNotification | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ReservationNotification)
  @nestAccessControl.UseRoles({
    resource: "ReservationNotification",
    action: "create",
    possession: "any",
  })
  async createReservationNotification(
    @graphql.Args() args: CreateReservationNotificationArgs
  ): Promise<ReservationNotification> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        notification: {
          connect: args.data.notification,
        },

        reservation: {
          connect: args.data.reservation,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ReservationNotification)
  @nestAccessControl.UseRoles({
    resource: "ReservationNotification",
    action: "update",
    possession: "any",
  })
  async updateReservationNotification(
    @graphql.Args() args: UpdateReservationNotificationArgs
  ): Promise<ReservationNotification | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          notification: {
            connect: args.data.notification,
          },

          reservation: {
            connect: args.data.reservation,
          },
        },
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

  @graphql.Mutation(() => ReservationNotification)
  @nestAccessControl.UseRoles({
    resource: "ReservationNotification",
    action: "delete",
    possession: "any",
  })
  async deleteReservationNotification(
    @graphql.Args() args: DeleteReservationNotificationArgs
  ): Promise<ReservationNotification | null> {
    try {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Notification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async notification(
    @graphql.Parent() parent: ReservationNotification
  ): Promise<Notification | null> {
    const result = await this.service.getNotification(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Reservation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservation(
    @graphql.Parent() parent: ReservationNotification
  ): Promise<Reservation | null> {
    const result = await this.service.getReservation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
