import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-green-600 hover:bg-muted">
        <CircleIcon className="mr-2 fill-green-600" size={10} />
        DEPÓSITO
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted font-bold text-red-600 hover:bg-muted">
        <CircleIcon className="mr-2 fill-red-600" size={10} />
        DESPESA
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted font-bold text-orange-600 hover:bg-muted">
      <CircleIcon className="mr-2 fill-orange-600" size={10} />
      INVESTIMENTO
    </Badge>
  );
};

export default TransactionTypeBadge;
