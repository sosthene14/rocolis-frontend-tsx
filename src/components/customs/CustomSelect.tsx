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
import { frameworks } from "@/constants/variables";

interface CustomSelectProps {
  defaultvalue: string;
  onChange: (value: string) => void;
  cityType: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  notFoundText?: string;
  classNamePopover?: string;
  classNameInput?: string;
}

export function CustomSelect({
  defaultvalue,
  onChange,
  cityType,
  className,
  notFoundText,
  label,
  classNamePopover = "w-[250px] p-0",
  classNameInput = "pb-2 my-2 text-slate-800 text-sm ",
  disabled,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const { _setDestination } = useDestinationStore();
  const { _setDeparture } = useDepartureStore();

  useEffect(() => {
    if (defaultvalue?.length > 0) {
      try {
        JSON.parse(defaultvalue);
      } catch (error) {
        setValue(defaultvalue);
      }
    }
  }, [defaultvalue]);

  useEffect(() => {
    if (value?.length > 0) {
      onChange(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleClear = () => {
    setValue("");
    if (label === "departure") {
      localStorage.removeItem("departure");
      _setDeparture(null);
    } else if (label === "destination") {
      localStorage.removeItem("destination");
      _setDestination(null);
    }
  };

  const filteredAndSortedFrameworks = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    const filtered = frameworks.filter((framework) =>
      framework.label.toLowerCase().includes(lowerQuery)
    );
    return filtered.sort((a, b) => {
      const aExact = a.label.toLowerCase() === lowerQuery;
      const bExact = b.label.toLowerCase() === lowerQuery;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.label.localeCompare(b.label);
    });
  }, [query]);

  const visibleFrameworks = useMemo(
    () => filteredAndSortedFrameworks.slice(0, 10),
    [filteredAndSortedFrameworks]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${className}`}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : cityType}
          <div className="flex item-center gap-1">
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            <TypcnDelete
              onClick={() => handleClear()}
              className="w-5 h-5 z-99"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className={classNamePopover}>
        <Command className="bg-white ">
          <div className="relative">
            <CommandInput
              className={classNameInput}
              placeholder={cityType}
              value={query}
              onValueChange={setQuery}
            />
            <div className="absolute inset-y-0 right-8 flex items-center pr-2">
              <TypcnDelete onClick={() => setQuery("")} className=" text-slate-400 w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <CommandEmpty className="text-slate-800 text-sm text-center">
            {notFoundText}
          </CommandEmpty>
          <CommandGroup className="mt-3">
            <CommandList>
              {visibleFrameworks.map((option) => (
                <CommandItem
                  className="text-sm  font-['Montserrat'] text-left font-bold text-zinc-900 text-opacity-60"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label} ({getCountryFullname(option.country)})
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
