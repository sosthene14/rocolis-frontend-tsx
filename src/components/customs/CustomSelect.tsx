/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
import { Check, ChevronsUpDown } from "lucide-react";
import { cn, getCountryFullname } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypcnDelete } from "@/assets/icons/Icon";
import { useDepartureStore, useDestinationStore } from "@/store/store";

interface CustomSelectProps {
  defaultvalue: string;
  onChange: (value: string, label?: string) => void;
  cityType: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  notFoundText?: string;
  classNamePopover?: string;
  classNameInput?: string;
  defaultQuery?: string;
  datas: { [key: string]: string }[];
  haveReseted?: boolean;
  canDeleteInput?: boolean;
}

export function CustomSelect({
  defaultvalue,
  onChange,
  cityType,
  className,
  notFoundText,
  label,
  datas,
  haveReseted,
  defaultQuery = "",
  classNamePopover = "w-[250px] p-0 border-none",
  classNameInput = "pb-2 my-2 text-slate-800 text-sm ",
  disabled,
  canDeleteInput = true
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [countryName, setCountryName] = useState("");
  const [query, setQuery] = useState(defaultQuery);
  const { _setDestination } = useDestinationStore();
  const { _setDeparture } = useDepartureStore();

  useEffect(() => {
    haveReseted && setValue("");
  }, [haveReseted]);

  useEffect(() => {
    if (defaultvalue?.length > 0) {
      try {
        JSON.parse(defaultvalue);
        setValue("")
      } catch (error) {
        setValue(defaultvalue);
      }
    }
    console.log(value)
  }, [defaultvalue]);

  useEffect(() => {
    if (value?.length > 0 || value === "") {
      onChange(value, countryName);
    }
  }, [value, countryName]);

  const handleClear = () => {
    setValue("");
    if (label === "departure") {
      localStorage.removeItem("departure");
      setValue("");
      _setDeparture("");
    } else if (label === "destination") {
      localStorage.removeItem("destination");
      setValue("");
      _setDestination("");
    }
  };

  const filteredAndSortedDatas = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    const filtered = datas.filter((data) =>
      data.label.toLowerCase().includes(lowerQuery)
    );
    return filtered.sort((a, b) => {
      const aExact = a.label.toLowerCase() === lowerQuery;
      const bExact = b.label.toLowerCase() === lowerQuery;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.label.localeCompare(b.label);
    });
  }, [query]);

  const visibleDatas = useMemo(
    () => filteredAndSortedDatas.slice(0, 10),
    [filteredAndSortedDatas]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} asChild>
        <Button
          aria-required
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${className}`}
        >
          {value ? datas.find((data) => data.value === value)?.label : cityType}
          <div className="flex item-center gap-1">
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            {
              canDeleteInput && <TypcnDelete
              onClick={() => handleClear()}
              className="w-5  h-5 z-99"
            />
            }
            
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent aria-required={true} className={classNamePopover}>
        <Command className="bg-white ">
          <div className="relative">
            <CommandInput
              className={classNameInput}
              placeholder={cityType}
              value={query}
              onValueChange={setQuery}
              required
            />
            <div className="absolute -mt-0 inset-y-0 right-10 flex items-center pr-2">
              <TypcnDelete
                onClick={() => setQuery("")}
                className=" text-slate-400 w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          <CommandEmpty className="text-slate-800 text-sm text-center">
            {notFoundText}
          </CommandEmpty>
          <CommandGroup aria-required={true} className="mt-3">
            <CommandList>
              {visibleDatas.map((option) => (
                <CommandItem
                  className="text-sm  font-['Montserrat'] text-left font-bold text-zinc-900 text-opacity-60"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setCountryName(
                      currentValue === value ? "" : option.country
                    );
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}{" "}
                  {option.country
                    ? `(${getCountryFullname(option.country)})`
                    : ""}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
