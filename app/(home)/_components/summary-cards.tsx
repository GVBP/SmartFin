import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCards {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  userCanAddTransaction,
}: SummaryCards) => {
  const getBalanceColor = (balance: number) => {
    if (balance < 0) return "text-red-500";
    else if (balance > 0) return "text-green-500";
    else return "text-stone-500";
  };
  return (
    <div className="space-y-6">
      {/* FIRST CARD */}

      <SummaryCard
        icon={<WalletIcon size={16} className="text-stone-500" />}
        title="Saldo"
        amount={balance}
        amountTextColor={getBalanceColor(balance)}
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />

      {/* OTHER CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} className="text-stone-500" />}
          title="Investido"
          amount={investmentsTotal}
          amountTextColor="text-stone-500"
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-green-500" />}
          title="Receita"
          amount={depositsTotal}
          amountTextColor="text-green-500"
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
          amountTextColor="text-red-500"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
