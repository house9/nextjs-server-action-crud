import { headers } from "next/headers";
import { NextRequest } from "next/server";

type LoggerArgs = {
  correlationId?: string | undefined;
  request?: NextRequest | undefined;
};

type LogLevel = "debug" | "error" | "info" | "warn";

const writeLog = (level: LogLevel, details: any) => {
  const func = console[level];

  if (process.env.NODE_ENV === "production") {
    func(JSON.stringify(details, null, 2));
  } else {
    const message = `[${details.correlationId}][${details.level}] ${details.message}`;
    func(message, details.payload || "");
  }
};

export const getLogger = ({ correlationId, request }: LoggerArgs) => {
  const requestId = correlationId || getCorrelationIdFromHeaders();
  if (request) {
    const details = {
      level: "info",
      environment: process.env.NODE_ENV,
      correlationId: requestId,
      method: request.method,
      message: `${request.method} ${request.nextUrl.pathname}`,
      path: request.nextUrl.pathname,
      userAgent: request.headers.get("user-agent"),
      referrer: request.referrer,
      timestamp: new Date().toISOString(),
    };

    writeLog("info", details);
  }

  const log = (level: LogLevel, message: string, payload: any) => {
    const details = {
      level,
      correlationId: requestId,
      message,
      timestamp: new Date().toISOString(),
      payload,
    };

    writeLog(level, details);
  };

  return {
    debug: (message: string, payload = {}) => {
      log("debug", message, payload);
    },
    error: (message: string, payload = {}) => {
      log("error", message, payload);
    },
    info: (message: string, payload = {}) => {
      log("info", message, payload);
    },
    warn: (message: string, payload = {}) => {
      log("warn", message, payload);
    },
  };
};

function getCorrelationIdFromHeaders() {
  const headerList = headers();
  const correlationId = headerList.get("x-correlation-id");

  return correlationId;
}
