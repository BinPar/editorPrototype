import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { fontSize } from '../../../utils/Constants';
import Button from '../Button';

const OptionButton = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;

const Option = ({
  sidebar, theme, name, onClick,
}) => (
  <OptionButton
    name={name}
    color={theme.addIcon}
    size={sidebar ? fontSize.F17 : fontSize.F24}
    hoverColor={theme.addOptionIconHover}
    onClick={onClick}
  />
);

Option.defaultProps = {
  sidebar: false,
  onClick: null,
};

Option.propTypes = {
  sidebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
};

export default withTheme(Option);
