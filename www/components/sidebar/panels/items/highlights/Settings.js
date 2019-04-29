import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';
import Form from '../../../../form/Form';
import Field from '../../../../form/Field';
import ColorPicker from './ColorPicker';

const SettingsWrapper = styled.div`
  margin-top: 10px;
  padding: 20px 5px 10px;
  border-top: 1px solid ${colors.primaryLighter};
`;

const PickerWrapper = styled(Holder)``;

const Settings = () => (
  <SettingsWrapper>
    <Form>
      <Field label="Nombre" size="full" type="text" required />
    </Form>
    <PickerWrapper justify="between">
      <ColorPicker label="Color de Fondo" />
      <ColorPicker label="Color de Texto" />
    </PickerWrapper>
  </SettingsWrapper>
);

Settings.defaultProps = {};

Settings.propTypes = {};

export default Settings;
