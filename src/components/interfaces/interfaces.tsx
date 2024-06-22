export interface IInputField {
  label: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  value: string | number;
  id?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
  min?: number;
  className?: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void | boolean;
}

export interface IPublishAdd {
  publishedBy: string;
  travelerName: string;
  travelerPhone: string;

  departureCity: string;
  departureCountry: string;
  destinationCity: string;
  destinationCountry: string;
  departureDate: Date | string | undefined;
  arrivalDate: Date | string | undefined;

  availableKilos: number;
  kilosPrice: number;
  currency: string;
  currencyLabel: string;

  viewNumber: number;
  description: string;
  constraintes: string;
  publicationDate: Date | string | undefined;
  expirationDate: Date | string | undefined;
  isValided: boolean;
  discuss: boolean;
}

export interface IPaginationProps {
  sortedData: IPublishAdd[];
  page: number;
  setPaginatedData: React.Dispatch<React.SetStateAction<IPublishAdd[]>>;
  setTotalPage: React.Dispatch<React.SetStateAction<number>>;
  handleEndIndex?: (value: number) => void;
}

export interface INotificationsData {
  uuid?: string;
  notificationDepartureCity: string;
  notificationDepartureCountry: string;
  notifictionDestinationCountry: string;
  notificationDestinationCity: string;
  notificationDepartureDate: string | undefined;
  isActive: boolean;
}

export interface userProfil {
  name: string;
  firstName: string;
  email: string;
  phoneNumber: string;
}

export interface registeringUser {
  name: string;
  firstName: string;
  email: string;
  role: string;
  password: string;
  isVerified: boolean;
  isGoogle:boolean;
  isbanned:boolean;
  loggin_info:object;
  total_ads_expeditor:number;
  total_ads_traveler:number;
  confirmation_code_attempts:number;
  created:Date | string;
}

export interface RegisterInputs {
  setData: React.Dispatch<registeringUser>;
  data: registeringUser;
  handleIsChecked : (value: boolean) => void
  handleHaveSubmitedGoogle?: (value: boolean) => void
}