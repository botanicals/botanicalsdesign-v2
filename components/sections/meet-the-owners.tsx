import { Section, Row, Column } from '../layouts';

interface MeetTheOwnersProps {
  data: {
    type: 'meetTheOwners';
    heading: string;
    owners: { name: string; photo: string }[];
  };
}

const MeetTheOwners: React.FC<MeetTheOwnersProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        {data.owners.map((owner, index) => (
          <Column key={index} width={33}>
            <h3 className="heading heading__h3 heading__h3--green">{owner.name}</h3>
            <figure>
              <img src={owner.photo} alt={`Portrait of Botanicals owner ${owner.name}`} />
            </figure>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export default MeetTheOwners;
