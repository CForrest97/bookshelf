import { Factory } from "fishery";
import Faker from "faker";
import { Author } from "@src/modules/authors/entities/Author";

export const AuthorFactory = Factory.define<Author>(({ params }) => {
  const generatedAuthor: Author = {
    id: Faker.datatype.uuid(),
    name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    imageUrl: Faker.image.people(),
  };

  return {
    ...generatedAuthor,
    ...params,
  };
});
