"use client";

import * as React from "react";
import { Calendar } from "@/app/_components/ui/calendar";
import { useRouter, useSearchParams } from "next/navigation";
import { ptBR } from "date-fns/locale";

const TimeDatePicker = () => {
  const [date, setDate] = React.useState<Date>();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const year = searchParams.get("year");
  const month = searchParams.get("month");
  const parsedYear = year ? parseInt(year, 10) : new Date().getFullYear();
  const parsedMonth = month ? parseInt(month, 10) - 1 : new Date().getMonth();

  const handleMonthChange = (pMonth: Date) => {
    const [year, month] = pMonth.toISOString().slice(0, 7).split("-"); // YYYY-MM
    push(`/?year=${year}&month=${month}`);
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
      hideHead
      hidden
      className="h-[50px] w-auto"
      onMonthChange={handleMonthChange}
      locale={ptBR}
      defaultMonth={new Date(parsedYear, parsedMonth)}
    />
  );
};

export default TimeDatePicker;
