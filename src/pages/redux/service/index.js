export const getList = (key) => fetch(
  `https://pcw-api.iqiyi.com/strategy/pcw/data/soRelatedQueryData?key=${key}`
).then(res => res.json());
