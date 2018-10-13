import Page from '../../components/docs/page';
import Header from '../../components/docs/header';
import Navbar from '../../components/docs/navbar';
import Container from '../../components/docs/container';
import { MediaQueryConsumer } from '../../components/docs/media-query';
import withPure from '../../components/docs/hoc/pure';

import Markdown, { headings } from '../../components/docs/docs/docs.mdx';
import Documentation, { components } from '../../components/docs/docs/documentation';

const Content = withPure(() => <Markdown components={components} />);

export default () => (
  <Page>
    {/* <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={64 + (isMobile ? 32 : 0)}
          shadow={!isMobile}
          defaultActive
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer> */}
    <Container>
      <Documentation headings={headings}>
        <Content />
      </Documentation>
    </Container>
  </Page>
);
