import React from 'react';
import styled from 'styled-components';
import Wrapper from './content/layout/Wrapper';
import WrapperAlignedContent from './content/layout/WrapperAlignedContent';
import MidFullWrapper from './content/layout/MidFullWrapper';
import FullWrapper from './content/layout/FullWrapper';
import Title from './content/text/Title';
import Subtitle from './content/text/Subtitle';
import Paragraph from './content/text/Paragraph';
import Image from './content/resources/Image';
import Quote from './content/resources/Quote';
import Block from './content/resources/Block';
import { Targets, TargetItem } from './content/resources/Targets';
import { Conclusions, ConclusionItem } from './content/resources/Conclusions';
import { BulletList, ListItem, OrderedList } from './content/text/List';
import { colors, minMedia, icon } from '../utils/Constants';
import {
  Table, Header, Row, CellHeader, Text, Body, Cell,
} from './content/resources/Table';
import Link from './content/text/Link';
import Tooltip from './basics/Tooltip';
import TooltipButton from './basics/TooltipButton';

const minDesk = minMedia.minDesk`
  margin-bottom: 200px;
`;

const Ejercicio = styled.iframe`
  border: none;
  height: 830px;
  width: 100%;
`;
const ContentWrapper = styled.section`
  margin-top: 80px;
  padding: 0 0 70px;
  box-shadow: 0px 12px 20px -7px rgba(0, 0, 0, 0.2);
  background: ${colors.white};
  ${minDesk}
`;

