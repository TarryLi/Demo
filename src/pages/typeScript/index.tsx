/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    interface GenericIdentityFn<T> {
      (arg: T): T;
    }

    function identity<T>(arg: T): T {
      return arg;
    }

    const myIdentity: GenericIdentityFn<string> = identity;

    console.log(myIdentity('123'));
  }, []);

  return <div>123</div>;
};
