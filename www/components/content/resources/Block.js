import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fontSize } from '../../../utils/Constants';
import Holder from '../../layout/Holder';
import Paragraph from '../text/Paragraph';

const BlockType = {
  info: css`
    border-color: ${props => props.theme.infoBorder};
    background: ${props => props.theme.infoBg};
  `,
  knowledge: css`
    border-color: ${props => props.theme.knowledgeBorder};
    background: ${props => props.theme.knowledgeBg};
  `,
};

const BlockHolder = styled(Holder)`
  position: relative;
  border-top: 5px solid;
  border-right: 5px solid;
  margin-top: 20px;
  margin-left: 70px;
  padding: 20px;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    width: 100%;
  }
  ${props => BlockType[props.type] || BlockType.knowledge};
  :not(:only-child) {
    margin-bottom: 50px;
  }
`;

const InfoText = styled(Paragraph)`
  font-size: ${fontSize.F22};
  color: ${props => props.theme.infoText};
`;
const KnowledgeText = styled(Paragraph)`
  font-size: ${fontSize.F22};
  color: ${props => props.theme.knowledgeText};
`;

const SepiaFilter = {
  info: css`
    filter: url(#infoSepia);
  `,
  knowledge: css`
  `,
};

const Image = styled.img`
  width: 100%;
  height: auto;
  &.sepia {
    ${props => SepiaFilter[props.type] || SepiaFilter.knowledge};
  }
`;

const ImageWrapper = styled.div`
  width: 60px;
  position: absolute;
  top: -45px;
  left: -70px;
`;

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const InfoFilter = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="infoSepia">
        <feColorMatrix
          type="matrix"
          values="2 0 -1 0 0
                  -0.1 0.6 -0.4 0 0
                  0.1 0 0 0 0
                  0 0 0 1 0 "
        />
      </filter>
    </defs>
  </Svg>
);

const renderFilter = (filterName, type) => {
  switch (filterName) {
    case 'sepia':
      return type === 'info' ? <InfoFilter /> : null;
    default:
      return null;
  }
};

const Block = ({ children, type, activeTheme }) => (
  <BlockHolder type={type} column align="start" justify="start">
    <ImageWrapper>
      <Image
        src={type === 'info' ? '/static/img/info.svg' : '/static/img/light.svg'}
        alt="Block Image"
        type={type === 'info' ? 'info' : null}
        className={activeTheme === 'sepia' ? 'sepia' : ''}
      />
      {activeTheme === 'sepia' ? renderFilter('sepia', type) : null}
    </ImageWrapper>
    {type === 'info' ? <InfoText>{children}</InfoText> : <KnowledgeText>{children}</KnowledgeText>}
  </BlockHolder>
);

Block.defaultProps = {
  type: '',
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  activeTheme: PropTypes.string.isRequired,
};

export default Block;
