const Hashes = (redis) => {
    redis.mset('street', 'theStreetName', 'city', 'Paris');
    redis.mget('street', 'city', (err, result) => {
        console.log(result);
    });

    redis.hmset("key:123", {
        fname: "Master",
        lname: "Chief",
        ai: "Cortana",
        age: 1
    });

    redis.hgetall("key:123", (err, result) => {
        console.log(result);
    });

    redis.hmget("key:123", "fname", "lname", "ai", 'age', (err, result) => {
        console.log(result);
    });
    
    redis.hincrby("key:123", 'age', 10);
    redis.hmget("key:123", 'age', (err, result) => {
        console.log('age is now ',result);
    });
}

export default Hashes;