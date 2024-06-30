import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  publishedBy: Yup.string().required('PublishedBy is required'),
  travelerName: Yup.string().required('TravelerName is required'),
  travelerPhone: Yup.string().matches(/^[0-9]+$/, 'TravelerPhone must be a number').required('TravelerPhone is required'),
  departureCity: Yup.string().required('DepartureCity is required'),
  departureCountry: Yup.string().required('DepartureCountry is required'),
  destinationCity: Yup.string().required('DestinationCity is required'),
  destinationCountry: Yup.string().required('DestinationCountry is required'),
  departureDate: Yup.date().required('DepartureDate is required'),
  arrivalDate: Yup.date().required('ArrivalDate is required'),
  availableKilos: Yup.number().required('AvailableKilos is required').positive('AvailableKilos must be positive'),
  kilosPrice: Yup.number().required('KilosPrice is required').positive('KilosPrice must be positive'),
  currency: Yup.string().required('Currency is required'),
  viewNumber: Yup.number().required('ViewNumber is required'),
  description: Yup.string(),
  constraintes: Yup.string(),
  publicationDate: Yup.date().required('PublicationDate is required'),
  expirationDate: Yup.date().required('ExpirationDate is required'),
  isValided: Yup.boolean().required('IsValided is required'),
  discuss: Yup.boolean().required('Discuss is required'),
});