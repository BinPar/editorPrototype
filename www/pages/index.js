import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import log from 'loglevel';
import styled from 'styled-components';
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from 'draft-js';
import Container from '../components/container';

const RedContainer = styled(Container)`
  color: red;
  font-size: ${props => 20 + props.size * 2}px;
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
  const [size, setSize] = useState(10);

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

  function increaseSize() {
    setSize(size + 1);
  }
  return (
    <RedContainer size={size}>
      <button
        type="button"
        onClick={increaseSize}
      >
        Aumentar
      </button>
      <Head>
        <title>Editor de ejemplo</title>
      </Head>
      {!ssr && (
        <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={onChange} />
      )}
    </RedContainer>
  );
};

export default testPage;
