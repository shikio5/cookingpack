const Lists = (redis) => {
    let key = 'groceries';
    redis.del(key);
    redis.rpush(key,
        'apple',
        'cherry',
        'watermelon',
        'kaki',
        'grape',
        'cereal');

    print();

    redis.lpop(key);

    print();

    redis.rpop(key);

    print();

    redis.lpush(key, 'oatmeal');

    print();

    console.log("Will print 2,3");
    print(2,3);

    function print(start=0, end=-1) {
        redis.lrange(key, start, end, (err, result) => {
            console.log("my list : ", result);
        }); // print everything
    }

}

export default Lists;