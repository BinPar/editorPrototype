import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import Header from '../components/layout/Header';
import Content from '../components/Content';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Holder from '../components/layout/Holder';
import { maxMedia, minMedia } from '../utils/Constants';
import themes from '../utils/Themes';
import { ProgressBar } from '../components/layout/ProgressBar';


const maxTablet = maxMedia.maxTablet`
  overflow-x: hidden;
`;

const MainLayout = styled.div`
  position: relative;
  background-color: ${props => props.theme.bodyBg};
  ${maxTablet}
`;

const Wrapper = styled(Holder)`
  ${minMedia.minTablet`
    height: 100vh;
  `}
  ${maxMedia.maxMobile`
  `}
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  ${maxMedia.maxMobile`
  `}
  ${minMedia.minTablet`
    width: ${props => (props.sidebarOpen ? 'calc(100% - 350px)' : '100%')};
    transition: width 500ms ease;
    margin-top: 65px;
    height: calc(100% - 65px);
  `}
  *::selection {
    background: ${props => props.theme.selection};
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.bodyBg};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.bodyScroll};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.bodyScrollHover};
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    * {
      -ms-scrollbar-highlight-color: ${props => props.theme.bodyScrollHover};
      -ms-scrollbar-arrow-color: ${props => props.theme.bodyScroll};
      -ms-scrollbar-face-color: ${props => props.theme.bodyScroll};
    }
  }
`;

const testPage = () => {
  // Cambia a estado de edición
  const [setAuthor] = useState(false);
  const [setEditing] = useState(setAuthor);

  // Cambia el tema
  const [setTheme] = useState('dark');

  const [, setEditorState] = useState(EditorState.createEmpty());

  const [ssr, setSsr] = useState(true);
  const progressRef = React.useRef();
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

    // Cambia el tema
    <ThemeProvider theme={themes.dark}>
      <MainLayout>
        <Head>
          <title>Editor</title>
        </Head>
        <Wrapper align="start">
          <Sidebar
            editing={setEditing}
            open={sidebarOpen}
            activeTab={activeTab}
            onTabClick={onTabClick}
          />
          <ContentWrapper
            {...{ sidebarOpen }}
            onScroll={(e) => {
              const {
                target: { scrollTop, scrollHeight, clientHeight },
              } = e;
              const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
              progressRef.current.style.width = `${progress}%`;
            }}
          >
            <Header editing={setEditing} author={setAuthor} open={sidebarOpen} />
            <ProgressBar open={sidebarOpen} ref={progressRef} />
            <Content editing={setEditing} open={sidebarOpen} activeTheme={setTheme} />
            <Footer backRoute="#" backDisabled nextRoute="#" />
          </ContentWrapper>
        </Wrapper>
      </MainLayout>
    </ThemeProvider>
  );
};

export default testPage;
