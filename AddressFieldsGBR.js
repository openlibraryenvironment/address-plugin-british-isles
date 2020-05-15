import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from '@folio/stripes/components';
import { AddressTextField } from '@folio/address-utils';

import backendToFields from './backendToFields';

class AddressFieldsGBR extends React.Component {
  render() {
    const { intl, name, requiredValidator, savedAddress, textFieldComponent } = this.props;
    const initialValues = backendToFields(savedAddress);
    return (
      <> 
        <Row>
          <Col xs={4} >
            <AddressTextField
              name={name ? `${name}.premise` : "premise"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.premise" />}
              component={textFieldComponent}
              initialValue={initialValues.premise}
            />
          </Col>
          <Col xs={4} >
            <AddressTextField
              name={name ? `${name}.thoroughfare` : "thoroughfare"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.thoroughfare" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.thoroughfare}
            />
          </Col>
          <Col xs={4}>
            <AddressTextField
              name={name ? `${name}.postalCodeOrTown` : "postalCodeOrTown"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.postalCodeOrTown" />}
              component={textFieldComponent}
              initialValue={initialValues.postalCodeOrTown}
            />
          </Col>
        </Row>
        <Row>
        <Col xs={4}>
            <AddressTextField
              name={name ? `${name}.locality` : "locality"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.locality" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.locality}
            />
          </Col>
          <Col xs={4} >
            <AddressTextField
              name={name ? `${name}.administrativeArea` : "administrativeArea"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.administrativeArea" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.administrativeArea}
            />
          </Col>
          <Col xs={4}>
            <AddressTextField
              name={name ? `${name}.postalCode` : "postalCode"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.postalCode" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.postalCode}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
           <AddressTextField
              name={name ? `${name}.country` : "country"}
              label={<FormattedMessage id="ui-address-plugin-british-isles.country" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.country}
              defaultValue={intl.formatMessage({ id: `ui-address-plugin-british-isles.countryCode.${initialValues.countryCode}` })}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default injectIntl(AddressFieldsGBR);
