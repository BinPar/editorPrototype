import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  fontFamily,
  fontWeight,
  fontStyle,
  fontSize,
  minMedia,
  maxMedia,
} from '../../../utils/Constants';
import Link from '../text/Link';

const ImageFooter = styled.p`
  font-size: ${fontSize.F14};
  text-align: center;
  color: ${props => props.theme.imageFooterText};
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
    flex: 1 0 auto;
    ${maxMedia.maxTablet`
      margin-bottom: 30px;
    `}
    ${minMedia.minDesk`
      width: calc(50% - 30px);
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
    `}
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
    background-color: ${props => props.theme.imageFooterDivision};
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
  &.sepia {
    filter: url(#sepia);
  }
  &.dark {
    filter: url(#dark);
  }
`;

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const SepiaFilter = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="sepia">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
      1 0 0 0 0
      1 0 0 0 0
      0 0 0 1 0"
          in="SourceGraphic"
          result="colormatrix"
        />
        <feComponentTransfer in="colormatrix" result="componentTransfer">
          <feFuncR type="table" tableValues="0.26 0.95" />
          <feFuncG type="table" tableValues="0.19 0.78" />
          <feFuncB type="table" tableValues="0.11 0.59" />
          <feFuncA type="table" tableValues="0 0.3" />
        </feComponentTransfer>
        <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend" />
      </filter>
    </defs>
  </Svg>
);

const DarkFilter = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="dark">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
      1 0 0 0 0
      1 0 0 0 0
      0 0 0 1 0"
          in="SourceGraphic"
          result="colormatrix"
        />
        <feComponentTransfer in="colormatrix" result="componentTransfer">
          <feFuncR type="table" tableValues="0" />
          <feFuncG type="table" tableValues="0" />
          <feFuncB type="table" tableValues="0" />
          <feFuncA type="table" tableValues="0 0.2" />
        </feComponentTransfer>
        <feBlend mode="multiply" in="componentTransfer" in2="SourceGraphic" result="blend" />
      </filter>
    </defs>
  </Svg>
);

const renderFilter = (filterName) => {
  switch (filterName) {
    case 'sepia':
      return <SepiaFilter />;
    case 'dark':
      return <DarkFilter />;
    default:
      return null;
  }
};

const Image = ({
  alt,
  source,
  size,
  footerText,
  footerLink,
  footerLinkRoute,
  right,
  float,
  activeTheme,
}) => (
  <ImageWrapper size={size} className={`${right ? 'right' : 'left'}${float ? ' float' : ''}`}>
    <Img
      src={source}
      alt={alt}
      className={`${activeTheme === 'sepia' ? ' sepia' : ''} ${
        activeTheme === 'dark' ? ' dark' : ''
      }`}
    />
    {activeTheme === 'sepia' ? renderFilter('sepia') : null}
    {activeTheme === 'dark' ? renderFilter('dark') : null}
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
  activeTheme: PropTypes.string.isRequired,
};

export default Image;
