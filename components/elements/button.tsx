import Link from 'next/link';
import classNames from '../../utils/class-names';

interface ButtonProps {
  href: string;
  inverse?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, inverse, external, children }) => {
  if (external) {
    return (
      <a className={classNames(inverse ? '' : '', 'text-primary-red font-bold')} href={href}>
        {children} <strong>&#8811;</strong>
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classNames(inverse ? '' : '', 'text-primary-red font-semibold text-xl py-4 block')}>
        {children} <strong>&#8811;</strong>
      </a>
    </Link>
  );
};

export default Button;
