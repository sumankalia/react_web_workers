import { faker } from '@faker-js/faker';

export function fetchUsers() {
    const users = [];

    for (let i = 0; i < 25000; i++) {
        let id = i + 1;
        let name = faker.person.fullName();
        let email = faker.internet.email();
        let joinedOn = faker.date.recent();
        let commentCount = faker.number.int({ min: 0, max: 100 });
        let user = {
            id,
            name,
            email,
            joinedOn,
            commentCount
        };
        users.push(user);
    }
    return Promise.resolve(users);
}

export function sortListDescending(users) {
    return users.sort((a, b) => b.commentCount - a.commentCount);
}