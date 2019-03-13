import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSize, fontWeight } from '../../utils/Constants';
import Holder from './Holder';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Content = styled(Holder)`
  width: 100%;
  height: 65px;
  background: ${colors.primaryDark};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Bar = styled.span`
  height: 5px;
  background: ${colors.primaryLight};
  width: ${props => `${props.progress}px`};
`;

const Footer = ({ progress }) => (
  <HeaderWrapper>
    <Content justify="between">
      <Holder column justify="start">
        Título
      </Holder>
      <Holder>
        Logo
      </Holder>
      <Holder>
        Notifications
      </Holder>
    </Content>
    <ProgressBar>
      <Bar progress={progress} />
    </ProgressBar>
  </HeaderWrapper>
);

Footer.defaultProps = {};

Footer.propTypes = {
  progress: PropTypes.string.isRequired,
};

export default Footer;
