# Accessing undefined environment variables in Next.js 15 page component throws error

This repository demonstrates a bug in Next.js 15 where accessing an environment variable that is not defined in the `.env` file throws an error when the code is part of a page component.

## Bug Description
The bug occurs when attempting to access an environment variable within a Next.js page component. If the environment variable is not defined in either the `.env.local` or `.env` file, Next.js will throw an error.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to the `/about` page.
5. Observe the error in your browser's console.

## Solution
The solution is to either define the environment variable in the appropriate `.env` file, or to add a check to ensure that the environment variable is defined before accessing it.

## Additional Notes
This bug is specific to Next.js 15 and may not occur in earlier versions.