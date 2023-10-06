import z from "zod";
import { getLogger } from "@/lib/logger";

type SchemaType = z.ZodObject<any, any>;

export const safeParse = (schema: SchemaType, params: FormData) => {
  const logger = getLogger({});
  const args = Object.fromEntries(params.entries());
  logger.debug("params(raw)", args);

  const payload = schema.safeParse(args);
  logger.debug("params(parsed)", payload);

  if (!payload.success) {
    const rawError = payload.error;
    const error = rawError?.flatten() || ["Unknown error"];
    return { success: false, error, rawError, data: null };
  }

  return { success: true, error: null, data: payload.data };
};
