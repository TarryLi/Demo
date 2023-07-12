/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

const f = ($comp, $total) => {
  const res = [];
  let $residue = 0;

  const loop = (comp, total) => {
    const len = comp.length;
    if (len === 0) return;
    $residue = total;
    if (total === 0) {
      res.push(...comp);
      return;
    }

    const totalPiece = comp.reduce((pre, cur) => pre + cur.prop, 0);

    const lastComp = [];
    let residue = 0;

    for (let i = 0; i < len; i++) {
      const cur = comp[i];
      const piece = total * cur.prop / totalPiece;
      const curResidue = piece + cur.res - cur.quo;
      if (curResidue > 0) {
        res.push({ ...cur, res: cur.quo });
        residue += curResidue;
      } else {
        lastComp.push({ ...cur, res: piece + cur.res });
      }
    }

    loop(lastComp, residue);
  };

  loop($comp, $total);

  return { res, residue: $residue };
};

export default () => {
  useEffect(() => {
    const comp = [
      { name: '公司1', prop: 2, quo: 3, res: null },
      { name: '公司2', prop: 1, quo: 0, res: null },
      { name: '公司3', prop: 3, quo: 2, res: null },
      { name: '公司4', prop: 2, quo: 10, res: null },
      { name: '公司5', prop: 2, quo: 3, res: null }
      // { name: '公司6', prop: 6, quo: 0, res: null }
    ];

    const res = f(comp, 10);
    console.log(res);
  }, []);

  return <div className={style.wrap}>

  </div>;
};
