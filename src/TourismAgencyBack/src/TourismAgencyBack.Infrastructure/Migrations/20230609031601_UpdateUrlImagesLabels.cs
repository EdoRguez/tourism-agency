using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TourismAgencyBack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUrlImagesLabels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BoatImageURLs_Boats_BoatId",
                table: "BoatImageURLs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BoatImageURLs",
                table: "BoatImageURLs");

            migrationBuilder.RenameTable(
                name: "BoatImageURLs",
                newName: "BoatImageUrls");

            migrationBuilder.RenameColumn(
                name: "ImageURL",
                table: "BoatImageUrls",
                newName: "ImageUrl");

            migrationBuilder.RenameColumn(
                name: "BoatImageURLId",
                table: "BoatImageUrls",
                newName: "BoatImageUrlId");

            migrationBuilder.RenameIndex(
                name: "IX_BoatImageURLs_BoatId",
                table: "BoatImageUrls",
                newName: "IX_BoatImageUrls_BoatId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BoatImageUrls",
                table: "BoatImageUrls",
                columns: new[] { "BoatImageUrlId", "BoatId" });

            migrationBuilder.AddForeignKey(
                name: "FK_BoatImageUrls_Boats_BoatId",
                table: "BoatImageUrls",
                column: "BoatId",
                principalTable: "Boats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BoatImageUrls_Boats_BoatId",
                table: "BoatImageUrls");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BoatImageUrls",
                table: "BoatImageUrls");

            migrationBuilder.RenameTable(
                name: "BoatImageUrls",
                newName: "BoatImageURLs");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "BoatImageURLs",
                newName: "ImageURL");

            migrationBuilder.RenameColumn(
                name: "BoatImageUrlId",
                table: "BoatImageURLs",
                newName: "BoatImageURLId");

            migrationBuilder.RenameIndex(
                name: "IX_BoatImageUrls_BoatId",
                table: "BoatImageURLs",
                newName: "IX_BoatImageURLs_BoatId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BoatImageURLs",
                table: "BoatImageURLs",
                columns: new[] { "BoatImageURLId", "BoatId" });

            migrationBuilder.AddForeignKey(
                name: "FK_BoatImageURLs_Boats_BoatId",
                table: "BoatImageURLs",
                column: "BoatId",
                principalTable: "Boats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
