import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, icon, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';
import Medal from './Medal';
import CurrentMedal from './CurrentMedal';

const MedalsWrapper = styled(Holder)``;

const MedalTitle = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.F11};
  color: ${colors.primaryDark};
`;
const WonMedals = styled(Holder)`
  flex-wrap: wrap;
`;

const UserMedals = () => (
  <MedalsWrapper column>
    <MedalTitle>Medallas</MedalTitle>
    <Holder column>
      <CurrentMedal icon={icon.badge} name="Nombre" description="Lorem dolor sit amet" progress={50} />
      <CurrentMedal icon={icon.badge} name="Nombre" description="Lorem dolor sit amet" progress={50} />
    </Holder>
    <WonMedals justify="start">
      <Medal badge={icon.badge} title="Nombre" />
      <Medal badge={icon.badge} title="Nombre" />
      <Medal badge={icon.badge} title="Nombre" />
      <Medal badge={icon.badge} title="Nombre" />
      <Medal badge={icon.badge} title="Nombre" />
    </WonMedals>
  </MedalsWrapper>
);

UserMedals.defaultProps = {};

UserMedals.propTypes = {
};

export default UserMedals;
