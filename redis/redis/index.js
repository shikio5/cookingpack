import Strings from './hashes';
import Hashes from './strings';
import Lists from './lists';
import Sets from './sets';
import SortedSets from './sortedSets';

const Redis = require('ioredis');
const redis = new Redis({password: 'password'});
 
Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSets(redis);