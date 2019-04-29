import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, icon, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Icon from '../../../../basics/Icon';
import Holder from '../../../../layout/Holder';

const Wrapper = styled(Holder)`
  background-color: ${colors.primaryTrans10};
  width: 100%;
  padding: 25px 10px;
`;

const Title = styled.p`
  font-family: ${fontFamily.sansSerif};
  color: ${colors.primaryDark};
  text-transform: uppercase;
  font-weight: ${fontWeight.extrabold};
  font-size: ${fontSize.F09};
  letter-spacing: 0.2em;
  margin: 10px auto;
`;

const Progress = styled.p`
  font-family: ${fontFamily.sansSerif};
  color: ${colors.primaryDark};
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F17};
`;

const Item = ({ icon, title, progress }) => (
  <Holder column>
    <Icon name={icon} color={colors.primaryDark} />
    <Title>{title}</Title>
    <Progress>{progress}</Progress>
  </Holder>
);

Item.defaultProps = {};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

const UserProgress = ({ completed, note, exercises }) => (
  <Wrapper justify="around">
    <Item icon={icon.checkCircle} title="Completado" progress={completed} />
    <Item icon={icon.evaluation} title="Nota" progress={note} />
    <Item icon={icon.starCircle} title="Ejercicios" progress={exercises} />
  </Wrapper>
);

UserProgress.defaultProps = {};

UserProgress.propTypes = {
  completed: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  exercises: PropTypes.string.isRequired,
};

export default UserProgress;
