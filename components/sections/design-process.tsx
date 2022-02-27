import { Section, Row, Column } from '../layouts';

interface DesignProcessProps {
  data: {
    type: 'designProcess';
    heading: string;
  };
}

const DesignProcess: React.FC<DesignProcessProps> = ({ data }) => {
  return (
    <Section heading={data.heading}>
      <Row>
        <Column width={25}>
          <div className="background-color-orange centered">
            <img src="/assets/icons/design/discovery.png" alt="discovery" />
          </div>
        </Column>
        <Column width={25}>
          <div className="background-color-orange-green centered">
            <img src="/assets/icons/design/design.png" alt="design" />
          </div>
        </Column>
        <Column width={25}>
          <div className="background-color-green-orange centered">
            <img src="/assets/icons/design/install.png" alt="install" />
          </div>
        </Column>
        <Column width={25}>
          <div className="background-color-green centered">
            {' '}
            <img src="/assets/icons/design/maintain.png" alt="maintain" />
          </div>
        </Column>
      </Row>

      {/* DISCOVERY */}
      <Row>
        <Column width={50}>
          <div className="discovery-div">
            <img src="/assets/icons/design/discovery.png" alt="discovery" />
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-orange">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/objective.png" alt="objective" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Objective Review</h3>
                <p className="paragraph--white">Our initial consultation is always free and allows us the opportunity to understand the scope of the project and needs of our client.</p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/compass.png" alt="compass" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Spatial Analysis</h3>
                <p className="paragraph--white">
                  Each space we enhance takes into consideration the environmental aspects of light, traffic patterns, air flow, and the scale, patterns, textures of the overall ambience.
                </p>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>

      {/* DESIGN */}
      <Row>
        <Column width={50}>
          <div className="design-div">
            <img src="/assets/icons/design/design.png" alt="design" />
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-orange-green">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/palette.png" alt="palette" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Design Concepting</h3>
                <p className="paragraph--white">We make recommendations and show you the containers and plant choices best suited to your needs and goals.</p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/thumb.png" alt="thumb" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Plan Review</h3>
                <p className="paragraph--white">We collaborate with you to solidify the direction of the process and make any changes necessary.</p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/dollar.png" alt="dollar" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Budget</h3>
                <p className="paragraph--white">We carefully walk you through the budget and make sure all your questions are answered.</p>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>

      {/* INSTALL */}
      <Row>
        <Column width={50}>
          <div className="install-div">
            <img src="/assets/icons/design/install.png" alt="install" />
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-green-orange">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/calendar.png" alt="calendar" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Scheduling</h3>
                <p className="paragraph--white">We schedule our installations to be efficient and as unobtrusive as possible to your work flow or home life.</p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/thumb.png" alt="thumb" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Install</h3>
                <p className="paragraph--white">On your installation day our experts transport and place your new plantscape.</p>
              </Column>
            </Row>

            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/plant-pot.png" alt="plant-pot" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Clean Up</h3>
                <p className="paragraph--white">We at Botanicals are plant geeks and neat freaks! We love working in the dirt, but your place will be spic and span when we leave.</p>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>

      {/* MAINTAIN */}
      <Row>
        <Column width={50}>
          <div className="maintain-div">
            <img src="/assets/icons/design/maintain.png" alt="maintain" />
          </div>
        </Column>
        <Column width={50}>
          <div className="background-color-green">
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/drop.png" alt="drop" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Plant Care</h3>
                <p className="paragraph--white">
                  Our technicians carefully maintain soil moisture and content, pest control, cleanliness, humidification, and proper fertilization to keep your plantscape thriving.
                </p>
              </Column>
            </Row>
            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/plant.png" alt="plant" className="process-icon" />
                </div>
              </Column>
              <Column width={66}>
                <h3 className="heading--white">Appearance</h3>
                <p className="paragraph--white">We ensure the life and beauty of your plantscape with our 52-point inspection at regular intervals.</p>
              </Column>
            </Row>

            <Row>
              <Column width={33}>
                <div className="process-icon-container">
                  <img src="/assets/icons/design/plant-pot.png" alt="plant-pot" className="process-icon" />
                </div>
              </Column>

              <Column width={66}>
                <h3 className="heading--white">Replacement</h3>
                <p className="paragraph--white">Should a plant decline in health or appearance our full-guarantee service agreement covers a speedy replacement at no additional charge to you.</p>
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

export default DesignProcess;
