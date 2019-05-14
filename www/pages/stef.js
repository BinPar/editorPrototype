import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import Header from '../components/layout/Header';
import Content from '../components/Content';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Holder from '../components/layout/Holder';
import { maxMedia, minMedia } from '../utils/Constants';

const maxTablet = maxMedia.maxTablet`
  overflow-x: hidden;
`;

const MainLayout = styled.div`
  position: relative;
  background-color: white;
  ${maxTablet}
`;

const Wrapper = styled(Holder)`
  height: 100vh;
  ${maxMedia.maxMobile`
    padding-top: 125px;
  `}
`;

const ContentWrapper = styled.div`
  width: ${props => (props.sidebarOpen ? 'calc(100% - 350px)' : '100%')};
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 500ms ease;
  ${maxMedia.maxMobile`
    height: 100%;
  `}
  ${minMedia.minTablet`
    margin-top: 65px;
    height: calc(100% - 65px);
  `}
`;

const testPage = () => {
  const [, setEditorState] = useState(EditorState.createEmpty());

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
  const [activeTab, setActiveTab] = useState(null);
  const onTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };
  const sidebarOpen = !!activeTab;
  return (
    <MainLayout>
      <Head>
        <title>Editor</title>
      </Head>
      <Wrapper align="start">
        <Sidebar open={sidebarOpen} activeTab={activeTab} onTabClick={onTabClick} />
        <ContentWrapper {...{ sidebarOpen }}>
          <Header open={sidebarOpen} />
          <Content open={sidebarOpen} />
          <Footer backRoute="#" backDisabled nextRoute="#" />
        </ContentWrapper>
      </Wrapper>
    </MainLayout>
  );
};

export default testPage;
