import { Section, Row, Column } from '../layouts';

interface PlantscapeMaintenanceProps {
  data: {
    type: 'plantscapeMaintenance';
    heading: string;
  };
}

const PlantscapeMaintenance: React.FC<PlantscapeMaintenanceProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      {/* TRAINING */}
      <Row>
        <Column width={50}>
          <div className="technician-div">
            <img src="/assets/icons/maintenance/trained.png" alt="trained technicians" className="maintenance-process-icon" />
            <h1 className="heading heading__h1 maintenance-process-heading">Professionally Trained Technicians</h1>
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-orange">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/maintenance/book.png" alt="book" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Rigorous Training</h3>
                <p className="paragraph--white">
                  Botanicals’ technicians become experts in the care and maintenance of interior plants. Our program includes collegiate-level botany courses, hands-on training, and ongoing
                  collaboration with other technicians in the field.
                </p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/maintenance/bestpractice.png" alt="graph" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Progressive Practices</h3>

                <p className="paragraph--white">
                  Botanicals is continually pursuing new ways of creating efficiencies and tools for our technician’s implementation. We create a standard of best practices that raises the bar of
                  expectation.
                </p>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>

      {/* QUALITY */}
      <Row>
        <Column width={50}>
          <div className="quality-div">
            <img src="/assets/icons/maintenance/trained.png" alt="quality control" className="maintenance-process-icon" />
            <h1 className="heading heading__h1 maintenance-process-heading">Quality Control</h1>
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-green-orange">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/maintenance/inspection.png" alt="inspection" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">52-Point Inspection</h3>
                <p className="paragraph--white">
                  At Botanicals we recognize that if our plants don’t look good, you don’t look good. We ensure not only the life, but the beauty of your plantscape. This means a 52- point Q.C.
                  checklist for our technicians, regular visits by our service manager and a focus on the details of each plant in our care.
                </p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/maintenance/calendar.png" alt="calendar" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Regular Inspections</h3>

                <p className="paragraph--white">We perform regular inspections by our quality control manager to maintain and keep up the appearance of your plantscape.</p>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>

      {/* REPLACEMENT */}
      <Row>
        <Column width={50}>
          <div className="replacement-div">
            <img src="/assets/icons/maintenance/replacement.png" alt="plant replacement" className="maintenance-process-icon" />
            <h1 className="heading heading__h1 maintenance-process-heading">Plant Replacement</h1>
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-green">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/maintenance/plant-pot.png" alt="plant-pot" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">The Botanicals Guarantee</h3>
                <p className="paragraph--white">
                  If a plant declines in health or appearance, we guarantee a speedy replacement at no additional charge. Botanicals ensures a hassle-free experience and your complete satisfaction.
                </p>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
      <div style={{ fontSize: '10px', textTransform: 'uppercase' }}>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/simpleicon" rel="noopener noreferrer" target="_blank">
          SimpleIcon
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" rel="noopener noreferrer" target="_blank">
          www.flaticon.com
        </a>{' '}
        and is licensed by{' '}
        <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">
          CC 3.0 BY
        </a>
      </div>
    </Section>
  );
};

export default PlantscapeMaintenance;
