This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Issue

If you run `npm run test`, it will error out saying it failed to find the module.

The error only occurs during render as when you comment out the Component or `render()` in the test the error goes away.

In the main repo I'm using `SVGR` to handle SVG imports, but have ommitted that here as I can reproduce the issue without it.
