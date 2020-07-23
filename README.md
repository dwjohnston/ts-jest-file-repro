# ts-jest-file-repro

Repro for this issue: https://github.com/kulshekhar/ts-jest/issues/1506

Verified on macOS 10.15.5

**Update**
Doing a fresh clone on the same machine didn't reproduce this behaviour. Which suggests that it's something to do with my IDE, or the way I installed the dependencies/created the files that is causing this. 

## Instructions


```
npm i
npm test

```

expected behaviour: 

The tests pass. 

Actual behaviour: 

```
MAC-DJOHNSTON:ts-jest-file-repro djohnston$ npm test

> ts-jest-file-repro@1.0.0 test /Users/djohnston/git/ts-jest-file-repro
> jest

 FAIL  src/__tests__/createKinesisEvent.test.ts
  ● Test suite failed to run

    Could not find source file: '/Users/djohnston/git/ts-jest-file-repro/src/__tests__/createKinesisEvent.ts'.

      at getValidSourceFile (node_modules/typescript/lib/typescript.js:139175:29)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.596 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
