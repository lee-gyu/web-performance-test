import { faker } from "@faker-js/faker";

faker.seed(100)

function createFakeData( ) {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
    num: faker.number.int( { min: 20, max: 50 } ),
    country: faker.location.county()
  }
}

export function createBulkData( rowCount = 10000 ) {
  return Array.from( { length: 10000 }, createFakeData );
}