import metadata from '../partials/metadata';

const jobs = {
  name: 'jobs',
  label: 'Jobs',
  label_singular: 'Location',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: true,
  folder: 'cms/content/jobs',
  fields: [
    { label: 'Name', name: 'name', widget: 'string' },
    { label: 'Overview', name: 'overview', widget: 'markdown' },
    {
      label: 'Positions',
      label_singular: 'Position',
      name: 'positions',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Slug', name: 'slug', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'markdown' },
      ],
    },
    metadata,
  ],
};

export default jobs;
