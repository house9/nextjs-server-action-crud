import { getLogger } from "@/lib/logger";

export default function DashboardPage() {
  const logger = getLogger({});

  logger.debug(
    "render: Dashboard: app/(application-layout)/dashboard/page.tsx"
  );

  return (
    <div className="flex items-center mb-6">
      <h1 className="text-2xl">Dashboard</h1>
    </div>
  );
}
