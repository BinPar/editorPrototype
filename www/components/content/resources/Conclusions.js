import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize, fontWeight } from '../../../utils/Constants';
import Subtitle from '../text/Subtitle';
import FullWrapper from '../layout/FullWrapper';
import Wrapper from '../layout/Wrapper';
import Paragraph from '../text/Paragraph';

export const ConclusionItem = styled(Paragraph)`
  font-size: ${fontSize.F19};
  color: ${props => props.theme.highlightedText};
  font-weight: ${fontWeight.medium};
`;

const Full = styled(FullWrapper)`
  && {
    background: ${props => props.theme.highlightedBg};
  }
`;

const Holder = styled(Wrapper)`
  margin: 30px 0 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Conclusions = ({ children, title, ...props }) => (
  <Full align="right" alignContent="start" {...props}>
    <Holder>
      <Subtitle useColor>{title}</Subtitle>
      {children}
    </Holder>
  </Full>
);

Conclusions.defaultProps = {
  title: 'Conclusiones',
};

Conclusions.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
