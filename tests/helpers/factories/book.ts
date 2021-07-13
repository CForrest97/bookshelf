import { Factory } from "fishery";
import Faker from "faker";
import { Book } from "@src/modules/books/entities/Book";

export const BookFactory = Factory.define<Book>(({ params }) => {
  const generatedName = `The ${Faker.company.catchPhraseAdjective()} ${Faker.hacker.noun()}`;

  const generatedBook: Book = {
    id: Faker.datatype.uuid(),
    name: `${generatedName} part: ${Faker.datatype.hexaDecimal(5)}`,
    authors: [],
  };

  return {
    ...generatedBook,
    ...params,
  };
});
