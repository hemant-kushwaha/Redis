import { MongoClient } from "mongodb";
import { createClient } from "redis";

const redisClient = createClient();
const mongoClient = new MongoClient("mongodb://localhost:27017/testDB");

await mongoClient.connect();
await redisClient.connect();

const db = mongoClient.db();
const collection = db.collection("mongoTest");

// await redisClient.flushAll();
// await collection.deleteMany();

// // 📝 Redis Write
// console.time("Redis Write");
// await redisClient.json.set("user", "$", { _id: "123", name: "ProCodrr" });
// console.timeEnd("Redis Write");

// // 📝 MongoDB Write
// console.time("MongoDB Write");
// await collection.insertOne({ _id: "123", name: "ProCodrr" });
// console.timeEnd("MongoDB Write");

// // 📝 Redis Read
// console.time("Redis Read");
// await redisClient.json.get("user");
// console.timeEnd("Redis Read");

// // 📝 MongoDB Read
// console.time("MongoDB Read");
// await collection.findOne({ _id: "123" });
// console.timeEnd("MongoDB Read");

//--------------------------------------------------------------------------------------------
// // Redis String Write
// console.time("Redis String Write");
// await redisClient.set(
//   "userstring",
//   JSON.stringify({ _id: "123", name: "ProCodrr" }),
// );
// console.timeEnd("Redis String Write");

// READ
console.time("Redis JSON Read");
const redisDataJSON = await redisClient.json.get("user");
console.log(redisDataJSON);
console.timeEnd("Redis JSON Read");

console.time("Redis String Read");
const redisDataString = await redisClient.get("userstring");
console.log(JSON.parse(redisDataString));
console.timeEnd("Redis String Read");

await redisClient.quit();
await mongoClient.close();
