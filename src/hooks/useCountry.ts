import { useState, useEffect, useCallback } from "react";
import countries from "@/data/countries.json";

export type Country = (typeof countries)[number];

const DEFAULT_CODE = "mx";

export function useCountry() {
  const [selected, setSelected] = useState<Country>(() => {
    const stored = localStorage.getItem("apuestabro_country");
    return countries.find((c) => c.code === stored) ?? countries.find((c) => c.code === DEFAULT_CODE)!;
  });

  useEffect(() => {
    localStorage.setItem("apuestabro_country", selected.code);
  }, [selected]);

  const selectByCode = useCallback((code: string) => {
    const found = countries.find((c) => c.code === code);
    if (found) setSelected(found);
  }, []);

  return { selected, selectByCode, countries };
}
