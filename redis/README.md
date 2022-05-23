# redis.conf differences
instead of `slaveof` it is now `replicateof`

# useful commands
`sudo redis-server /etc/path_to_redis/redis/redis.conf`
`redis-cli`
- `set key value`
- `get key`
- `config set save "60 1"` #this is a temporary config, a forced snapshot every 60 second for every 1 change
- `incr key`
- `incrby key number`
- `decr key`
- `decrby key number`
- `getset key` #will print the key first then overwrites it
- `mset fname danny lname wu addr '123 Street' phone '111-111-111'`
- 127.0.0.1:6379> mget fname lname addr phone
1) "danny"
2) "wu"
3) "123 Street"
4) "111-111-111"
- `exists`
- `del`
- `expire phone 5` # will expire key 'phone' in 5 seconds
- `set phone '123-123-1233'ex 5` # will set key 'phone' with value '123-123-1233' and will expire in 5 seconds

# if you wish to make configuration permanent, set it onto the redis.conf file



# Sorted sets
zadd value weight value weight value weight
e.g.:  zadd dragonball 9000 goku 11000 vegeta 1000 roshi 5000 krilin 7000 nappa
# Sorted sets output
127.0.0.1:6379> zrange dragonball 0 -1
1) "roshi"
2) "krilin"
3) "nappa"
4) "goku"
5) "vegeta"
# Sorted sets output with scores
127.0.0.1:6379> zrange dragonball 0 -1 withscores
 1) "roshi"
 2) "1000"
 3) "krilin"
 4) "5000"
 5) "nappa"
 6) "7000"
 7) "goku"
 8) "9000"
 9) "vegeta"
10) "11000"
# Sorted sets reverse order output with scores
127.0.0.1:6379> zrevrange dragonball 0 -1 withscores
 1) "vegeta"
 2) "11000"
 3) "goku"
 4) "9000"
 5) "nappa"
 6) "7000"
 7) "krilin"
 8) "5000"
 9) "roshi"
10) "1000"
# Sorted sets by score with information for equal and below power 7000
127.0.0.1:6379> zrangebyscore dragonball -inf 7000 withscores
1) "roshi"
2) "1000"
3) "krilin"
4) "5000"
5) "nappa"
6) "7000"
# Sorted sets by score with information for equal and below power 7000
127.0.0.1:6379> zrevrangebyscore dragonball 7000 0 withscores
1) "nappa"
2) "7000"
3) "krilin"
4) "5000"
5) "roshi"
6) "1000"
# Sorted I want to know the rank of goku (index 1, second strongest)
127.0.0.1:6379> zrevrank dragonball goku
(integer) 1