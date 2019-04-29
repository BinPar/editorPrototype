import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight, fontStyle, minMedia, icon, fontFamily,
} from '../../../utils/Constants';
import Panel from './Panel';
import UserProgress from './items/user/UserProgress';
import UserMedals from './items/user/UserMedals';
import Holder from '../../layout/Holder';
import Button from '../../basics/Button';
import Icon from '../../basics/Icon';

const PanelWrapper = styled(Panel)``;

const ProfilePicture = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${colors.primaryDarkerLighten};
  padding: 5px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Options = styled(Holder)`
  padding: 0 10px;
`;

const UserInfo = styled(Holder)`
  padding: 0 10px 10px;
  margin-bottom: 10px;
`;

const Username = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.extrabold};
  font-size: ${fontSize.F16};
  color: ${colors.primaryDark};
  margin-bottom: 10px;
`;

const UserRole = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.F11};
  color: ${colors.primaryDark};
`;

const UserPanel = () => (
  <PanelWrapper>
    <Options justify="between">
      <Button
        name={icon.logout}
        color={colors.primaryDarkerLighten}
        hoverColor={colors.primaryDarkerMed}
      />
      <Button
        name={icon.settings}
        color={colors.primaryDarkerLighten}
        hoverColor={colors.primaryDarkerMed}
      />
    </Options>
    <UserInfo column>
      <ProfilePicture>
        <Image src="/static/img/user.jpg" alt="Profile Picture" />
      </ProfilePicture>
      <Username>María Fernanda Rodríguez</Username>
      <UserRole>Estudiante</UserRole>
    </UserInfo>
    <UserProgress completed="30%" note="20" exercises="20 / 100" />
    <UserMedals />
  </PanelWrapper>
);

UserPanel.defaultProps = {};

UserPanel.propTypes = {};

export default UserPanel;
