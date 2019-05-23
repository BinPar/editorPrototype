import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSize, fontWeight, fontStyle, icon, maxMedia,
} from '../../utils/Constants';
import Link from '../content/text/Link';
import Icon from '../basics/Icon';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(Link)`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.F19};
  font-style: ${fontStyle.normal};
  color: ${props => props.theme.footerLink};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: ${props => props.theme.footerLink};
  }
  & + & {
    margin-left: 50px;
    :before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -25px;
      width: 2px;
      height: 30px;
      background: ${props => props.theme.footerLinkDivision};
      opacity: 0.4;
    }
  }
  :hover {
    color: ${props => props.theme.footerLinkHover};
    .icon {
      color: ${props => props.theme.footerLinkHover};
    }
  }
  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  .longArrowLeft {
    margin-right: 15px;
  }
  .longArrowRight {
    margin-left: 15px;
  }
`;

const Footer = ({
  backRoute, nextRoute, backDisabled, nextDisabled,
}) => (
  <FooterWrapper>
    <FooterLink href={backRoute} className={backDisabled ? 'disabled' : ''}>
      <Icon name={icon.longArrowLeft} />
      Anterior
    </FooterLink>
    <FooterLink href={nextRoute} className={nextDisabled ? 'disabled' : ''}>
      Siguiente
      <Icon name={icon.longArrowRight} />
    </FooterLink>
  </FooterWrapper>
);

Footer.defaultProps = {
  backDisabled: false,
  nextDisabled: false,
};

Footer.propTypes = {
  backDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  backRoute: PropTypes.string.isRequired,
  nextRoute: PropTypes.string.isRequired,
};

export default Footer;
