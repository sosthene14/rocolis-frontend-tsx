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
    departureDate: Date;
    arrivalDate: Date;
  
    availableKilos: number;
    kilosPrice: number;
    currency: string;
    currencyLabel: string;
  
    viewNumber: Date;
    description: string;
    constraintes: string;
    publicationDate: Date;
    expirationDate: Date;
    isValided: boolean;
    discuss: boolean;
  }