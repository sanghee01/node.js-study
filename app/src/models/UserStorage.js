"use strict";

class UserStrorage {
  static #users = {
    id: ["sanghee", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["이상희", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStrorage;
