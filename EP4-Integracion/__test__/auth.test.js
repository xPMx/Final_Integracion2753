const request = require("supertest");
const app = require("../app");
const sequelize = require("../config/database");

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Auth Routes", () => {
  let token;

  // Prueba de registro
  it("should register a new user", async () => {
    const response = await request(app).post("/api/users/register").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(response.statusCode).toBe(201);
    expect(response.text).toBe("User registered");
  });

  // Prueba de inicio de sesión
  it("should log in and return a token", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
    token = response.body.token; // Guarda el token para pruebas posteriores
  });

  // Prueba de acceso a ruta protegida
  it("should access a protected route with valid token", async () => {
    const response = await request(app)
      .get("/api/clientes") // Ruta protegida que estás probando
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
  });

  // Prueba de acceso a ruta protegida con token inválido
  it("should not access a protected route with invalid token", async () => {
    const response = await request(app)
      .get("/api/clientes")
      .set("Authorization", "Bearer invalidtoken");

    expect(response.statusCode).toBe(403);
  });
});
