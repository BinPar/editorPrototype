import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';

const Text = styled.p`
  font-family: ${fontFamily.sansSerif};
  `;

const TypeTitle = styled(Text)`
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F09};
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
`;

const Title = styled(Text)`
  font-weight: ${fontWeight.extrabold};
  font-size: ${fontSize.F11};
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${props => props.theme.primaryDarkerMed};
`;

const type = {
  evaluation: css`
    border-color: ${props => props.theme.secondary};
    ${TypeTitle} {
      color: ${props => props.theme.secondaryDark};
    }
  `,
  event: css`
    border-color: ${props => props.theme.primary};
    ${TypeTitle} {
      color: ${props => props.theme.primaryDark};
    }
  `,
};

const EventWrapper = styled(Holder)`
  border-width: 2px;
  border-left-width: 8px;
  border-style: solid;
  padding: 10px;
  ${props => type[props.type] || type.event};
  & + & {
    margin-top: 15px;
  }
`;

const Description = styled(Text)`
  font-size: ${fontSize.F12};
  color: ${props => props.theme.primaryDarkerMed};
  font-weight: ${fontWeight.semibold};
`;

const Event = ({
  typeTitle, title, description, ...props
}) => (
  <EventWrapper column align="start" {...props}>
    <TypeTitle>{typeTitle}</TypeTitle>
    <Holder column align="start">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Holder>
  </EventWrapper>
);

Event.defaultProps = {};

Event.propTypes = {
  typeTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;
