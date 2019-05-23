import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const SepiaFilter = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" version="1.1" shape-rendering="geometricPrecision">
    <defs>
      <filter id="sepia">
        <feColorMatrix
          type="matrix"
          values="0.7 0 0.8 0 0
                  0 0.5 0.1 0 0
                  0 0 0.3 0 0
                  0 0 0 1 0 "
        />
      </filter>
    </defs>
  </Svg>
);

export default SepiaFilter;
