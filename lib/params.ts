import z from "zod";

type SchemaType = z.ZodObject<any, any>;

export const safeParse = (schema: SchemaType, params: FormData) => {
  const args = Object.fromEntries(params.entries());
  console.log("params(raw)", args);

  const payload = schema.safeParse(args);
  console.log("params(parsed)", payload);

  if (!payload.success) {
    const rawError = payload.error;
    const error = rawError?.flatten() || ["Unknown error"];
    return { success: false, error, rawError, data: null };
  }

  return { success: true, error: null, data: payload.data };
};
