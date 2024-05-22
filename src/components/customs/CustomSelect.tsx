/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

interface CustomSelectProps {
  defaultvalue: string;
  onChange: (value: string) => void;
  cityType: string;
  className?: string;
  label?: string;
}

export function CustomSelect({
  defaultvalue,
  onChange,
  cityType,
  className,
  label,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
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
  }, [value]);

  const handleClear = () => {
    setValue("");
    if (label === "departure") {
      localStorage.removeItem("departure");
      _setDeparture(null)
    } else if (label === "destination") {
      localStorage.removeItem("destination");
      _setDestination(null)
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
    
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={className}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Ville " + cityType}
          <div className="flex item-center gap-1">
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            <TypcnDelete
              onClick={() => handleClear()}
              className="w-5 h-5 z-99"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command className="bg-white">
          <CommandInput
            className="pb-2 my-2"
            placeholder={`Ville ${cityType}`}
          />
          <CommandEmpty>Cette ville n'est pas encore disponible</CommandEmpty>
          <CommandGroup className="mt-3">
            <CommandList>
              {frameworks.map((option) => (
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
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
