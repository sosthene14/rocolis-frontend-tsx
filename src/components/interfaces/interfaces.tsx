export interface IInputField {
    label: string;
    disabled?: boolean;
    type?: string;
    placeholder?:string;
    value:string|number
    id?:string;
    pattern?:string;
    title?:string;
    required?:boolean;
    min?:number;
    className?:string;
    onChange:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=> void | boolean
  }

  export interface IPublishAdd {
    publishedBy: string;
    travelerName: string;
    travelerPhone: string;
  
    departureCity: string;
    departureCountry: string;
    destinationCity: string;
    destinationCountry: string;
    departureDate: Date | undefined;
    arrivalDate: Date | undefined;
  
    availableKilos: number;
    kilosPrice: number;
    currency: string;
    currencyLabel: string;
  
    viewNumber: number;
    description: string;
    constraintes: string;
    publicationDate: Date|undefined;
    expirationDate: Date | undefined;
    isValided: boolean;
    discuss: boolean;
  }