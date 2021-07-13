import { getAuthor } from "@src/modules/authors/api";

describe("getAuthor", () => {
  it("should get an author", async () => {
    const id = "OL34184A";

    const author = await getAuthor(id);

    expect(author).toMatchInlineSnapshot(`
      Object {
        "id": "OL34184A",
        "imageUrl": "https://covers.openlibrary.org/a/id/9395323-L.jpg",
        "name": "Roald Dahl",
      }
    `);
  });
});
