import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from '@folio/stripes/components';
import { AddressTextField } from '@folio/address-utils';

import backendToFields from './backendToFields';

class AddressFieldsGBR extends React.Component {
  render() {
    const { name, requiredValidator, savedAddress, textFieldComponent } = this.props;
    const initialValues = backendToFields(savedAddress);
    return (
      <> 
        <Row>
          <Col xs={4} >
            <AddressTextField
              name={name ? `${name}.premise` : "premise"}
              label={<FormattedMessage id="ui-address-plugin-britishIsles.premise" />}
              component={textFieldComponent}
              initialValue={initialValues.premise}
            />
          </Col>
          <Col xs={4} >
            <AddressTextField
              name={name ? `${name}.thoroughfare` : "thoroughfare"}
              label={<FormattedMessage id="ui-address-plugin-britishIsles.thoroughfare" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.thoroughfare}
            />
          </Col>
          <Col xs={4}>
            <AddressTextField
              name={name ? `${name}.postalCodeOrTown` : "postalCodeOrTown"}
              label={<FormattedMessage id="ui-address-plugin-britishIsles.postalCodeOrTown" />}
              component={textFieldComponent}
              initialValue={initialValues.postalCodeOrTown}
            />
          </Col>
        </Row>
        <Row>
        <Col xs={4}>
            <AddressTextField
              name={name ? `${name}.locality` : "locality"}
              label={<FormattedMessage id="ui-address-plugin-britishIsles.locality" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.locality}
            />
          </Col>
          <Col xs={4} >
            <AddressTextField
              name={name ? `${name}.administrativeArea` : "administrativeArea"}
              label={<FormattedMessage id="ui-address-plugin-britishIsles.administrativeArea" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.administrativeArea}
            />
          </Col>
          <Col xs={4}>
            <AddressTextField
              name={name ? `${name}.postalCode` : "postalCode"}
              label={<FormattedMessage id="ui-address-plugin-britishIsles.postalCode" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.postalCode}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default AddressFieldsGBR;
