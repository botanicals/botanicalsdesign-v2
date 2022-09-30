import button from '../../partials/button';
import image from '../../partials/image';

const contentOnImages = {
  label: 'Content on Images',
  name: 'contentOnImages',
  widget: 'object',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    { label: 'Content', name: 'content', widget: 'markdown' },
    button,
    {
      label: 'Images',
      label_singular: 'Image',
      name: 'images',
      widget: 'list',
      max: 3,
      min: 1,
      fields: image.fields,
    },
  ],
};

export default contentOnImages;