const Content = () => (
  <ContentWrapper>
    <Tooltip>
      <TooltipButton name={icon.bold} />
      <TooltipButton name={icon.italic} />
    </Tooltip>
    <Wrapper>
      <Paragraph>Autor</Paragraph>
      <Title>Fundamentos y Objetivos de la Monitorización Fetal Intraparto</Title>
    </Wrapper>
    <Targets>
      <TargetItem>
        En este capítulo se busca comprender cuál es el objetivo real de la monitorización fetal y
        cuáles son sus limitaciones.
      </TargetItem>
      <TargetItem>
        Se buscará explicar las diferentes maneras de monitorización fetal que se tienen hoy en día
        y por qué resultan útiles, las ventajas e inconvenientes de cada una de ellas, así como su
        fiabilidad de cara al diagnóstico de acidosis feltal intraparto.
      </TargetItem>
      <TargetItem>
        Se tratará de explicar la base fisiológica de la hipoxia fetal y cómo se refleja en cada uno
        de los métodos de detección que hay disponibles hoy.
      </TargetItem>
    </Targets>
    <Wrapper>
      <Subtitle>Historia de la Monitorización Fetal</Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor finibus
        hendrerit.
        {' '}
        <i>Morbi commodo tellus dolor, et faucibus felis</i>
        {' '}
iaculis at. Proin tempor
        tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque. Phasellus
        ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem, vitae egestas
        enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In id est est.
        {' '}
        <strong>In sagittis pretium metus id ullamcorper.</strong>
        {' '}
Sed tempus tellus vitae mi
        fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
      </Paragraph>
      <Paragraph>
        Ut ultricies gravida est, id vestibulum lacus consectetur ut. Phasellus enim turpis,
        malesuada at mollis quis, lacinia quis metus. In ut vestibulum orci. Quisque sodales tellus
        quis lacus luctus pretium. Morbi eget metus vitae quam iaculis venenatis. Integer ut commodo
        turpis, id suscipit orci. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer mollis magna eu nibh auctor, nec varius lorem
        bibendum. In purus odio, posuere et hendrerit at, vulputate sed nulla. Nulla ut magna
        libero. Cras at felis dui.
      </Paragraph>
      <Paragraph>
        Ut placerat justo et condimentum molestie. Nulla facilisi. Integer semper ac sem auctor
        hendrerit. Aliquam erat volutpat. Suspendisse ut nisi eu nisi sollicitudin feugiat et
        malesuada erat. Nullam enim ante, sodales ac odio sit amet, euismod consectetur erat.
        Aliquam auctor non mi quis interdum. Vestibulum quam felis, tempor a tristique eget,
        volutpat sit amet risus.
      </Paragraph>
    </Wrapper>
    <MidFullWrapper align="left">
      <Image
        float
        alt=""
        source="/static/img/small1.png"
        footerText="Footer text"
        footerLink="Footer Link"
        footerLinkRoute="#"
      />
      <WrapperAlignedContent>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula,
          {' '}
          <Link href="#test">euismod mi at</Link>
,
          mattis neque. Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper
          gravida lorem, vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel,
          bibendum dui. In id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus
          vitae mi fringilla dignissim. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies.
        </Paragraph>
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
      </WrapperAlignedContent>
    </MidFullWrapper>
    <Wrapper>
      <Quote size="full">
        Ut placerat justo et condimentum molestie. Nulla facilisi. Integer semper ac sem auctor
        hendrerit. Aliquam erat volutpat. Suspendisse ut nisi eu nisi sollicitudin feugiat et
        malesuada erat. Nullam enim ante, sodales ac odio sit amet, euismod consectetur erat.
        Aliquam auctor non mi quis interdum. Vestibulum quam felis, tempor a tristique eget,
        volutpat sit amet risus.
      </Quote>
      <Paragraph>
        Aliquam erat volutpat. Ut sollicitudin sapien sed suscipit finibus. Cras eget eros eget
        velit faucibus convallis non non diam. Pellentesque molestie metus erat, quis dictum leo
        aliquet sit amet. Praesent ac tempor sem. Curabitur facilisis in purus at consequat.
        Curabitur mollis mi a lacus sodales dictum. Praesent eu est massa. Curabitur ornare ut dolor
        sed vestibulum. Nam ut hendrerit nulla. Cras rutrum eleifend tincidunt. Aenean mauris
        turpis, tristique eget sem vel, euismod malesuada tellus. Morbi sapien ligula, semper quis
        ante et, aliquam tincidunt neque.
      </Paragraph>
    </Wrapper>
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
      <Paragraph>
        Sed nulla sapien, facilisis posuere molestie non, vulputate sit amet orci. Phasellus sodales
        sagittis ipsum, eu eleifend augue imperdiet vel. Pellentesque dapibus odio est. Donec lectus
        est, luctus imperdiet enim eget, tempor lacinia urna. Quisque non iaculis nunc, sit amet
        gravida mauris. Vestibulum pellentesque lobortis mollis. Integer id vulputate elit. Proin
        leo elit, venenatis non ornare nec, tincidunt ac libero. Nam eleifend mattis lorem, at
        sollicitudin lorem mollis dapibus. Aliquam congue euismod ipsum sed dapibus.
      </Paragraph>
      <Paragraph>
        Donec non libero eu nisi porta lobortis. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Nunc sapien purus, tincidunt ut dui sit amet,
        efficitur semper diam. Cras accumsan libero eu condimentum porttitor. Etiam in quam at felis
        fringilla accumsan. Phasellus ac cursus ipsum. Proin bibendum, arcu non vehicula interdum,
        risus quam venenatis purus, ac pharetra est massa vitae sem. Praesent ac mi tellus. Sed id
        lorem rutrum, placerat odio in, posuere dui.
      </Paragraph>
    </Wrapper>
    <MidFullWrapper align="right">
      <Quote mid size="full">
        Ut placerat justo ed te lorem sit amo et condimentum molestie. Nulla facilisi. Integer
        semper ac sem auctor hendrerit. Aliquam erat volutpat. Lorem dolor sit amet.
      </Quote>
    </MidFullWrapper>
    <Wrapper>
      <Subtitle>Situación actual de la Monitorización Fetal</Subtitle>
      <Paragraph>
        Nulla facilisi. Nunc erat tortor, ultrices ac faucibus eu, auctor eu augue. Sed bibendum
        sodales semper. Cras volutpat ipsum tempor nisi lacinia imperdiet. Sed aliquam quam nec leo
        imperdiet, vel fringilla diam faucibus. Mauris fermentum nulla sit amet ex vehicula, sed
        pharetra elit finibus. Mauris dapibus sodales tortor, vel rhoncus mi suscipit sit amet.
        Suspendisse scelerisque odio suscipit, commodo turpis vitae, convallis nisl. Vivamus neque
        massa, lacinia in consectetur non, maximus non odio. Curabitur in gravida leo. Nulla
        scelerisque, nunc auctor egestas porttitor, sem nunc fringilla orci, quis ultrices mi lectus
        vel purus. In hac habitasse platea dictumst. Mauris ante sapien, dictum in pellentesque in,
        interdum quis nisi.
      </Paragraph>
      <BulletList>
        <ListItem>
          Quisque dignissim leo nec mi posuere, et venenatis nisi posuere. Etiam eros lacus,
          tincidunt eu vulputate sit amet, fermentum sit amet nisl.
        </ListItem>
        <ListItem>
          Quisque dignissim leo nec mi posuere, et venenatis nisi posuere. Etiam eros lacus,
          tincidunt eu vulputate sit amet, fermentum sit amet nisl.
        </ListItem>
        <ListItem>
          Quisque dignissim leo nec mi posuere, et venenatis nisi posuere. Etiam eros lacus,
          tincidunt eu vulputate sit amet, fermentum sit amet nisl.
        </ListItem>
      </BulletList>
    </Wrapper>
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
    <Wrapper>
      <Subtitle>Fisiopatología de la Respuesta Fetal</Subtitle>
      <Paragraph>
        Donec consequat non quam eu mollis. Mauris laoreet dignissim molestie. Sed vel ligula vitae
        turpis tempor finibus at in ipsum. Ut sollicitudin lorem lorem, eu finibus velit placerat
        eu. Pellentesque maximus cursus eros. Pellentesque sagittis dolor ut felis vestibulum
        interdum. Maecenas non dictum velit, eget vehicula sem. Cras faucibus magna ac sem efficitur
        sagittis. Nunc pulvinar augue neque, sed lobortis nisl maximus a. Phasellus volutpat nibh et
        vulputate dapibus. Aliquam erat volutpat. Quisque nec ornare arcu, eu placerat nisl. Morbi a
        leo ornare, dignissim nisi a, commodo diam. Maecenas elementum faucibus risus, ut vehicula
        enim ultricies vitae.
      </Paragraph>
      <Paragraph>
        Etiam mattis magna id congue vulputate. Vestibulum facilisis pellentesque purus, id finibus
        turpis. Maecenas sed enim congue, tincidunt nunc nec, laoreet sapien. Duis egestas ornare
        elit, ac mollis enim faucibus id. Aenean turpis odio, volutpat ornare cursus eget, malesuada
        at eros. Integer vehicula malesuada tellus, ac pellentesque turpis. Sed vehicula vel libero
        in placerat.
      </Paragraph>
    </Wrapper>
    <MidFullWrapper>
      <Block>
        Aliquam erat volutpat. Ut sollicitudin sapien sed suscipit finibus. Cras eget eros eget
        velit faucibus convallis non non diam. Pellentesque molestie metus erat, quis dictum leo
        aliquet sit amet. Praesent ac tempor sem.
      </Block>
    </MidFullWrapper>
    <Wrapper>
      <Paragraph>
        Vestibulum imperdiet ligula ac pellentesque venenatis. Vivamus ornare nibh ut nisl volutpat
        placerat. Nam suscipit dui et pretium consequat. Sed eget turpis a ipsum commodo convallis.
        Duis tempus luctus ornare. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nunc ornare lacus et nisl commodo euismod. Sed id tempor urna.
        Integer luctus, arcu et dictum consectetur, nisi enim luctus felis, in elementum justo velit
        et mauris.
      </Paragraph>
      <Paragraph>Sed commodo suscipit enim, vel hendrerit velit rhoncus:</Paragraph>
      <OrderedList>
        <ListItem type="letter">
          Sed id tempor urna. Integer luctus, arcu et dictum consectetur, nisi enim luctus felis, in
          elementum justo velit et mauris. Sed commodo suscipit enim, vel hendrerit velit rhoncus
        </ListItem>
        <ListItem type="letter">
          Etiam mattis magna id congue vulputate. Vestibulum facilisis pellentesque purus, id
          finibus turpis
        </ListItem>
        <ListItem type="letter">
          Maecenas non dictum velit, eget vehicula sem. Cras faucibus magna ac sem efficitur
          sagittis. Nunc pulvinar augue neque, sed lobortis nisl maximus a. Phasellus volutpat nibh
          et vulputate dapibus. Aliquam erat volutpat. Quisque nec ornare arcu, eu placerat nisl.
          Morbi a leo ornare, dignissim nisi a, commodo diam. Maecenas elementum faucibus risus, ut
          vehicula enim ultricies vitae.
        </ListItem>
      </OrderedList>
    </Wrapper>
    <MidFullWrapper align="right" position="block">
      <Image
        alt=""
        right
        float
        source="/static/img/small2.png"
        footerText="Footer text"
        footerLink="Footer Link"
        footerLinkRoute="#"
      />
      <WrapperAlignedContent>
        <Paragraph>
          Aliquam erat volutpat. Ut sollicitudin sapien sed suscipit finibus. Cras eget eros eget
          velit faucibus convallis non non diamet nect. Pellentesque molestie metus erat, quis
          dictum leo aliquet sit amet. Praesent ac tempor sem. Curabitur facilisis in purus at
          consequat. Curabitur mollis mi a lacus sodales dictum. Praesent eu est massa. Curabitur
          ornare ut dolor sed vestibulum. Nam ut hendrerit nulla. Cras rutrum eleifend tincidunt.
          Aenean mauris turpis, tristique eget sem vel, euismod malesuada tellus. Morbi sapien
          lobortis magna ut dolori ligula, semper quis ante et, aliquam tincidunt neque. Vestibulum
          ut sagittis eros. Donec tristique odio libero, et venenatis libero laoreet sed. Nunc
          suscipit risus a scelerisque malesuada. Suspendisse mattis, velit nec gravida accumsan,
          lacus neque ornare est, pulvinar rhoncus tellus nunc id dolor. Vivamus condimentum, massa
          at bibendum consequat, erat odio hendrerit nibh, in lobortis nunc magna commodo ligula. Ut
          malesuada ultricies ullamcorper. Mauris vitae erat tortor. Duis id quam pulvinar, pretium
          nulla eu, sagittis libero. Maecenas sed dictum eros, sed feugiat erat. Aliquam consequat
          pretium metus, ut sollicitudin mauris placerat ac. Ut vel augue rhoncus, tempor ante non,
          tristique nunc. Nulla ornare aliquam mi scelerisque malesuada. Nulla facilisi. Proin eu
          felis non sem rhoncus iaculis.
        </Paragraph>
      </WrapperAlignedContent>
    </MidFullWrapper>
    <MidFullWrapper>
      <Ejercicio src="https://aula.campuspanamericana.com/_Cursos/Curso01171/Temario/EVA_Actividades_independientes/A1/story_html5.html" />
    </MidFullWrapper>
    <Wrapper>
      <Subtitle>Definición y clasificación de las muertes prenatales</Subtitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor finibus
        hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor tristique
        enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque. Phasellus ac neque
        vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem, vitae egestas enim
        lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In id est est. In
        sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla dignissim. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
        vestibulum imperdiet odio ut ultricies.
      </Paragraph>
    </Wrapper>
    <MidFullWrapper align="right">
      <Block type="info">
        Aliquam erat volutpat. Ut sollicitudin sapien sed suscipit finibus. Cras eget eros eget
        velit faucibus convallis non non diam. Pellentesque molestie metus erat, quis dictum leo
        aliquet sit amet. Praesent ac tempor sem.
      </Block>
    </MidFullWrapper>
    <Wrapper>
      <Table>
        <Header>
          <Row>
            <CellHeader colSpan="4">
              <Text type="header">Tabla 1.2-1 | Definiciones de las Tasas de Mortalidad</Text>
            </CellHeader>
          </Row>
        </Header>
        <Body>
          <Row>
            <Cell type="highlight">
              <Text type="highlight">Indicador</Text>
            </Cell>
            <Cell type="highlight" colSpan="2">
              <Text type="highlight">Numerador</Text>
            </Cell>
            <Cell type="highlight">
              <Text type="highlight">Denominador</Text>
            </Cell>
          </Row>
          <Row>
            <Cell type="highlight">
              <Text type="highlight">Tasa de Mortalidad prenatal</Text>
            </Cell>
            <Cell colSpan="2">
              <Text>
                Quisque dignissim leo nec mi posuere, et venenatis nisi posuere. Etiam eros lacus,
                tincidunt eu vulputate sit amet, fermentum sit amet nisl. Sed euismod quis velit vel
                efficitur. Fusce vehicula, quam vel euismod luctus, ante ipsum lobortis nibh, non
                luctus lorem nisi dignissim purus.
              </Text>
            </Cell>
            <Cell>
              <Text>Quisque dignissim leo nec mi posuere, et venenatis nisi posuere.</Text>
            </Cell>
          </Row>
          <Row>
            <Cell type="highlight">
              <Text type="highlight">Tasa de Mortalidad neonatal</Text>
            </Cell>
            <Cell colSpan="2">
              <Text>
                Dignissim leo nec mi posuere, et venenatis nisi posuere. Etiam eros lacus, tincidunt
                eu vulputate sit amet.
              </Text>
            </Cell>
            <Cell>
              <Text>Quisque dignissim leo nec</Text>
            </Cell>
          </Row>
          <Row>
            <Cell type="highlight">
              <Text type="highlight">Tasa de Mortalidad perinatal</Text>
            </Cell>
            <Cell colSpan="2">
              <Text>Quisque dignissim leo:</Text>
              <BulletList>
                <ListItem table>
                  Sed euismod quis velit vel efficitur. Fusce vehicula, quam vel euismod luctus,
                  ante ipsum lobortis nibh, non luctus lorem nisi dignissim purus.
                </ListItem>
                <ListItem table>
                  Sed euismod quis velit vel efficitur. Fusce vehicula, quam vel euismod
                </ListItem>
                <ListItem table>
                  Fusce vehicula, quam vel euismod luctus, ante ipsum lobortis nibh, non luctus
                  lorem nisi dignissim purus.
                </ListItem>
              </BulletList>
            </Cell>
            <Cell>
              <Text>Quisque dignissim leo nec mi posuere, et venenatis nisi posuere.</Text>
            </Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <MidFullWrapper align="left" position="block">
      <Quote circle float large>
        Aliquam erat volutpat. Ut sollicitudin sapien
      </Quote>
      <WrapperAlignedContent alignment="right">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non ante sed dolor
          finibus hendrerit. Morbi commodo tellus dolor, et faucibus felis iaculis at. Proin tempor
          tristique enim non aliquam. Donec at justo vehicula, euismod mi at, mattis neque.
          Phasellus ac neque vitae risus euismod vehicula nec id lectus. Ut semper gravida lorem,
          vitae egestas enim lacinia a. Nunc non leo lobortis, tristique neque vel, bibendum dui. In
          id est est. In sagittis pretium metus id ullamcorper. Sed tempus tellus vitae mi fringilla
          dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vestibulum vestibulum imperdiet odio ut ultricies. Aliquam erat volutpat.
          Ut sollicitudin sapien sed suscipit finibus. Cras eget eros eget velit faucibus convallis
          non non diam. Pellentesque molestie metus erat, quis dictum leo aliquet sit amet. Praesent
          ac tempor sem. Curabitur facilisis in purus at consequat. Curabitur mollis mi a lacus
          sodales dictum. Praesent eu est massa. Curabitur ornare ut dolor sed vestibulum. Nam ut
          hendrerit nulla. Cras rutrum eleifend tincidunt. Aenean mauris turpis, tristique eget sem
          vel, euismod malesuada tellus. Morbi sapien ligula, semper quis ante et, aliquam tincidunt
          neque. Vestibulum ut sagittis eros. Donec tristique odio libero, et venenatis libero
          laoreet sed. Nunc suscipit risus a scelerisque malesuada. Suspendisse mattis, velit nec
          gravida accumsan, lacus neque ornare est, pulvinar rhoncus tellus nunc id dolor. Vivamus
          condimentum, massa at bibendum consequat, erat odio hendrerit nibh, in lobortis nunc magna
          commodo ligula. Ut malesuada ultricies dea ullamcorper. Mauris vitae erat tortor. Duis id
          quam pulvinar, pretium nulla eu, sagittis libero. Maecenas sed dictum eros, sed feugiat
          erat. Aliquam consequat pretium metus, ut sollicitudin mauris placerat ac. Ut vel augue
          rhoncus, tempor ante non, tristique nunc. Nulla ornare aliquam mi scelerisque malesuada.
          Nulla facilisi. Proin eu felis non sem rhoncus iaculis. ivamus condimentum, massa at
          bibendum consequat, erat odio hendrerit nibh, in lobortis nunc magna commodo ligula.
        </Paragraph>
      </WrapperAlignedContent>
    </MidFullWrapper>
    <Conclusions>
      <ConclusionItem>
        Nulla facilisi. Nunc erat tortor, ultrices ac faucibus eu, auctor eu augue. Sed bibendum
        sodales semper. Cras volutpat ipsum.
      </ConclusionItem>
      <ConclusionItem>
        Mauris fermentum nulla sit amet ex vehicula, sed pharetra elit finibus. Mauris dapibus
        sodales tortor, vel rhoncus mi suscipit sit amet. Suspendisse scelerisque odio suscipit,
        commodo turpis vitae, convallis nisl lorem.
      </ConclusionItem>
      <ConclusionItem>
        Donec consequat non quam eu mollis. Mauris laoreet dignissim molestie. Sed vel ligula vitae
        turpis tempor finibus at in ipsum.
      </ConclusionItem>
    </Conclusions>
    <Wrapper>
      <Subtitle>Bibliografía</Subtitle>
      <OrderedList>
        <ListItem type="number">
          Quisque dignissim leo nec mi posuere, et venenatis nisi posuere. Etiam eros lacus,
          tincidunt eu vulputate sit amet, fermentum sit amet nisl.
        </ListItem>
        <ListItem type="number">
          Nulla facilisi. Nunc erat tortor, ultrices ac faucibus eu, auctor eu augue et de. Sed
          bibendum sodales semper. Cras volutpat ipsum tempor nisi lacinia imperdiet.
        </ListItem>
        <ListItem type="number">
          Sed aliquam quam nec leo imperdiet, vel fringilla diam faucibus. Mauris fermentum nulla
          sit amet ex vehicula, sed pharetra elit finibus. Mauris dapibus sodales tortor, vel
          rhoncus mi suscipit sit amet. Suspendisse scelerisque odio suscipit, commodo turpis vitae,
          convallis nisl.
        </ListItem>
        <ListItem type="number">
          Donec consequat non quam eu mollis. Mauris laoreet dignissim molestie. Sed vel ligula
          vitae turpis tempor finibus at in ipsum. Ut sollicitudin lorem lorem, eu finibus velit
          placerat eu.
        </ListItem>
        <ListItem type="number">
          Maecenas non dictum velit, eget vehicula sem. Cras faucibus magna ac sem efficitur
          sagittis. Nunc pulvinar augue neque, sed lobortis nisl maximus a. Phasellus volutpat nibh
          et vulputate dapibus.
        </ListItem>
        <ListItem type="number">
          Etiam mattis magna id congue vulputate. Vestibulum facilisis pellentesque purus, id
          finibus turpis. Maecenas sed enim congue, tincidunt nunc nec, laoreet sapien. Duis egestas
          ornare elit, ac mollis enim faucibus id. Aenean turpis odio, volutpat ornare cursus eget,
          malesuada at eros. Integer vehicula malesuada tellus, ac pellentesque turpis. Sed vehicula
          vel libero in placerat.
        </ListItem>
        <ListItem type="number">
          Mauris fermentum nulla sit amet ex vehicula, sed pharetra elit finibus.
        </ListItem>
      </OrderedList>
    </Wrapper>
  </ContentWrapper>
);

Content.propTypes = {};

export default Content;
