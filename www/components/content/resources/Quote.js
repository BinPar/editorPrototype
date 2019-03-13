import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontStyle, fontSize, minMedia, maxMedia,
} from '../../../utils/Constants';
import Holder from '../../layout/Holder';
import Paragraph from '../text/Paragraph';

const sizeOption = {
  full: css`
    width: 100%;
  `,
  half: css`
    flex: 1 0 auto;
    &.left {
      ${minMedia.minDesk`
        margin-right: 30px;
      `}
      &.float {
        ${minMedia.minDesk`
          float: left;
        `}
      }
    }
    &.right {
      ${minMedia.minDesk`
        margin-left: 30px;
      `}
      &.float {
        ${minMedia.minDesk`
          float: right;
        `}
      }
    }
    ${minMedia.minDesk`
      width: calc(50% - 30px);
    `}
  `,
};

const QuoteHolder = styled(Holder)`
  ${props => sizeOption[props.size] || sizeOption.half}
  :not(:only-child) {
    margin-bottom: 50px;
  }
  ${minMedia.minDesk`
    shape-outside: ${props => props.circle && 'polygon(0 0,0 337px,55px 337px,350px 321px,440px 282px ,514px 233px,564px 0)'};
  `}
  &.mid{
    ${maxMedia.maxMobile`
      display: block;
    `}
  }
`;

const QuoteText = styled.p`
  font-style: ${fontStyle.italic};
  color: ${colors.greyDark};
  opacity: 0.8;
`;

const QuoteSmall = styled(QuoteText)`
  font-size: ${fontSize.F27};
  margin-left: 30px;
  position: relative;
  line-height: 30px;
  ::before {
    content: '';
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -30px;
    background: ${colors.secondary};
  }
`;

const QuoteMid = styled(QuoteText)`
  font-size: ${fontSize.F37};
  margin-left: 30px;
  line-height: 51px;
`;

const QuoteLarge = styled(QuoteText)`
  font-size: ${fontSize.F40};
  text-align: center;
  line-height: 51px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageMid = styled.div`
  ${maxMedia.maxMobile`
    width: 100px;
  `}
  ${minMedia.minTablet`
    width: 270px;
  `}
  position: relative;
  margin-right: 30px;
  flex: 1 0 auto;
  padding: 20px 0;
  ::before {
    ${minMedia.minTablet`
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      top: 0;
      right: -30px;
      background: ${colors.greyLight};
    `}
  }
`;

const ImageLarge = styled(Image)`
  width: 220px;
  margin-top: 50px;
`;

const Quote = ({
  children, mid, large, size, right, float, circle,
}) => {
  if (mid) {
    return (
      <QuoteHolder size={size} className={`mid ${right ? 'right' : 'left'}${float ? ' float' : ''}`}>
        <ImageMid>
          <Image src="/static/img/quotesGrey.svg" alt="Quotes" />
        </ImageMid>
        <QuoteMid>{children}</QuoteMid>
      </QuoteHolder>
    );
  }
  if (large) {
    return (
      <QuoteHolder
        column
        size={size}
        className={`${right ? 'right' : 'left'}${float ? ' float' : ''}`}
        circle={circle}
      >
        <QuoteLarge>{children}</QuoteLarge>
        <ImageLarge src="/static/img/quotesYellow.svg" alt="Quotes" />
      </QuoteHolder>
    );
  }
  return (
    <QuoteHolder
      size={size}
      justify="start"
      className={`${right ? 'right' : 'left'}${float ? ' float' : ''}`}
    >
      <QuoteSmall>{children}</QuoteSmall>
    </QuoteHolder>
  );
};

Quote.defaultProps = {
  mid: false,
  large: false,
  right: false,
  float: false,
  circle: false,
  size: '',
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  mid: PropTypes.bool,
  large: PropTypes.bool,
  right: PropTypes.bool,
  float: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.string,
};

export default Quote;
