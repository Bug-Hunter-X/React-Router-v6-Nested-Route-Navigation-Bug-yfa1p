This repository demonstrates a bug in React Router v6 concerning nested route navigation.  When navigating from a nested route to a parent route, the nested route path segment remains in the URL, leading to incorrect active route behavior. The solution involves using the `useSearchParams` hook to correctly clear the URL parameters.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/about`.
5. Observe that the URL is `/about`. This is expected. 
6. Navigate to `/` from `/about`. 
7. Observe that the URL is `/about/`. This is the Unexpected behavior.