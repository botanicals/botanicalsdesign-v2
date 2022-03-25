interface FeatureBoxProps {
  text: string;
}

const FeatureBox: React.VFC<FeatureBoxProps> = ({ text }) => {
  return (
    <div className="px-4 py-8 my-4 text-center bg-gray-100">
      <span className="text-3xl uppercase text-primary-green">{text}</span>
    </div>
  );
};

export default FeatureBox;
