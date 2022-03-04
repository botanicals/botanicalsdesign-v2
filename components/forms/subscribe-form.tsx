import { Component } from 'react';

class SubscribeForm extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.id = 'active-campaign-form';
    script.src = 'https://botanicalsdesign.activehosted.com/f/embed.php?id=13';
    script.async = true;

    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const script = document.querySelector('#active-campaign-form');

    if (script) {
      document.body.removeChild(script);
    }
  }

  render() {
    return <div className="_form_13"></div>;
  }
}

export default SubscribeForm;
