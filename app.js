import redisClient from "./redis.config.js";

// const result = await redisClient.setJSON("test", { user: "Hemant" });
// console.log(result);

// const result2 = await redisClient.getJSON("test");
// console.log(result2);

// RedisJSON

// redis.json.get(key, options);
// const result = await redisClient.json.get("user:1", {
//   path: "$.*",
// });
// console.log(result);

// // redis.json.set(key, path, value)
// const user = {
//   name: "Hemant",
//   age: 22,
//   skills: ["Node.js", "Redis"],
// };
// const result1 = await redisClient.json.set("user:2", "$", user);
// console.log(result1);

// //set a property
// const result2 = await redisClient.json.set("user:2", "$.age", "25");
// console.log(result2);

//ARRAY

// const result3 = await redisClient.json.get("user:1");
// console.log(result3);

// json.arrPop(key, {
//   path: string,
//   index?: number
// })
// const result3 = await redisClient.json.arrLen("user:1", { path: "$.hobbies" });
// console.log(result3);

// set a property
const result2 = await redisClient.json.set("user:1", "$.address", {
  name: "UP",
});
console.log(result2);

await redisClient.quit();
