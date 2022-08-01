import { useMemo } from 'react';

export default (list) => {
  return useMemo(() => list.map(item => {
    console.log(1);
    return Math.pow(item, 2);
  }), []);
};