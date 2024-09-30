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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

----- PERSONAL NOTES ---

Installed the project using
`npx create-next-app`

with Tailwind, ESLINT, APP Router, - YES
src directory --- NO

1. Step Up Navbar component

2. Created couple of reusable components
    - Modal
    - Button 

3. Install Zustand for state management
    -   zustand 
    -   axios
    -   react-hook-form  // to handle form validation and submit
    -   react-toast // to handle errors
    -   react-hot-toast


4. Install prisma
     npm i -D prisma ----> npx prisma init
     - Go to schema.prisma replace posgre with mongodb and its URL
     - go to mondo db atlas login - use oauth with vinothboss.r

     Steps: 
     1. Create new DB here -- https://cloud.mongodb.com/v2/66032d346573cb0443ecacaa#/clusters/starterTemplates?from=ctaClusterHeader -- make sure add /test at the test which refers to the db name
     2. creds = vinoth/vinoth
     3. create Model in the schema.prsima 
     4. do npm install next-auth @prisma/client @next-auth/prisma-adapter
     5. npm install bcrypt, npm install -D @types/bcrypt
     6. create prisma util and link the code
     
5. Define Routes and APIs inside api route.ts




Issue faced: 
1. Unable to invoke the POST call for user creation - first prisma call
    Solution: Worngly imported the Prismaclient from some lib instead of 
            import { PrismaClient } from "@prisma/client"
    "Error message I got "prisma/client did not initialize yet. Please run /"prisma generate/" and try to import it again.",

2. 


