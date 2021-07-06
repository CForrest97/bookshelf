import { getBook } from "../../../../../src/modules/books/api";

describe("getBook", () => {
  it("should get a book", async () => {
    const id = "OL45883W";

    const book = await getBook(id);

    expect(book).toMatchInlineSnapshot(`
      Object {
        "authors": Array [
          "OL34184A",
        ],
        "id": "OL45883W",
        "name": "Fantastic Mr. Fox",
      }
    `);
  });
});
