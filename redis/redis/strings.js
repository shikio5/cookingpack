const Strings = (redis) => {
    redis.set('name', 'thisGuy');
    redis.set('lala', 'dancing', 'EX', 20); // set key lala with value dancing, expires in 20 sec

    redis.get('name', (err, result) => {
        console.log(result);
    });

    redis.set('address', 1);
    redis.incrby('address', 300);

    redis.get('address', (err, result) => {
        console.log(result);
    });


}

export default Strings;