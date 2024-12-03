"use client";

import * as React from "react";
import { Calendar } from "@/app/_components/ui/calendar";
import { useRouter, useSearchParams } from "next/navigation";
import { ptBR } from "date-fns/locale";

const TimeDatePicker = () => {
  const [date, setDate] = React.useState<Date>();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  let year = searchParams.get("year");
  let month = searchParams.get("month");

  if (year == null || month == null)
    [year, month] = new Date().toISOString().slice(0, 7).split("-"); // YYYY-MM

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
    />
  );
};

export default TimeDatePicker;
