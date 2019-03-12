import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight,
} from '../../utils/Constants';
import Link from '../content/text/Link';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  position: fixed;
  z-index: -1;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(Link)`
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.F19};
  color: ${colors.greyDark};
  & + & {
    margin-left: 50px;
  }
  :hover {
    color: ${colors.primaryDark};
  }
  &.disabled {
    color: ${colors.greyMed};
    pointer-events: none;
  }
`;

const Footer = ({
  backRoute, nextRoute, backDisabled, nextDisabled,
}) => (
  <FooterWrapper>
    <FooterLink href={backRoute} className={backDisabled ? 'disabled' : ''}>Anterior</FooterLink>
    <FooterLink href={nextRoute} className={nextDisabled ? 'disabled' : ''}>Siguiente</FooterLink>
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
