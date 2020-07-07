const faker = require("faker/locale/es");
const moment = require("moment");

faker.seed(1);

const events = [];

for (let i = 0; i < 20; i++) {
  const startsAt = moment(faker.date.past());
  const endsAt = moment(startsAt).add(60 + faker.random.number(180), "minutes");

  events.push({
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    imageUrl: faker.image.imageUrl(),
    group: faker.company.companyName(),
    startsAt: endsAt.toISOString(),
    isOnline: faker.random.boolean(),
    isFeatured: i < 3,
  });
}

module.exports = events;
