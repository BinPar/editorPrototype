import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, maxMedia, minMedia } from '../utils/Constants';
import Holder from './layout/Holder';
import ImageFooter from './text/ImageFooter';
import Link from './text/Link';


const sizeOption = {
  full: css`
    width: 100%;
  `,
  small: css`
    width: calc(50% - 30px);
    flex: 1 0 auto;
    &.left {
      margin-right: 30px;
    };
    &.right {
      margin-left: 30px;
    };
  `,
};

const FooterLink = styled(Link)`
  position: relative;
  margin-left: 20px;
  ::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: ${colors.greyMed};
    position: absolute;
    top: 0;
    left: -10px;
    opacity: 0.5;
  }
`;

const ImageWrapper = styled.div`
  ${props => sizeOption[props.size] || sizeOption.small}
`;
const Img = styled.img`
  width: 100%;
`;

const Image = ({
  alt, source, size, footerText, footerLink, footerLinkRoute, right,
}) => (
  <ImageWrapper size={size} className={right ? 'right' : 'left'}>
    <Img src={source} alt={alt} />
    <ImageFooter>
      {footerText}
      {footerLink && <FooterLink href={footerLinkRoute}>{footerLink}</FooterLink>}
    </ImageFooter>
  </ImageWrapper>
);

Image.defaultProps = {
  right: false,
  size: '',
  footerLink: '',
  footerLinkRoute: '',
};

Image.propTypes = {
  right: PropTypes.bool,
  size: PropTypes.string,
  alt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  footerLink: PropTypes.string,
  footerLinkRoute: PropTypes.string,
};

export default Image;
