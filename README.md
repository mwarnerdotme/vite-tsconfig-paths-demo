# tsconfig-paths transitive import bug demo

This is a cut down auto generated https://nx.dev/ monorepo containing a Vite2 app and two react libs (my-lib1, my-lib2).

For the purposes of testing transitive dep import failure, my-lib2 imports my-lib1. 

[apps/my-app/src/App.tsx](apps/my-app/src/App.tsx) has both working and broken code examples. It fails when only my-lib2 is imported, but works when both my-lib1 and my-lib2 are imported. 

Have removed typical NX boilerplate and commands and wired up the sole app to the default vite commands.

#### To try it out
```
yarn install
yarn dev
```

