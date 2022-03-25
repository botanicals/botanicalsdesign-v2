import classNames from '../utils/class-names';

interface SectionProps {
  heading?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ heading, fullWidth, children }) => {
  return (
    <section className={classNames(fullWidth ? 'max-w-none' : 'max-w-[1600px]', 'mx-auto mt-12 px-8')}>
      <div className={classNames(fullWidth ? '' : '')}>
        {heading ? <h2 className="mb-4 heading text-primary-orange">{heading}</h2> : null}
        {children}
      </div>
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
