import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import log from 'loglevel';
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from 'draft-js';
import * as Constants from '../utils/Constants';
import Wrapper from '../components/layout/Wrapper';
import Title from '../components/text/Title';
import Subtitle from '../components/text/Subtitle';
import Parragraph from '../components/text/Parragraph';
import MidFullWrapper from '../components/layout/MidFullWrapper';
import FullWrapper from '../components/layout/FullWrapper';
import ImageFooter from '../components/text/ImageFooter';
import Link from '../components/text/Link';
import Image from '../components/Image';
import Holder from '../components/layout/Holder';
import Targets from '../components/resources/Targets';

const Container = styled.div`
  background-color: white;
`;

function handleKeyCommand(command, editorState) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return 'handled';
  }
  return 'not-handled';
}

const testPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [ssr, setSsr] = useState(true);

  const onChange = (state) => {
    setEditorState(state);
    const currentState = convertToRaw(state.getCurrentContent());
    log.debug(currentState);
  };

  useEffect(() => {
    if (ssr) {
      setSsr(false);
      const sampleMarkup = '<b>Bold text</b>, <i>Italic text</i><br/ ><br />';
      const blocksFromHTML = convertFromHTML(sampleMarkup);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      setEditorState(EditorState.createWithContent(state));
    }
  });

  return (
    <Container>
      <Head>
        <title>Editor</title>
      </Head>
      <Wrapper>
        <Title>Fundamentos y Objetivos de la Monitorizacón Fetal Intraparto</Title>
      </Wrapper>
      <Targets>
        <Parragraph>
          En este capítulo se busca comprener cuál es el objetivo real de la monitorización fetal y
          cuáles son sus limitaciones.
        </Parragraph>
        <Parragraph>
          Se buscará explicar las diferentes maneras de monitorización fetal que se tienen hoy en
          día y por qué resultan útiles, las ventajas e inconvenientes de cada una de ellas, así
          como su fiabilidad de cara al diagnóstico de acidosis feltal intraparto.
        </Parragraph>
        <Parragraph>
          Se tratará de explicar la base fisiológica de la hipoxia fetal y cómo se refleja en cada
          uno de los métodos de detección que hay disponibles hoy.
        </Parragraph>
      </Targets>
      <Wrapper>
        <Parragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit.
          {' '}
          <i>Morbi commodo tellus dolor, et faucibus felis</i>
          {' '}
iaculis at. Proin
          tempor tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est.
          {' '}
          <strong>In sagittis pretium metus id ullamcorper.</strong>
          {' '}
Sed tempus tellus
          vitae mi fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Parragraph>
      </Wrapper>
      <MidFullWrapper align="right">
        <Parragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Parragraph>
      </MidFullWrapper>
      <MidFullWrapper>
        <Parragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Parragraph>
      </MidFullWrapper>
      <MidFullWrapper align="left">
        <Image
          alt=""
          source="/static/img/small1.png"
          footerText="Footer text"
          footerLink="Footer Link"
          footerLinkRoute="#"
        />
        <div>
          <Parragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
            finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin
            tempor tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
            Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
            vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui.
            In id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi
            fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
          </Parragraph>
          <Parragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
            finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin
            tempor tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
            Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
            vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui.
            In id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi
            fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
          </Parragraph>
        </div>
      </MidFullWrapper>
      <FullWrapper align="left">
        <Parragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Parragraph>
      </FullWrapper>
      <MidFullWrapper>
        <Image
          alt=""
          source="/static/img/large1.png"
          size="full"
          footerText="Footer text"
          footerLink="Footer Link"
          footerLinkRoute="#"
        />
      </MidFullWrapper>
      <Wrapper>
        <Subtitle right>Subtitle</Subtitle>
      </Wrapper>
      <FullWrapper align="right">
        <Parragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Parragraph>
      </FullWrapper>
      <FullWrapper>
        <Image
          alt=""
          source="/static/img/video1.png"
          size="full"
          footerText="Footer text"
          footerLink="Footer Link"
          footerLinkRoute="#"
        />
      </FullWrapper>
    </Container>
  );
};

export default testPage;
