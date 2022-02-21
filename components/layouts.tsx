interface SectionProps {
  heading: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ heading, fullWidth, children }) => {
  return (
    <section className={fullWidth ? 'section section--full-width' : 'section'}>
      {fullWidth ? (
        <div className="section__full-width-content-container">
          <h2 className="heading heading__h2">{heading}</h2>
          {children}
        </div>
      ) : (
        <>
          <h2 className="heading heading__h2">{heading}</h2>
          {children}
        </>
      )}
    </section>
  );
};

interface ColumnProps {
  width: 25 | 33 | 50 | 66 | 75 | 100;
  centered?: boolean;
}

export const Column: React.FC<ColumnProps> = ({ centered, width, children }) => {
  return <div className={centered ? `column column__${width} column--centered` : `column column__${width}`}>{children}</div>;
};

export const Row: React.FC = ({ children }) => {
  return <div className="row">{children}</div>;
};
