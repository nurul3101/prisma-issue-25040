// app/page.tsx
"use client";

import { useState } from "react";
import { fetchUsers } from "./serverAction";
import prisma from "../lib/prisma";
import { prismaWithoutAccelerate } from "../lib/prisma";

export default function Home() {
  const [users, setUsers] = useState([]);

  async function handleFetch() {
    try {
      //console.log(prisma, prismaWithoutAccelerate);
      const data = await fetchUsers();
      // @ts-ignore
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  return (
    <main>
      <h1>Prisma Accelerate Demo</h1>
      <button onClick={handleFetch}>Fetch Users</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
