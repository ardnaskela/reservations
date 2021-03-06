/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, FavoriteCompany, Company, Customer } from "@prisma/client";

export class FavoriteCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FavoriteCompanyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCompanyFindManyArgs>
  ): Promise<number> {
    return this.prisma.favoriteCompany.count(args);
  }

  async findMany<T extends Prisma.FavoriteCompanyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCompanyFindManyArgs>
  ): Promise<FavoriteCompany[]> {
    return this.prisma.favoriteCompany.findMany(args);
  }
  async findOne<T extends Prisma.FavoriteCompanyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCompanyFindUniqueArgs>
  ): Promise<FavoriteCompany | null> {
    return this.prisma.favoriteCompany.findUnique(args);
  }
  async create<T extends Prisma.FavoriteCompanyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCompanyCreateArgs>
  ): Promise<FavoriteCompany> {
    return this.prisma.favoriteCompany.create<T>(args);
  }
  async update<T extends Prisma.FavoriteCompanyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCompanyUpdateArgs>
  ): Promise<FavoriteCompany> {
    return this.prisma.favoriteCompany.update<T>(args);
  }
  async delete<T extends Prisma.FavoriteCompanyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCompanyDeleteArgs>
  ): Promise<FavoriteCompany> {
    return this.prisma.favoriteCompany.delete(args);
  }

  async getCompany(parentId: string): Promise<Company | null> {
    return this.prisma.favoriteCompany
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.favoriteCompany
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
