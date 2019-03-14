import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, fontSize } from '../../../utils/Constants';
import Holder from '../../layout/Holder';
import Paragraph from '../text/Paragraph';

const BlockType = {
  info: css`
    border-color: ${colors.primary};
    background: ${colors.primaryLighter};
  `,
  knowledge: css`
    border-color: ${colors.secondary};
    background: ${colors.secondaryLight};
  `,
};

const BlockHolder = styled(Holder)`
  position: relative;
  border-top: 5px solid;
  border-right: 5px solid;
  margin-top: 20px;
  margin-left: 70px;
  padding: 20px;
  ${props => BlockType[props.type] || BlockType.knowledge};
  :not(:only-child) {
    margin-bottom: 50px;
  }
`;

const KnowledgeText = styled(Paragraph)`
  font-size: ${fontSize.F22};
  color: ${colors.secondaryDark};
`;
const InfoText = styled(Paragraph)`
  font-size: ${fontSize.F22};
  color: ${colors.primaryMed};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageWrapper = styled.div`
  width: 60px;
  position: absolute;
  top: -45px;
  left: -70px;
`;

const Block = ({ children, type }) => (
  <BlockHolder type={type} column align="start" justify="start">
    <ImageWrapper>
      <Image
        src={type === 'info' ? '/static/img/info.svg' : '/static/img/light.svg'}
        alt="Block Image"
      />
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
};

export default Block;
