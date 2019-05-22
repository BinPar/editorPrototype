import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Holder from '../../../../layout/Holder';
import Form from '../../../../form/Form';
import Field from '../../../../form/Field';
import ColorPicker from './ColorPicker';

const SettingsWrapper = styled.div`
  margin-top: 10px;
  padding: 20px 5px 10px;
  border-top: 1px solid ${props => props.theme.highlightItemSettingsBorder};
`;

const PickerWrapper = styled(Holder)``;

const Settings = () => (
  <SettingsWrapper>
    <Form>
      <Field label="Nombre" size="full" type="text" required />
    </Form>
    <PickerWrapper justify="start">
      <ColorPicker label="Color de Fondo" />
    </PickerWrapper>
  </SettingsWrapper>
);

Settings.defaultProps = {};

Settings.propTypes = {};

export default Settings;
