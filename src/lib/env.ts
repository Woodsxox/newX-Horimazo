import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string().min(1, "DATABASE_URL cannot be empty"),
  GOOGLE_CLIENT_ID: zod.string().min(1, "GOOGLE_CLIENT_ID cannot be empty"),
  GOOGLE_CLIENT_SECRET: zod.string().min(1, "GOOGLE_CLIENT_SECRET cannot be empty"),
  NEXTAUTH_URL: zod.string().min(1, "NEXTAUTH_URL cannot be empty"),
  NEXTAUTH_SECRET: zod.string().min(1, "NEXTAUTH_SECRET cannot be empty"),
});

export const env = envSchema.parse(process.env);
