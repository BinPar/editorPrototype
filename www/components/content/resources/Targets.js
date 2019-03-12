import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSize, fontWeight } from '../../../utils/Constants';
import Subtitle from '../text/Subtitle';
import FullWrapper from '../layout/FullWrapper';
import Wrapper from '../layout/Wrapper';
import Paragraph from '../text/Paragraph';

export const TargetItem = styled(Paragraph)`
  font-size: ${fontSize.F19};
  color: ${colors.primaryDarker};
  font-weight: ${fontWeight.medium};
  text-align: right;
`;

const Full = styled(FullWrapper)`
  && {
    background: ${colors.backgroundLightGreen};
  }
  `;

const Holder = styled(Wrapper)`
  margin: 30px 20px 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Targets = ({ children, title }) => (
  <Full align="left" alignContent="end">
    <Holder>
      <Subtitle right color>
        {title}
      </Subtitle>
      {children}
    </Holder>
  </Full>
);

Targets.defaultProps = {
  title: 'Objetivos de Aprendizaje',
};

Targets.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
