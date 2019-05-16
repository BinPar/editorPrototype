import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSize, fontWeight, fontFamily,
} from '../../../utils/Constants';
import Holder from '../../layout/Holder';

const AuthorWrapper = styled(Holder)`
  margin: 50px auto;
`;

const Name = styled.p`
  font-family: ${fontFamily.serif};
  color: ${props => props.theme.authorName};
  font-size: ${fontSize.F15};
  font-weight: ${fontWeight.semibold};
  line-height: ${fontSize.F15};
`;

const Date = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.F11};
  line-height: ${fontSize.F11};
  color: ${props => props.theme.authorDate};
  font-weight: ${fontWeight.bold};
  margin-top: 5px;
`;

const ImageWrapper = styled(Holder)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Author = ({ name, date, time }) => (
  <AuthorWrapper justify="start">
    <ImageWrapper>
      <Image alt="" src="/static/img/author.png" />
    </ImageWrapper>
    <Holder column align="start">
      <Name>{name}</Name>
      <Date>{date} - {time} de lectura</Date>
    </Holder>
  </AuthorWrapper>
);

Author.defaultProps = {
};

Author.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Author;
