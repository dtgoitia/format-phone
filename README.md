# Phone formater

This package contains a single function (`formatPhone`) which takes a phone number and returns it propperly formated.

`formatPhone(phone)`:
* `phone` (string) - phone number to be formated
* returns (string) - phone number formated

Supported phone formats:
* Spain
* United Kingdom

If a phone number is not supported/recognised, it will be returned without any change.

## How to contribute

**Requirements**
Ensure you have Node.js and NPM installed.

**Install packages**
Install required NPM packages:
```bash
npm install
```

**Test code**
To run the test suit against the code:
```bash
npm test
```
The above command will:
1. Remove the `/build` directory.
2. Run `tsc` to transpile TypeScript code within `/src` and `/test` directories into JavaScript and store it into `/build/src` and `/build/test` respectivelly.
3. Execute the test file within `/build/test/Test.js`.