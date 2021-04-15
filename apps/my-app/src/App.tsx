// import * as React from 'react';
// import { MyLib2 } from '@vite-tsconfig-paths-demo/my-lib2';
//
// export const App = () => (
//   <>
//     <MyLib2 />
//   </>
// );

// Comment above, and uncomment below to see it working if both are used

import * as React from 'react';
import { MyLib1 } from '@vite-tsconfig-paths-demo/my-lib1';
import { MyLib2 } from '@vite-tsconfig-paths-demo/my-lib2';

export const App = () => (
  <>
    <MyLib1 />
    <MyLib2 />
  </>
);
