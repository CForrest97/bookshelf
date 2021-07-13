import { getAuthorsBooks } from "@src/modules/authors/api";

describe("getAuthorsBooks", () => {
  it("should get an authors books", async () => {
    const id = "OL34184A";

    const books = await getAuthorsBooks(id);

    expect(books).toEqual(expect.arrayContaining(["OL24647383W"]));
  });
});
