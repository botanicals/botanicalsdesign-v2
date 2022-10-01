import Link from 'next/link';

import { Section, Row, Column } from '../../components/layouts';
import MarkdownText from '../../components/utility/markdown-text';

import { Listing } from '../../pages/jobs/[location]';

interface JobPageProps {
  name: string;
  overview: string;
  positions: Listing[];
}

const JobPage: React.VFC<JobPageProps> = ({ name, overview, positions }) => {
  return (
    <>
      <Section>
        <Row>
          <Column width={100}>
            <p>
              <Link href="/">
                <a>Botanicals Design</a>
              </Link>{' '}
              &rsaquo;{' '}
              <Link href="/jobs">
                <a>Jop Openings</a>
              </Link>{' '}
              &rsaquo; {name}
            </p>
          </Column>
        </Row>
      </Section>
      <Section key={name} heading={`Botanicals ${name} Jobs`}>
        <Row>
          <Column width={100}>
            <MarkdownText>{overview}</MarkdownText>
          </Column>
        </Row>
      </Section>
      {positions.map(position => (
        <Section key={position.title} heading={position.title}>
          <Row>
            <Column width={100}>
              <MarkdownText>{position.description}</MarkdownText>
            </Column>
          </Row>
        </Section>
      ))}
    </>
  );
};

export default JobPage;
