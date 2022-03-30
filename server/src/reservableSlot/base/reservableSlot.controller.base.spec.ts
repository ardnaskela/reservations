import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ReservableSlotController } from "../reservableSlot.controller";
import { ReservableSlotService } from "../reservableSlot.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateTimeFrom: new Date(),
  dateTimeTo: new Date(),
  id: "exampleId",
  isActive: "true",
  seatsLeft: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateTimeFrom: new Date(),
  dateTimeTo: new Date(),
  id: "exampleId",
  isActive: "true",
  seatsLeft: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateTimeFrom: new Date(),
    dateTimeTo: new Date(),
    id: "exampleId",
    isActive: "true",
    seatsLeft: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateTimeFrom: new Date(),
  dateTimeTo: new Date(),
  id: "exampleId",
  isActive: "true",
  seatsLeft: 42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("ReservableSlot", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReservableSlotService,
          useValue: service,
        },
      ],
      controllers: [ReservableSlotController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /reservableSlots", async () => {
    await request(app.getHttpServer())
      .post("/reservableSlots")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTimeFrom: CREATE_RESULT.dateTimeFrom.toISOString(),
        dateTimeTo: CREATE_RESULT.dateTimeTo.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /reservableSlots", async () => {
    await request(app.getHttpServer())
      .get("/reservableSlots")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateTimeFrom: FIND_MANY_RESULT[0].dateTimeFrom.toISOString(),
          dateTimeTo: FIND_MANY_RESULT[0].dateTimeTo.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /reservableSlots/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reservableSlots"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reservableSlots/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reservableSlots"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateTimeFrom: FIND_ONE_RESULT.dateTimeFrom.toISOString(),
        dateTimeTo: FIND_ONE_RESULT.dateTimeTo.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
