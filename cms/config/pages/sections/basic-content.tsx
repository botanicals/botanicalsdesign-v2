import button from '../../partials/button';

const basicContent = {
  label: 'Basic Content',
  name: 'basicContent',
  widget: 'object',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    { label: 'Content', name: 'content', widget: 'markdown' },
    { ...button, required: false },
  ],
};

export default basicContent;
