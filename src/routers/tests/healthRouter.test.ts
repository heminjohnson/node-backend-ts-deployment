import supertest from "supertest";
import server from "../../server";

const request = supertest(server);

describe("routers", () => {
  describe("healthRouter", () => {
    test("it should test the endpoint GET /v1/admin/health", async () => {
      const response = await request.get("/v1/admin/health");

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ message: "Health OK" });
    });
  });
});
