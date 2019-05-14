import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import ItemGroup from './items/ItemGroup';
import ItemWrapper from './items/ItemWrapper';
import ResourceItem from './items/ResourceItem';
import Tabs from '../../basics/Tabs';

const PanelWrapper = styled(Panel)``;

const MainGroup = styled(ItemGroup)`
  padding-left: 10px;
  padding-right: 10px;
`;

const tabs = ['Figuras', 'Tablas', 'Actividades', 'Casos', 'Vídeos', 'Enlaces'];

const ResourcesPanel = () => (
  <PanelWrapper>
    <Tabs tabs={tabs} />
    <MainGroup>
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
          <ResourceItem
            title="Fig. 8-4-10"
            source="/static/img/image.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum quis nibh eu ullamcorper. Phasellus nulla ligula, euismod nec nunc id, rutrum feugiat nisl. Integer semper, metus in tempor gravida, lectus nisl rhoncus felis, ac orcibel."
          />
        </ItemGroup>
      </ItemWrapper>
      <ItemWrapper
        module={3}
        text="Ecografía abdominal 2: riñón, vías urinarias y próstata"
        hasChildren
        count="10"
      />
    </MainGroup>
  </PanelWrapper>
);

ResourcesPanel.defaultProps = {};

ResourcesPanel.propTypes = {};

export default ResourcesPanel;
