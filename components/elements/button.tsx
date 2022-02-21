import Link from 'next/link';

interface ButtonProps {
  href: string;
  inverse?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, inverse, external, children }) => {
  if (external) {
    return (
      <a className={`button ${inverse && 'button--inverse'}`} href={href}>
        {children} <strong>&#8811;</strong>
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={`button ${inverse && 'button--inverse'}`}>
        {children} <strong>&#8811;</strong>
      </a>
    </Link>
  );
};

export default Button;
