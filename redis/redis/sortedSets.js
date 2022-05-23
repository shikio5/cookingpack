const SortedSets = (redis) => {
    const key = 'dragonball';
    redis.del(key, (err, result) => console.log('*** Entering Sorted Sets - Dragon ball ***'));
    
    redis.zadd(key, 9000, 'goku', 11000, 'vegeta', 1000, 'roshi', 5000, 'krilin', 7000, 'nappa');
   
    redis.zrevrange(key, 0, -1, 'withscores', (err, result) => {
        console.log(key, result);
    });

    redis.zrangebyscore(key, '-inf', 7000, 'withscores', (err, result) => {
        console.log(key, 'show me all the characters with power up to 7000' , result);
    });

}

export default SortedSets;