import { useEffect } from 'react';

const SubscribeForm = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://botanicalsdesign.activehosted.com/f/embed.php?id=13';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return <div className="_form_13"></div>;
};

export default SubscribeForm;
