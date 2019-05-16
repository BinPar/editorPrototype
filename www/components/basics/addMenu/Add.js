import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { fontSize, icon } from '../../../utils/Constants';
import Button from '../Button';
import Holder from '../../layout/Holder';
import Wrapper from '../../content/layout/Wrapper';
import OptionsWrapper from './OptionsWrapper';

const AddWrapper = styled(Wrapper)`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 500ms ease;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.addDivision};
    opacity: 0.3;
    z-index: -1;
  }
  &:hover {
    opacity: 1;
  }
`;

const AddWrapperSidebar = styled.li`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 50px);
  margin: 0 auto;
  opacity: 0;
  transition: opacity 500ms ease;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.addDivision};
    opacity: 0.3;
    z-index: -1;
  }
  &:hover {
    opacity: 1;
  }
`;

const OptionsHolder = styled(Holder)`
  position: relative;
  z-index: 1;
`;

const AddButton = styled(Button)`
  background-color: ${props => (props.sidebar ? props.theme.addBgSidebar : props.theme.addBg)};
  padding: ${props => (props.sidebar ? '5px' : '10px')};
  border-radius: 50%;
  z-index: 3;
  transform: translateX(10px) rotate(0);
  transition: transform 500ms ease-in;
  &.rotate {
    transform: translateX(10px) rotate(45deg);
    transition: transform 500ms ease-in;
  }
`;

// TODO: Al hacer click en una opción se debe cerrar el menú (quitar la clase expanded)

const Add = ({ sidebar, theme, children }) => {
  const [expanded, setExpanded] = useState(false);
  return sidebar ? (
    <AddWrapperSidebar>
      <OptionsHolder sidebar>
        <AddButton
          name={icon.addCircle}
          color={theme.addIcon}
          size={fontSize.F15}
          hoverColor={theme.addIconHover}
          open={expanded}
          onClick={() => setExpanded(!expanded)}
          className={expanded ? ' rotate' : ''}
          sidebar
        />
        <OptionsWrapper className={expanded ? ' expanded' : ''} sidebar>
          {children}
        </OptionsWrapper>
      </OptionsHolder>
    </AddWrapperSidebar>
  ) : (
    <AddWrapper>
      <OptionsHolder className={expanded ? ' expanded' : ''}>
        <AddButton
          name={icon.addCircle}
          color={theme.addIcon}
          size={fontSize.F30}
          hoverColor={theme.addIconHover}
          open={expanded}
          onClick={() => setExpanded(!expanded)}
          className={expanded ? ' rotate' : ''}
        />
        <OptionsWrapper className={expanded ? ' expanded' : ''}>{children}</OptionsWrapper>
      </OptionsHolder>
    </AddWrapper>
  );
};
Add.defaultProps = {
  sidebar: false,
};

Add.propTypes = {
  sidebar: PropTypes.bool,
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(Add);
