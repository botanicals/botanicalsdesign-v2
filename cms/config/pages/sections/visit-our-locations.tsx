const visitOurLocations = {
  label: 'Visit our Locations',
  name: 'visitOurLocations',
  widget: 'object',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    { label: 'Content', name: 'content', widget: 'markdown' },
    {
      label: 'Images',
      name: 'images',
      widget: 'object',
      fields: [
        { label: 'Kaysville', name: 'kaysville', widget: 'image' },
        { label: 'Sandy', name: 'sandy', widget: 'image' },
        { label: 'St George', name: 'stGeorge', widget: 'image' },
      ],
    },
  ],
};

export default visitOurLocations;
