const button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  fields: [
    { label: 'Text', name: 'text', widget: 'string' },
    { label: 'Href', name: 'href', widget: 'string' },
    { label: 'External', name: 'external', widget: 'boolean', required: false },
  ],
};

export default button;
