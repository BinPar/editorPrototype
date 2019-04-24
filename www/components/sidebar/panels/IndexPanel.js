import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import ItemGroup from './items/ItemGroup';
import ItemWrapper from './items/ItemWrapper';

const PanelWrapper = styled(Panel)`
  padding-left: 10px;
`;

const IndexPanel = () => (
  <PanelWrapper>
    <ItemGroup>
      <ItemWrapper
        module={1}
        text="Fundamentos, equipos y anatomía ecográfica"
        hasChildren
        progress="100"
      />
      <ItemWrapper
        module={2}
        text="Ecografía abdominal 1: hígado y vía biliar"
        hasChildren
        open
        progress="50"
      >
        <ItemGroup>
          <ItemWrapper
            theme={1}
            text="Anatomía ecográfica hepática. Normalidad y variantes morfológicas"
            hasChildren
            open
            progress="75"
          >
            <ItemGroup>
              <ItemWrapper text="Objetivos de Aprendizaje" type="alignLeft" />
              <ItemWrapper text="Introducción" type="alignLeft" />
              <ItemWrapper text="Anatomía de Couidaud" hasChildren />
              <ItemWrapper text="Patología de la vesícula" type="alignLeft" />
              <ItemWrapper text="Características ecográficas del hígado" hasChildren open>
                <ItemGroup>
                  <ItemWrapper text="Lóbulo hepático de Riedel" type="alignLeft" />
                  <ItemWrapper text="Ejercicio" type="star" />
                  <ItemWrapper active text="Situs inversus hepático" type="alignLeft" />
                  <ItemWrapper text="Videoclase" type="video" />
                </ItemGroup>
              </ItemWrapper>
            </ItemGroup>
          </ItemWrapper>
          <ItemWrapper
            theme={2}
            text="Patología hepática. Alteraciones focales y difusas"
            hasChildren
            progress="0"
          />
          <ItemWrapper
            theme={3}
            text="Anatomía ecográfica de la vesícula y vía biliar. Normalidad y variantes morfológicas"
            hasChildren
            progress="0"
          />
          <ItemWrapper
            theme={4}
            text="Patología vesícula y vías biliares: obstructiva y tumoral"
            hasChildren
            progress="0"
          />
          <ItemWrapper evaluation type="star" />
        </ItemGroup>
      </ItemWrapper>
      <ItemWrapper
        module={3}
        text="Ecografía abdominal 2: riñón, vías urinarias y próstata"
        hasChildren
        progress="0"
      />
      <ItemWrapper
        module={4}
        text="Ecografía abdominal 2: páncreas, bazo y tubo digestivo"
        hasChildren
        progress="0"
      />
      <ItemWrapper
        module={5}
        text="Ecografía ginecológica y obstétrica para el médico de familia"
        hasChildren
        progress="0"
      />
      <ItemWrapper
        module={6}
        text="Ecografía en Urgencias y Emergencias"
        hasChildren
        progress="0"
      />
    </ItemGroup>
  </PanelWrapper>
);

IndexPanel.defaultProps = {};

IndexPanel.propTypes = {};

export default IndexPanel;
