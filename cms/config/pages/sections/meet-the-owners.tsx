const meetTheOwners = {
  label: 'Meet the Owners',
  name: 'meetTheOwners',
  widget: 'object',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    {
      label: 'Owners',
      name: 'owners',
      widget: 'list',
      fields: [
        { label: 'Name', name: 'name', widget: 'string' },
        { label: 'Photo', name: 'photo', widget: 'image' },
      ],
    },
  ],
};

export default meetTheOwners;
