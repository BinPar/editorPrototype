import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontFamily, fontWeight,
} from '../../../../utils/Constants';
import Holder from '../../../layout/Holder';
import Button from '../../../basics/Button';
import Icon from '../../../basics/Icon';

const StyledItem = styled.li`
  display: flex;
  position: relative;
  ~ * {
    margin-top: 15px;
  }
  &.active {
    a {
      &:after {
        content: '';
        width: calc(100% - 12px);
        height: calc(100% + 10px);
        background-color: ${props => props.theme.primaryDarkerLighten};
        opacity: 0.2;
        position: absolute;
        top: -5px;
        left: 12px;
        right: 0;
        pointer-events: none;
      }
    }
  }
`;

const Link = styled.a`
  display: flex;
  width: 100%;
  z-index: 1;
  &:hover {
    &:after {
      content: '';
      width: 100%;
      height: calc(100% + 10px);
      background-color: ${props => props.theme.primaryDarkerLighten};
      opacity: 0.2;
      position: absolute;
      top: -5px;
      left: -5px;
      right: 0;
      pointer-events: none;
    }
  }
`;

const InfoWrapper = styled(Holder)`
  width: calc(100% - 100px);
  margin-left: 10px;
`;

const Text = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.regular};
  letter-spacing: 0.07em;
  font-size: ${fontSize.F12};
  color: ${props => props.theme.primaryDarkerMed};

  display: block;
  display: -webkit-box;
  -webkit-box-align: stretch;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  height: 40px;
  position: relative;
  word-break: break-all;

  &:before {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 20%;
    height: 40px;
    background: linear-gradient(to right, rgba(#8DC3B9, 0), rgba(#8DC3B9, 1) 80%);
  }

  @supports (-webkit-line-clamp: 3 ) {
    word-break: normal;
    -webkit-box-orient: vertical;

    &:before {
      display: none;
    }
  }
`;

const Image = styled.div`
  width: 80px;
  height: 80px;
`;

const Title = styled.p`
  width: 100%;
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.F12};
  color: ${props => props.theme.primaryDarker};
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.primaryDarkerLighten};
`;

const ResourceItem = ({
  active, route, text, source, alt, title,
}) => (
  <StyledItem className={`${active ? ' active' : ''} `}>
    <Link href={route}>
      <Image>
        <img alt={alt} src={source} />
      </Image>
      <InfoWrapper column align="start">
        <Title>{title}</Title>
        <Text>{text}</Text>
      </InfoWrapper>
    </Link>
  </StyledItem>
);

ResourceItem.defaultProps = {
  active: false,
  route: '',
};

ResourceItem.propTypes = {
  active: PropTypes.bool,
  route: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ResourceItem;
