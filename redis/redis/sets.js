const Sets = (redis) => {
    const key = 'groceries:meat';
    // sets with subcategories
    redis.del(key);
    redis.sadd('groceries:seafood', 'tuna', 'lobster', 'crabe');
    redis.sadd(key, 'pork', 'duck', 'beef', 'lamb');

    redis.smembers(key, (err, result) => {
        console.log(key, result);
    });

    // remove an item
    redis.spop(key);
    redis.smembers(key, (err, result) => {
        console.log(key, 'after pop ', result);
    });

    redis.sadd(key, 'veal', 'partridge', 'goose', 'chicken');
    redis.sadd(key, 'veal', 'partridge', 'goose', 'chicken');
    redis.sadd(key, 'veal', 'partridge', 'goose', 'chicken');

    redis.smembers(key, (err, result) => {
        console.log(key, result);
    });
}

export default Sets;