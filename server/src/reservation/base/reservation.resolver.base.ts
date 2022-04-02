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
import { CreateReservationArgs } from "./CreateReservationArgs";
import { UpdateReservationArgs } from "./UpdateReservationArgs";
import { DeleteReservationArgs } from "./DeleteReservationArgs";
import { ReservationFindManyArgs } from "./ReservationFindManyArgs";
import { ReservationFindUniqueArgs } from "./ReservationFindUniqueArgs";
import { Reservation } from "./Reservation";
import { ReservationNotificationFindManyArgs } from "../../reservationNotification/base/ReservationNotificationFindManyArgs";
import { ReservationNotification } from "../../reservationNotification/base/ReservationNotification";
import { Company } from "../../company/base/Company";
import { Customer } from "../../customer/base/Customer";
import { ReservableSlot } from "../../reservableSlot/base/ReservableSlot";
import { ReservationService } from "../reservation.service";

@graphql.Resolver(() => Reservation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReservationResolverBase {
  constructor(
    protected readonly service: ReservationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async _reservationsMeta(
    @graphql.Args() args: ReservationFindManyArgs
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

  @graphql.Query(() => [Reservation])
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservations(
    @graphql.Args() args: ReservationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Reservation[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Reservation",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Reservation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "own",
  })
  async reservation(
    @graphql.Args() args: ReservationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Reservation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Reservation",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Reservation)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "create",
    possession: "any",
  })
  async createReservation(
    @graphql.Args() args: CreateReservationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Reservation> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Reservation",
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
        `providing the properties: ${properties} on ${"Reservation"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        company: args.data.company
          ? {
              connect: args.data.company,
            }
          : undefined,

        customer: {
          connect: args.data.customer,
        },

        reservableSlot: args.data.reservableSlot
          ? {
              connect: args.data.reservableSlot,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Reservation)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "update",
    possession: "any",
  })
  async updateReservation(
    @graphql.Args() args: UpdateReservationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Reservation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Reservation",
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
        `providing the properties: ${properties} on ${"Reservation"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          company: args.data.company
            ? {
                connect: args.data.company,
              }
            : undefined,

          customer: {
            connect: args.data.customer,
          },

          reservableSlot: args.data.reservableSlot
            ? {
                connect: args.data.reservableSlot,
              }
            : undefined,
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

  @graphql.Mutation(() => Reservation)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "delete",
    possession: "any",
  })
  async deleteReservation(
    @graphql.Args() args: DeleteReservationArgs
  ): Promise<Reservation | null> {
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

  @graphql.ResolveField(() => [ReservationNotification])
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservationNotifications(
    @graphql.Parent() parent: Reservation,
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

  @graphql.ResolveField(() => Company, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async company(
    @graphql.Parent() parent: Reservation,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Company | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Company",
    });
    const result = await this.service.getCompany(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async customer(
    @graphql.Parent() parent: Reservation,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Customer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Customer",
    });
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => ReservableSlot, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservableSlot(
    @graphql.Parent() parent: Reservation,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ReservableSlot | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ReservableSlot",
    });
    const result = await this.service.getReservableSlot(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
