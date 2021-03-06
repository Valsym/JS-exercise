import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
const defmethod = definer('simpleCard');

const make = (name, damage) =>
  attach('simpleCard', cons(name, damage));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
// END