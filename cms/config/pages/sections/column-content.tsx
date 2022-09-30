import button from '../../partials/button';
import image from '../../partials/image';

const columnTypes = [
  { label: 'Markdown', name: 'markdown', widget: 'object', field: { label: 'Content', name: 'content', widget: 'markdown' } },
  image,
  button,
  { label: 'Feature Box', name: 'featureBox', widget: 'object', fields: [{ label: 'Text', name: 'text', widget: 'string' }] },
];

const columnContent = {
  label: 'Column Content',
  name: 'columnContent',
  widget: 'object',
  fields: [
    { label: 'Layout', name: 'layout', widget: 'select', options: ['1/2 | 1/2', '1/3 | 2/3', '2/3 | 1/3'], default: '1/2 | 1/2' },
    { label: 'Heading', name: 'heading', widget: 'string' },
    {
      label: 'Left Column',
      label_singular: 'Content',
      name: 'leftColumn',
      widget: 'list',
      types: columnTypes,
    },
    {
      label: 'Right Column',
      label_singular: 'Content',
      name: 'rightColumn',
      widget: 'list',
      types: columnTypes,
    },
  ],
};

export default columnContent;
