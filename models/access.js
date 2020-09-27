const getDb = require('../util/database').getDb;

class Access {
    constructor(userEmail,userPassword) {
        this.email = userEmail;
        this.password = userPassword;
    }

    save() {
        const db = getDb();
        return db
          .collection('users')
          .insertOne({email: 'mytest@test.com', pw: 'test'})
          .then(result => {
              console.log(result);
          })
          .catch(err => {
              console.log(err);
          });
    }
}


module.exports = Access;