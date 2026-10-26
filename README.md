This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

Unit and component tests use [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), following the Next.js [Jest guide](https://nextjs.org/docs/app/guides/testing/jest).

### Testing packages

These 9 packages are in `devDependencies`. They are only used during development and testing and are not part of the production build.

#### Test runner

| Package | Purpose |
| --- | --- |
| `jest` | Finds and runs test files and reports pass/fail results. |
| `jest-environment-jsdom` | Gives Jest a simulated browser DOM so React components can be rendered in tests. |

#### Testing Library

| Package | Purpose |
| --- | --- |
| `@testing-library/react` | Renders React components inside a test (`render(<Home />)`). |
| `@testing-library/dom` | Queries rendered output (`screen.getByText`, `screen.getByRole`). Required as a separate install by `@testing-library/react` v16. |
| `@testing-library/jest-dom` | Adds readable DOM matchers such as `toBeInTheDocument()`, `toBeVisible()` and `toHaveValue()`. |
| `@testing-library/user-event` | Simulates real user actions such as clicking, typing and tabbing, e.g. for testing the login form. |

#### TypeScript support

| Package | Purpose |
| --- | --- |
| `@types/jest` | Type definitions so TypeScript recognises `describe`, `it` and `expect`. |
| `ts-node` | Lets Jest load a TypeScript config file (`jest.config.ts`). |

### Setup still to do

The packages are installed, but `npm test` will not work until the following are added:

1. `jest.config.ts` in the project root, using `next/jest` with `testEnvironment: 'jsdom'`, `setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']` and a `moduleNameMapper` entry for the `@/*` path alias.
2. `jest.setup.ts` in the project root, containing `import '@testing-library/jest-dom'`.
3. `"test": "jest"` and `"test:watch": "jest --watch"` scripts in `package.json`.
4. A first test in `__tests__/`, for example `__tests__/page.test.tsx`.

Once these are in place, run the tests with:

```bash
npm test
```

> **Note:** Jest does not support `async` Server Components. Synchronous Server and Client Components can be unit tested; `async` components need an end-to-end tool such as Playwright.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
