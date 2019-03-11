import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, maxMedia, minMedia } from '../../utils/Constants';
import Holder from '../layout/Holder';
import FullWrapper from '../layout/FullWrapper';
import Subtitle from '../text/Subtitle';

const Full = styled(FullWrapper)`
  background: ${colors.backgroundLightGreen};
`;

const HolderBlock = styled(Holder)`
  ${maxMedia.maxMobile`
    max-width: calc(100% - 50px);
  `}
  ${minMedia.minTablet`
    max-width: calc(100% - 150px);
  `}
  ${minMedia.minDesk`
    max-width: calc(100% - 250px);
  `}
  ${minMedia.minDeskLarge`
    max-width: 70%;
  `}
  ${minMedia.minDeskHD`
    max-width: 62%;
  `}
  ${minMedia.minDeskUltraHD`
    max-width: 53%;
  `}
  ${minMedia.minDeskMegaHD`
    max-width: 43%;
  `}
`;

const Targets = ({ children, title }) => (
  <Full align="left">
    <HolderBlock column align="end">
      <Subtitle right color>
        {title}
      </Subtitle>
      {children}
    </HolderBlock>
  </Full>
);

Targets.defaultProps = {
  title: 'Objetivos de Aprendizaje',
};

Targets.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Targets;
