import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import log from 'loglevel';
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from 'draft-js';

const Container = styled.div`
  font-size: 40px;
  font-weight: 100;
  font-family: 'AppareoMedium';
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
      {!ssr && (
        <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={onChange} />
      )}
    </Container>
  );
};

export default testPage;
