import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import log from 'loglevel';
import {
  EditorState, RichUtils, convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import Content from '../components/Content';
import Footer from '../components/layout/Footer';

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
      <Content />
      <Footer backRoute="#" backDisabled nextRoute="#" />
    </Container>
  );
};

export default testPage;
