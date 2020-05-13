import { getExistingLineField } from '@folio/address-utils';

const backendToFields = (address) => {
  const addressFields = {};

  const premise = getExistingLineField(address.lines, 'premise')?.value
  const thoroughfare = getExistingLineField(address.lines, 'thoroughfare')?.value
  const postalCodeOrTown = getExistingLineField(address.lines, 'postalcodeortown')?.value
  const locality = getExistingLineField(address.lines, 'locality')?.value
  const postalCode = getExistingLineField(address.lines, 'postalcode')?.value
  const administrativeArea = getExistingLineField(address.lines, 'administrativearea')?.value

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

  return addressFields;
}
export default backendToFields;