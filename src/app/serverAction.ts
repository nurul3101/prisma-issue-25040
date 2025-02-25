// app/server-action.ts
"use server";

import prisma from "../lib/prisma";

export async function fetchUsers() {
  // A simple Prisma query to fetch all users
  return prisma.user.findFirst();
}
