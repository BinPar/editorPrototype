import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { icon } from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';
import UserProgressItem from './UserProgressItem';

const Wrapper = styled(Holder)`
  background-color: ${props => props.theme.userProgressBg};
  width: 100%;
  padding: 25px 30px;
`;

const UserProgress = ({ completed, note, exercises }) => (
  <Wrapper justify="between">
    <UserProgressItem iconName={icon.checkCircle} title="Completado" progress={completed} />
    <UserProgressItem iconName={icon.evaluation} title="Nota" progress={note} />
    <UserProgressItem iconName={icon.starCircle} title="Ejercicios" progress={exercises} />
  </Wrapper>
);

UserProgress.defaultProps = {};

UserProgress.propTypes = {
  completed: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  exercises: PropTypes.string.isRequired,
};

export default UserProgress;
