# nextjs-14-pages-middleware-bug

**Added to:** <https://github.com/vercel/next.js/issues/65745>

**Summary:** Adding a middleware file to the NextJS project with a `basePath` causes the index route
`src/pages/index.ts` to error when navigating client-side.

https://github.com/user-attachments/assets/fe2b6017-f91a-412a-b17b-f434222e3535

### To Reproduce

- Clone this repo
- Install dependencies: `npm ci`
- Run the project: `npm run dev`
- Click the first item in the list, which loads page 2. Then click "Back" - and crash!

### Current vs. Expected behavior

- **Expected:** The page to render as before.
- **Actual:** The page fails to render, because the props are empty.

### Provide environment information

```
Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 23.4.0: Wed Feb 21 21:44:43 PST 2024; root:xnu-10063.101.15~2/RELEASE_ARM64_T6000
  Available memory (MB): 16384
  Available CPU cores: 10
Binaries:
  Node: 18.20.4
  npm: 10.7.0
  Yarn: 1.22.18
  pnpm: N/A
Relevant Packages:
  next: 14.2.17 // An outdated version detected (latest is 15.0.3), upgrade is highly recommended!
  eslint-config-next: 14.2.17
  react: 18.3.1
  react-dom: 18.3.1
  typescript: 5.6.3
Next.js Config:
  basePath: /my-app
  output: standalone
```

### Which area(s) are affected? (Select all that apply)

Pages Router + Middleware + Base path

### Which stage(s) are affected? (Select all that apply)

- `next dev` (local)
- `next build` (local)
- `next start` (local)
- Deployed builds too

### Additional context

- The error is specifically because the page's `props` is empty on client-side render.
- The `/index.json` file instead returns 308 Redirect to `/`.
- The middleware adds `X-Request-ID`, but this is not present on the initial `IndexPage` SSR.
- Removing `src/middleware.ts` resumes normal behaviour - the Back link works perfectly fine.
- Removing `headers` and/or `redirects` from `next.config.mjs` has no effect.

Workarounds:

- Moving the `IndexPage` to a nested folder, e.g. `timeline/index.tsx` resolves this issue but changes the URL to
  `/my-app/timeline`, which is not desired.
- Removing the `basePath` from `next.config.mjs` also resolves this behaviour - but setting a base path is a requirement
  for my project.

Assumptions:

- The rest of the NextJS project is configured correctly.
- This only affects the **pages** router.
