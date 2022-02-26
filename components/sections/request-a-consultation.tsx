import { Row, Column, Section } from '../layouts';

import ConsultationForm from '../forms/consultation-form';

interface RequestAConsultationProps {
  data: {
    type: 'requestAConsultation';
    image: {
      source: string;
      alt: string;
      caption?: string;
    };
  };
}

const RequestAConsulation: React.FC<RequestAConsultationProps> = ({ data }) => {
  return (
    <Section>
      <Row>
        <Column width={50}>
          <figure>
            <img src={data.image.source} alt={data.image.alt} />
          </figure>
        </Column>
        <Column width={50}>
          <ConsultationForm />
        </Column>
      </Row>
    </Section>
  );
};

export default RequestAConsulation;
