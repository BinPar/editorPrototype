import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, icon, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';
import Medal from './Medal';
import CurrentMedal from './CurrentMedal';

const MedalsWrapper = styled(Holder)`
  padding-top: 30px;
`;

const CurrentMedalsWrapper = styled(Holder)`
  width: calc(100% - 60px);
  padding: 20px 0;
  margin: 10px 30px 10px;
  border-bottom: 1px solid ${colors.primaryDarkerLighten};
`;

const MedalTitle = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.F11};
  color: ${colors.primaryDark};
`;
const WonMedals = styled(Holder)`
  flex-wrap: wrap;
  margin: 0 10px;
`;

const UserMedals = () => (
  <MedalsWrapper column>
    <MedalTitle>Medallas</MedalTitle>
    <CurrentMedalsWrapper column>
      <CurrentMedal
        badge={icon.badge}
        name="Nombre"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
        finibus hendrerit."
        progress="50"
      />
      <CurrentMedal
        badge={icon.badge}
        name="Nombre"
        description="Lorem dolor sit amet"
        progress="50"
      />
    </CurrentMedalsWrapper>
    <WonMedals justify="start">
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" disabled />
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" />
      <Medal badge={icon.badge} name="Nombre de la Medalla" disabled />
    </WonMedals>
  </MedalsWrapper>
);

UserMedals.defaultProps = {};

UserMedals.propTypes = {};

export default UserMedals;