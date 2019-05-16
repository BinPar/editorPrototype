import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Panel from './Panel';
import ItemGroup from './items/ItemGroup';
import ItemWrapper from './items/ItemWrapper';
import Add from '../../basics/addMenu/Add';
import Option from '../../basics/addMenu/Option';
import { icon } from '../../../utils/Constants';

const PanelWrapper = styled(Panel)`
  padding-left: 10px;
  padding-right: 10px;
`;

// Editar texto del item y añadir nodo

const IndexPanel = ({ editing }) => (
  <PanelWrapper>
    <ItemGroup>
      <ItemWrapper
        module={1}
        text="Fundamentos, equipos y anatomía ecográfica"
        hasChildren
        progress="100"
        editing={editing}
      />
      {editing && (
        <Add sidebar>
          <Option sidebar name={icon.subtitle} />
          <Option sidebar name={icon.star} />
          {' '}
        </Add>
      )}
      <ItemWrapper
        module={2}
        text="Ecografía abdominal 1: hígado y vía biliar"
        hasChildren
        open
        progress="50"
        editing={editing}
      >
        <ItemGroup>
          <ItemWrapper
            theme={1}
            text="Anatomía ecográfica hepática. Normalidad y variantes morfológicas"
            hasChildren
            open
            progress="75"
            editing={editing}
          >
            <ItemGroup>
              <ItemWrapper text="Objetivos de Aprendizaje" type="alignLeft" />
              <ItemWrapper text="Introducción" type="alignLeft" />
              <ItemWrapper text="Anatomía de Couidaud" hasChildren />
              <ItemWrapper text="Patología de la vesícula" type="alignLeft" />
              <ItemWrapper text="Características ecográficas del hígado" hasChildren open>
                <ItemGroup>
                  <ItemWrapper
                    disabled={editing}
                    text="Lóbulo hepático de Riedel"
                    type="alignLeft"
                  />
                  <ItemWrapper disabled={editing} text="Ejercicio" type="star" />
                  <ItemWrapper
                    disabled={editing}
                    active
                    text="Situs inversus hepático"
                    type="alignLeft"
                  />
                  <ItemWrapper disabled={editing} text="Videoclase" type="video" />
                </ItemGroup>
              </ItemWrapper>
            </ItemGroup>
          </ItemWrapper>
          <ItemWrapper
            theme={2}
            text="Patología hepática. Alteraciones focales y difusas"
            hasChildren
            locked
            day={10}
            month="Jun"
            editing={editing}
          />
          <ItemWrapper
            theme={3}
            text="Anatomía ecográfica de la vesícula y vía biliar. Normalidad y variantes morfológicas"
            hasChildren
            locked
            day={17}
            month="Jun"
            editing={editing}
          />
          <ItemWrapper
            theme={4}
            text="Patología vesícula y vías biliares: obstructiva y tumoral"
            hasChildren
            locked
            day={28}
            month="Jun"
            editing={editing}
          />
          <ItemWrapper evaluation type="star" />
        </ItemGroup>
      </ItemWrapper>
      <ItemWrapper
        module={3}
        text="Ecografía abdominal 2: riñón, vías urinarias y próstata"
        hasChildren
        locked
        day={10}
        month="Jul"
        editing={editing}
      />
      <ItemWrapper
        module={4}
        text="Ecografía abdominal 2: páncreas, bazo y tubo digestivo"
        hasChildren
        locked
        day={10}
        month="Ago"
        editing={editing}
      />
      <ItemWrapper
        module={5}
        text="Ecografía ginecológica y obstétrica para el médico de familia"
        hasChildren
        locked
        day={10}
        month="Sep"
        editing={editing}
      />
      <ItemWrapper
        module={6}
        text="Ecografía en Urgencias y Emergencias"
        hasChildren
        locked
        day={10}
        month="Oct"
        editing={editing}
      />
    </ItemGroup>
  </PanelWrapper>
);

IndexPanel.defaultProps = {
  editing: false,
};

IndexPanel.propTypes = {
  editing: PropTypes.bool,
};

export default IndexPanel;
