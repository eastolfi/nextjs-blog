This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Add Bit support to Vercel

First we need to search our .npmrc file -> `npm config list` It will be probably at C/Users/CURRENT_USER/.npmrc
The we should open the file, for example `vi /c/Users/CURRENT_USER/.npmrc` and copy the content
Then, in the Vercel deployment, add the NPM_RC env variable, and paste the content of `.npmrc`
