// const sql = require('../sql').users;
// import sql from '../sql/users';

const cs = {}; // Reusable ColumnSet objects.

class Users {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
        // createColumnsets(pgp);
    }

    // Creates the table;
    create() {
        return this.db.none(
          'CREATE TABLE users(id serial PRIMARY KEY, username text NOT NULL, password text NOT NULL'
        );
    }

    // Initializes the table with some user records, and return their id-s;
    init() {
        return this.db.map(sql.init, [], row => row.id);
    }

    // Drops the table;
    drop() {
        return this.db.none(sql.drop);
    }

    // Removes all records from the table;
    empty() {
        return this.db.none(sql.empty);
    }

    // Adds a new user, and returns the new object;
    // add(name) {
    //     return this.db.one(sql.add, name);
    // }

    add(username, password){
      return this.db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, password]);
    }

    // Tries to delete a user by id, and returns the number of records deleted;
    remove(id) {
        return this.db.result('DELETE FROM users WHERE id = $1', +id, r => r.rowCount);
    }

    // Tries to find a user from id;
    findById(id) {
        return this.db.oneOrNone('SELECT * FROM users WHERE id = $1', +id);
    }

    // Tries to find a user from name;
    findByName(username) {
        return this.db.oneOrNone('SELECT * FROM users WHERE username = $1', username);
    }

    findUser(username, password){
      return this.db.oneOrNone('SELECT * FROM users WhERE username = $1 AND password = $2', [username, password]);
    }

    // Returns all user records;
    all() {
        return this.db.any('SELECT * FROM users');
    }

    // Returns the total number of users;
    total() {
        return this.db.one('SELECT count(*) FROM users', [], a => +a.count);
    }
}
//
// function createColumnsets(pgp) {
//     // create all ColumnSet objects only once:
//     if (!cs.insert) {
//         // Type TableName is useful when schema isn't default "public" ,
//         // otherwise you can just pass in a string for the table name.
//         const table = new pgp.helpers.TableName({table: 'users', schema: 'public'});
//
//         cs.insert = new pgp.helpers.ColumnSet(['name'], {table});
//         cs.update = cs.insert.extend(['?id']);
//     }
//     return cs;
// }

export default Users;
