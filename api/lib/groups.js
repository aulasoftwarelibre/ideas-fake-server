const faker = require("faker/locale/es");
faker.seed(1);

const groups = [];

for (let i = 0; i < 20; i++) {
  groups.push({
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    imageUrl: faker.image.imageUrl(),
  });
}

module.exports = groups;
