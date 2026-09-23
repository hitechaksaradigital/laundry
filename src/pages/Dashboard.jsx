import { useState } from "react";
import PeriodToolbar from "../components/PeriodToolbar";
import KpiCards from "../components/KpiCards";
import TrendChart from "../components/TrendChart";
import ServiceDistribution from "../components/ServiceDistribution";
import BranchPerformance from "../components/BranchPerformance";
import StockAlert from "../components/StockAlert";
import OrdersTable from "../components/OrdersTable";

export default function Dashboard() {
  const [activePeriod, setActivePeriod] = useState("Bulan Ini");

  return (
    <div className="flex flex-col w-full pb-space-2xl gap-y-space-xl">
      <PeriodToolbar
        activePeriod={activePeriod}
        onPeriodChange={setActivePeriod}
      />
      <KpiCards />
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
        <TrendChart />
        <ServiceDistribution />
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
        <BranchPerformance />
        <StockAlert />
      </section>
      <OrdersTable />
    </div>
  );
}