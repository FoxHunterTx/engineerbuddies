const mongodb= require('mongodb');
const uri = 'mongodb+srv://Scout:Rex1Scout2%23%24@cluster0.7llv6.gcp.mongodb.net/engineerbuddies?retryWrites=true&w=majority'
const mongoClient = mongodb.MongoClient;

// _ only used to define it as only locally used
let _db;

const mongoConnect = callback => {
    mongoClient.connect( 
        uri, {useUnifiedTopology: true,
        useNewUrlParser: true}).then(client =>{
            console.log('Connected to db');
            // collection (table): users
            _db = client.db();
            callback();
        }).catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;