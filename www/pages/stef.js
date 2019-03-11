import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import log from 'loglevel';
import {
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from 'draft-js';
import Wrapper from '../components/layout/Wrapper';
import Title from '../components/text/Title';
import Subtitle from '../components/text/Subtitle';
import Paragraph from '../components/text/Paragraph';
import MidFullWrapper from '../components/layout/MidFullWrapper';
import FullWrapper from '../components/layout/FullWrapper';
import Image from '../components/Image';
import Targets from '../components/resources/Targets';

const Container = styled.div`
  background-color: white;
`;

const testPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [ssr, setSsr] = useState(true);

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
        <Paragraph>
          En este capítulo se busca comprener cuál es el objetivo real de la monitorización fetal y
          cuáles son sus limitaciones.
        </Paragraph>
        <Paragraph>
          Se buscará explicar las diferentes maneras de monitorización fetal que se tienen hoy en
          día y por qué resultan útiles, las ventajas e inconvenientes de cada una de ellas, así
          como su fiabilidad de cara al diagnóstico de acidosis feltal intraparto.
        </Paragraph>
        <Paragraph>
          Se tratará de explicar la base fisiológica de la hipoxia fetal y cómo se refleja en cada
          uno de los métodos de detección que hay disponibles hoy.
        </Paragraph>
      </Targets>
      <Wrapper>
        <Paragraph>
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
        </Paragraph>
      </Wrapper>
      <MidFullWrapper align="right">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Paragraph>
      </MidFullWrapper>
      <MidFullWrapper>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Paragraph>
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
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
            finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin
            tempor tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
            Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
            vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui.
            In id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi
            fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
            finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin
            tempor tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
            Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
            vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui.
            In id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi
            fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
          </Paragraph>
        </div>
      </MidFullWrapper>
      <FullWrapper align="left">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Paragraph>
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
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Paragraph>
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
