import React from 'react';
import styled from 'styled-components';
import Holder from '../../layout/Holder';
import Panel from './Panel';
import ItemGroup from './items/ItemGroup';
import ItemWrapper from './items/ItemWrapper';
import HighlightItem from './items/HighlightItem';
import HighlighterItem from './items/highlights/HighlighterItem';
import Tabs from '../../basics/Tabs';
import Button from '../../basics/Button';
import { colors } from '../../../utils/Constants';

const PanelWrapper = styled(Panel)``;

const MainGroup = styled(ItemGroup)`
  padding-left: 10px;
  padding-right: 10px;
`;

const SettingsWrapper = styled(Holder)`
  padding-left: 10px;
  padding-right: 10px;
`;

const MyHighlightsList = styled.ul`
  list-style: none;
  padding: 10px 0;
  width: 100%;
`;

const AddMarker = styled(Button)`
  width: 100%;
`;

const settings = false;
const tabs = ['Mis textos', 'Mis marcadores'];
const HighlightsPanel = () => (
  <PanelWrapper>
    <Tabs tabs={tabs} />
    {settings ? (
      <SettingsWrapper column>
        <AddMarker text="Nuevo marcador" type="outline" />
        <MyHighlightsList>
          <HighlighterItem color={colors.error} name="Marcador 1" textColor={colors.white} />
          <HighlighterItem color={colors.greyMed} name="Marcador 3" />
          <HighlighterItem color={colors.secondary} name="Marcador 4" editing />
          <HighlighterItem color={colors.warning} name="Marcador 5" />
          <HighlighterItem color={colors.primary} name="Marcador 6" />
        </MyHighlightsList>
      </SettingsWrapper>
    ) : (
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
                      <HighlightItem
                        bgColor={colors.error}
                        textColor={colors.white}
                        name="Marcador 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum quis nibh eu ullamcorper. Phasellus nulla ligula, euismod nec nunc id, rutrum feugiat nisl. Integer semper, metus in tempor gravida, lectus nisl rhoncus felis, ac orcibel."
                      />
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
      </MainGroup>
    )}
  </PanelWrapper>
);
HighlightsPanel.defaultProps = {};

HighlightsPanel.propTypes = {};

export default HighlightsPanel;
