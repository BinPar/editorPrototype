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
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';

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
        <title>Editor de ejemplo</title>
      </Head>
      <Wrapper>
        <Title>I'm a title</Title>
      </Wrapper>
      <Subtitle right>Subtitle</Subtitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor finibus
        hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor tristique
        enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque. Phasellus ac neque
        vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem, vitae egestas enim
        lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In id est est. In
        sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla dignissim. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
        vestibulum imperdiet odio ut ultricies.
      </Text>
    </Container>
  );
};

export default testPage;
