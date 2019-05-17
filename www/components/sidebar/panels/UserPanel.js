import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  fontSize, fontWeight, icon, fontFamily,
} from '../../../utils/Constants';
import Panel from './Panel';
import UserProgress from './items/user/UserProgress';
import UserMedals from './items/user/UserMedals';
import Holder from '../../layout/Holder';
import Button from '../../basics/Button';

const PanelWrapper = styled(Panel)``;

const ProfilePicture = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${props => props.theme.userImageBorder};
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
  color: ${props => props.theme.userName};
  margin-bottom: 10px;
`;

const UserRole = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.F11};
  color: ${props => props.theme.userRole};
`;

const UserPanel = ({ theme }) => (
  <PanelWrapper>
    <Options justify="between">
      <Button
        name={icon.logout}
        color={theme.itemIcon}
        hoverColor={theme.itemIconHover}
      />
      <Button
        name={icon.settings}
        color={theme.itemIcon}
        hoverColor={theme.itemIconHover}
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

UserPanel.propTypes = {
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(UserPanel);
