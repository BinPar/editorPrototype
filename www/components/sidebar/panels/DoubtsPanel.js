import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import ItemGroup from './items/ItemGroup';
import ItemWrapper from './items/ItemWrapper';
import DoubtItem from './items/DoubtItem';

const PanelWrapper = styled(Panel)`
  padding-left: 10px;
  padding-right: 10px;
`;

const DoubtsPanel = () => (
  <PanelWrapper>
    <ItemGroup>
      <ItemWrapper
        module={1}
        text="Fundamentos, equipos y anatomía ecográfica"
        hasChildren
        count="10"
      />
      <ItemWrapper
        module={2}
        text="Ecografía abdominal 1: hígado y vía biliar"
        hasChildren
        open
        count="5"
      >
        <ItemGroup>
          <ItemWrapper
            theme={1}
            text="Anatomía ecográfica hepática. Normalidad y variantes morfológicas"
            hasChildren
            open
            count="1"
          >
            <ItemGroup>
              <ItemWrapper text="Características ecográficas del hígado" hasChildren open>
                <ItemGroup>
                  <DoubtItem date="21:29 - 25/04" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum quis nibh eu ullamcorper. Phasellus nulla ligula, euismod nec nunc id, rutrum feugiat nisl. Integer semper, metus in tempor gravida, lectus nisl rhoncus felis, ac orcibel." />
                </ItemGroup>
              </ItemWrapper>
            </ItemGroup>
          </ItemWrapper>
          <ItemWrapper
            theme={2}
            text="Patología hepática. Alteraciones focales y difusas"
            hasChildren
            count="4"
          />
        </ItemGroup>
      </ItemWrapper>
    </ItemGroup>
  </PanelWrapper>
);

DoubtsPanel.defaultProps = {};

DoubtsPanel.propTypes = {};

export default DoubtsPanel;
