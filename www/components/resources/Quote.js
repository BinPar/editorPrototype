import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, maxMedia, minMedia, fontStyle, fontSize, fontWeight,
} from '../../utils/Constants';
import Holder from '../layout/Holder';
import Paragraph from '../text/Paragraph';

const QuoteHolder = styled(Holder)`
  :not(:only-child) {
    margin-bottom: 30px;
  };
`;

const QuoteText = styled(Paragraph)`
  font-style: ${fontStyle.italic};
  color: ${colors.greyDark};
  opacity: 0.8;
`;

const QuoteSmall = styled(QuoteText)`
  font-size: ${fontSize.F27};
  margin-left: 30px;
  position: relative;
  ::before {
    content: '';
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -30px;
    background: ${colors.secondary}
  };
`;

const QuoteMid = styled(QuoteText)`
  font-size: ${fontSize.F37};
`;

const QuoteLarge = styled(QuoteText)`
  font-size: ${fontSize.F40};
`;

const Quote = ({ children, mid, large }) => {
  if (mid) {
    return (
      <Holder>
        <QuoteMid>{children}</QuoteMid>
      </Holder>
    );
  }
  if (large) {
    return (
      <Holder column>
        <QuoteLarge>{children}</QuoteLarge>
      </Holder>
    );
  }
  return (
    <QuoteHolder justify="start">
      <QuoteSmall>{children}</QuoteSmall>
    </QuoteHolder>
  );
};

Quote.defaultProps = {
  mid: false,
  large: false,
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  mid: PropTypes.bool,
  large: PropTypes.bool,
};

export default Quote;
