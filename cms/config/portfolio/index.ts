import image from '../partials/image';
import metadata from '../partials/metadata';

const featureFields = [
  { label: 'Heading', name: 'heading', widget: 'string' },
  { label: 'Folder', name: 'folder', widget: 'string', hint: 'This is the folder where the images are stored in Cloudinary' },
  {
    label: 'Images',
    label_singular: 'Image',
    name: 'images',
    widget: 'list',
    required: true,
    fields: [
      { label: 'Source', name: 'source', widget: 'image' },
      { label: 'Alt', name: 'alt', widget: 'string', required: false },
      { label: 'Caption', name: 'caption', widget: 'string', required: false },
    ],
  },
];

const portfolio = {
  name: 'portfolio',
  label: 'Portfolio',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: false,
  folder: 'cms/content/portfolio',
  fields: [
    { label: 'Name', name: 'name', widget: 'string' },
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      collapsed: true,
      fields: [{ label: 'Heading', name: 'heading', widget: 'string' }, { label: 'Subheading', name: 'subheading', widget: 'string' }, image],
    },
    {
      label: 'Commercial',
      label_singular: 'Feature',
      name: 'commercial',
      widget: 'list',
      fields: featureFields,
    },
    {
      label: 'Residential',
      label_singular: 'Feature',
      name: 'residential',
      widget: 'list',
      fields: featureFields,
    },
    metadata,
  ],
};

export default portfolio;
