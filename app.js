import redisClient from "./redis.config.js";

const result = await redisClient.setJSON("test", { user: "Hemant" });
console.log(result);

const result2 = await redisClient.getJSON("test");
console.log(result2);

await redisClient.quit();
