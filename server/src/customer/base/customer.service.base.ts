/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Customer,
  FavoriteCompany,
  Company,
  LastSeenCompany,
  Reservation,
} from "@prisma/client";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async findMany<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<Customer[]> {
    return this.prisma.customer.findMany(args);
  }
  async findOne<T extends Prisma.CustomerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindUniqueArgs>
  ): Promise<Customer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async create<T extends Prisma.CustomerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerCreateArgs>
  ): Promise<Customer> {
    return this.prisma.customer.create<T>(args);
  }
  async update<T extends Prisma.CustomerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerUpdateArgs>
  ): Promise<Customer> {
    return this.prisma.customer.update<T>(args);
  }
  async delete<T extends Prisma.CustomerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerDeleteArgs>
  ): Promise<Customer> {
    return this.prisma.customer.delete(args);
  }

  async findFavoriteCompanies(
    parentId: string,
    args: Prisma.FavoriteCompanyFindManyArgs
  ): Promise<FavoriteCompany[]> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .favoriteCompanies(args);
  }

  async findHandledCompanies(
    parentId: string,
    args: Prisma.CompanyFindManyArgs
  ): Promise<Company[]> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .handledCompanies(args);
  }

  async findLastSeenCompanies(
    parentId: string,
    args: Prisma.LastSeenCompanyFindManyArgs
  ): Promise<LastSeenCompany[]> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .lastSeenCompanies(args);
  }

  async findReservations(
    parentId: string,
    args: Prisma.ReservationFindManyArgs
  ): Promise<Reservation[]> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .reservations(args);
  }
}
