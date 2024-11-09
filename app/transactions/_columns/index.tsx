"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "EDUCAÇÃO",
  ENTERTAIMENT: "ENTRETENIMENTO",
  FOOD: "ALIMENTAÇÃO",
  HEALTH: "SAÚDE",
  HOUSING: "MORADIA",
  OTHER: "OUTROS",
  SALARY: "SALÁRIO",
  TRANSPORTATION: "TRANSPORTE",
  UTILITY: "UTILIDADES",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "TRANSFERÊNCIA BANCÁRIA",
  BANK_SLIP: "BOLETO BANCÁRIO",
  CASH: "DINHEIRO",
  CREDIT_CARD: "CARTÃO DE CRÉDITO",
  DEBIT_CARD: "CARTÃO DE DÉBITO",
  OTHER: "OUTROS",
  PIX: "PIX",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary"
          >
            <PencilIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary"
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];