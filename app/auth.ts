import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";import { prisma } from "@/prisma/client";
;

export const auth = betterAuth({
    // 1. ADD THIS: Connects Better Auth to your database
    database: prismaAdapter(prisma, {
        provider: "sqlite", // or "postgresql", "mysql" based on your setup
    }),

    emailAndPassword: { 
        enabled: true, 
    }, 
    plugins: [ 
        username() 
    ],
    user: {
        additionalFields: {
            roleId: { 
                type: "number", 
                required: true,
                input: true, 
                defaultValue: 2, 
            }
        }
    },
});