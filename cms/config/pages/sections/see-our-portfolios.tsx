import image from '../../partials/image';

const portfolioFields = [
  { label: 'Content', name: 'content', widget: 'markdown' },
  {
    label: 'Images',
    label_singular: 'Image',
    name: 'images',
    widget: 'list',
    max: 3,
    min: 1,
    fields: image.fields,
  },
];

const seeOurPortfolio = {
  label: 'See our Portfolio',
  name: 'seeOurPortfolio',
  widget: 'object',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    {
      label: 'Indoor',
      name: 'indoor',
      widget: 'object',
      fields: portfolioFields,
    },
    {
      label: 'Outdoor',
      name: 'outdoor',
      widget: 'object',
      fields: portfolioFields,
    },
  ],
};

export default seeOurPortfolio;
