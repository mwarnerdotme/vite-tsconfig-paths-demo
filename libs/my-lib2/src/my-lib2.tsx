import * as React from 'react';
import { MyLib1 } from '@vite-tsconfig-paths-demo/my-lib1';

export const MyLib2 = () => (
  <div>
    <MyLib1 />
    from inside MyLib2
  </div>
);
