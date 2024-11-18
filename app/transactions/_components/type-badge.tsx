import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green-100 font-bold text-green-500 hover:bg-green-100">
        <CircleIcon className="mr-2 fill-green-500" size={10} />
        DEPÓSITO
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-100 font-bold text-red-500 hover:bg-red-100">
        <CircleIcon className="mr-2 fill-red-500" size={10} />
        DESPESA
      </Badge>
    );
  }
  return (
    <Badge className="bg-stone-100 font-bold text-stone-500 hover:bg-stone-100">
      <CircleIcon className="mr-2 fill-stone-500" size={10} />
      INVESTIMENTO
    </Badge>
  );
};

export default TransactionTypeBadge;
