import { getExistingLineField } from '@folio/address-utils';

const backendToFields = (address) => {
  const addressFields = {};

  const premise = getExistingLineField(address.lines, 'premise')?.value;
  const thoroughfare = getExistingLineField(address.lines, 'thoroughfare')?.value;
  const postalCodeOrTown = getExistingLineField(address.lines, 'postalcodeortown')?.value;
  const locality = getExistingLineField(address.lines, 'locality')?.value;
  const postalCode = getExistingLineField(address.lines, 'postalcode')?.value;
  const administrativeArea = getExistingLineField(address.lines, 'administrativearea')?.value;
  const country = getExistingLineField(address.lines, 'country')?.value;
  const countryCode = address?.countryCode;

  if (premise) {
    addressFields.premise = premise;
  }
  if (thoroughfare) {
    addressFields.thoroughfare = thoroughfare;
  }
  if (postalCodeOrTown) {
    addressFields.postalCodeOrTown = postalCodeOrTown;
  }
  if (locality) {
    addressFields.locality = locality;
  }
  if (postalCode) {
    addressFields.postalCode = postalCode;
  }
  if (administrativeArea) {
    addressFields.administrativeArea = administrativeArea;
  }
  if (country) {
    addressFields.country = country;
  }
  if (countryCode) {
    addressFields.countryCode = countryCode;
  }

  return addressFields;
};

export default backendToFields;
