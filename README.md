# nextjs-14-pages-middleware-bug

**Summary:** Adding a middleware file to the NextJS project causes the index route `src/pages/index.ts` to error when
navigating client-side.

https://github.com/user-attachments/assets/fe2b6017-f91a-412a-b17b-f434222e3535

Assumptions:

- The rest of the NextJS project is configured correctly.
- This only affects the **pages** router.

| Dependency  | Version   |
| ----------- | --------- |
| `next`      | `14.2.17` |
| `react`     | `^18`     |
| `react-dom` | `^18`     |

## To review yourself:

```sh
# Clone this repo
$ git clone https://github.com/jdrydn/next-14-pages-middleware-bug
# Install dependencies
$ npm ci
# Run the project
$ npm run dev
# Visit http://localhost:3000, click a link, click back
```
