using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TourismAgencyBack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BoatEquipments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    IconClass = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoatEquipments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BoatTypes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoatTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Destinations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Boats",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    NumberPeople = table.Column<short>(type: "smallint", nullable: false),
                    MainImageUrl = table.Column<string>(type: "text", nullable: false),
                    BasePrice = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    DestinationId = table.Column<Guid>(type: "uuid", nullable: false),
                    BoatTypeId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Boats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Boats_BoatTypes_BoatTypeId",
                        column: x => x.BoatTypeId,
                        principalTable: "BoatTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Boats_Destinations_DestinationId",
                        column: x => x.DestinationId,
                        principalTable: "Destinations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BoatBoatEquipment",
                columns: table => new
                {
                    BoatEquipmentsId = table.Column<Guid>(type: "uuid", nullable: false),
                    BoatsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoatBoatEquipment", x => new { x.BoatEquipmentsId, x.BoatsId });
                    table.ForeignKey(
                        name: "FK_BoatBoatEquipment_BoatEquipments_BoatEquipmentsId",
                        column: x => x.BoatEquipmentsId,
                        principalTable: "BoatEquipments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BoatBoatEquipment_Boats_BoatsId",
                        column: x => x.BoatsId,
                        principalTable: "Boats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BoatImageURLs",
                columns: table => new
                {
                    BoatImageURLId = table.Column<Guid>(type: "uuid", nullable: false),
                    BoatId = table.Column<Guid>(type: "uuid", nullable: false),
                    ImageURL = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoatImageURLs", x => new { x.BoatImageURLId, x.BoatId });
                    table.ForeignKey(
                        name: "FK_BoatImageURLs_Boats_BoatId",
                        column: x => x.BoatId,
                        principalTable: "Boats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "BoatEquipments",
                columns: new[] { "Id", "IconClass", "Name" },
                values: new object[,]
                {
                    { new Guid("10bdf658-4d44-4b08-9e9d-6e428c0d7599"), "fas fa-music", "Equipo de Sonido" },
                    { new Guid("ec0c1117-2773-4386-90f6-cf8d3e224317"), "fas fa-umbrella-beach", "Toldo" }
                });

            migrationBuilder.InsertData(
                table: "BoatTypes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("1427d1d6-6b22-4130-81d7-3b56f0382e9c"), "Lancha" },
                    { new Guid("26e0da4e-3389-4dc5-8313-c6dedc5f618c"), "Catamarán" },
                    { new Guid("39d5495b-98bf-4328-89e9-abd76c4dbebe"), "Ferry" },
                    { new Guid("41555459-5395-4019-a142-15e6e000427f"), "Peñero" },
                    { new Guid("d1e72775-ced0-4a76-b60a-780dc0f78978"), "Yate" }
                });

            migrationBuilder.InsertData(
                table: "Destinations",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { new Guid("602c6e28-5acb-48f0-b85c-bbe09a21cf37"), "Caracas" },
                    { new Guid("8bfed66a-1ca4-46e7-8181-5e117f1ddc66"), "Parque Nacional Morrocoy" },
                    { new Guid("ab012a75-da36-4bfc-9cbc-924bc5551805"), "Margarita" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BoatBoatEquipment_BoatsId",
                table: "BoatBoatEquipment",
                column: "BoatsId");

            migrationBuilder.CreateIndex(
                name: "IX_BoatImageURLs_BoatId",
                table: "BoatImageURLs",
                column: "BoatId");

            migrationBuilder.CreateIndex(
                name: "IX_Boats_BoatTypeId",
                table: "Boats",
                column: "BoatTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Boats_DestinationId",
                table: "Boats",
                column: "DestinationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BoatBoatEquipment");

            migrationBuilder.DropTable(
                name: "BoatImageURLs");

            migrationBuilder.DropTable(
                name: "BoatEquipments");

            migrationBuilder.DropTable(
                name: "Boats");

            migrationBuilder.DropTable(
                name: "BoatTypes");

            migrationBuilder.DropTable(
                name: "Destinations");
        }
    }
}
