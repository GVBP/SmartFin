"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";
import { ScrollArea } from "@/app/_components/ui/scroll-area";

const chartConfig = {
  [TransactionType.INVESTIMENT]: {
    label: "Investido",
    color: "#78716c",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#22c55e",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#ef4444",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionsPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#22c55e",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#ef4444",
    },
    {
      type: TransactionType.INVESTIMENT,
      amount: investmentsTotal,
      fill: "#78716c",
    },
  ];
  return (
    <ScrollArea className="rounded-md border">
      <Card className="flex flex-col p-6">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="type"
                innerRadius={60}
              />
            </PieChart>
          </ChartContainer>

          <div className="space-y-3">
            <PercentageItem
              icon={<TrendingUpIcon size={16} className="text-green-500" />}
              title="Receita"
              value={
                isNaN(typesPercentage[TransactionType.DEPOSIT])
                  ? 0
                  : typesPercentage[TransactionType.DEPOSIT]
              }
            />
            <PercentageItem
              icon={<TrendingDownIcon size={16} className="text-red-500" />}
              title="Despesas"
              value={
                isNaN(typesPercentage[TransactionType.EXPENSE])
                  ? 0
                  : typesPercentage[TransactionType.EXPENSE]
              }
            />
            <PercentageItem
              icon={<PiggyBankIcon size={16} className="text-stone-500" />}
              title="Investido"
              value={
                isNaN(typesPercentage[TransactionType.INVESTIMENT])
                  ? 0
                  : typesPercentage[TransactionType.INVESTIMENT]
              }
            />
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default TransactionsPieChart;
