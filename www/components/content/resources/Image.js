import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontStyle, fontSize,
} from '../../../utils/Constants';
import Link from '../text/Link';

const ImageFooter = styled.p`
  font-size: ${fontSize.F14};
  text-align: center;
  color: ${colors.greyMed};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  font-style: ${fontStyle.italic};
  line-height: ${fontSize.F18};
  letter-spacing: 0.02rem;
  margin-top: 15px;
`;

const sizeOption = {
  full: css`
    width: 100%;
  `,
  half: css`
    width: calc(50% - 30px);
    flex: 1 0 auto;
    &.left {
      margin-right: 30px;
      &.float {
        float: left;
      }
    }
    &.right {
      margin-left: 30px;
      &.float {
        float: right;
      }
    }
  `,
};

const FooterLink = styled(Link)`
  position: relative;
  margin-left: 20px;
  font-style: ${fontStyle.normal};
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
  ${props => sizeOption[props.size] || sizeOption.half}
`;
const Img = styled.img`
  width: 100%;
`;

const Image = ({
  alt, source, size, footerText, footerLink, footerLinkRoute, right, float,
}) => (
  <ImageWrapper size={size} className={`${right ? 'right' : 'left'}${float ? ' float' : ''}`}>
    <Img src={source} alt={alt} />
    <ImageFooter>
      {footerText}
      {footerLink && <FooterLink href={footerLinkRoute}>{footerLink}</FooterLink>}
    </ImageFooter>
  </ImageWrapper>
);

Image.defaultProps = {
  float: false,
  right: false,
  size: '',
  footerLink: '',
  footerLinkRoute: '',
};

Image.propTypes = {
  float: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.string,
  alt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  footerLink: PropTypes.string,
  footerLinkRoute: PropTypes.string,
};

export default Image;
