import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontFamily, fontWeight } from '../../../../../utils/Constants';
import Field from '../../../../form/Field';

const StyledTitle = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  letter-spacing: 0.07em;
`;
const StyledField = styled(Field)`
  border-bottom-width: 1px;
`;

const Title = ({ title, editing, className }) => (editing ? (
  <StyledField size="full" type="text" className={className} defaultValue={title} />
) : (
  <StyledTitle>{title}</StyledTitle>
));

Title.defaultProps = {
  editing: false,
  title: '',
  className: '',
};

Title.propTypes = {
  editing: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
