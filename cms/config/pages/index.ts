import button from '../partials/button';
import image from '../partials/image';
import metadata from '../partials/metadata';

import basicContent from './sections/basic-content';
import columnContent from './sections/column-content';
import contentOnImages from './sections/content-on-images';
import botanicalsInsider from './sections/botanicals-insider';
import designProcess from './sections/design-process';
import meetTheOwners from './sections/meet-the-owners';
import plantscapeMaintenance from './sections/plantscape-maintenance';
import requestAConsultation from './sections/request-a-consultation';
import seeOurPortfolio from './sections/see-our-portfolios';
import visitOurLocations from './sections/visit-our-locations';
import youtubeEmbed from './sections/youtube-embed';

const pages = {
  name: 'pages',
  label: 'Pages',
  label_singular: 'Page',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: true,
  folder: 'cms/content/pages',
  fields: [
    { label: 'Name', name: 'name', widget: 'string' },
    {
      label: 'Parent',
      name: 'parent',
      widget: 'relation',
      collection: 'pages',
      search_fields: ['metadata.slug'],
      value_field: '{{metadata.title}}__{{metadata.slug}}',
      display_fields: ['name'],
      required: false,
    },
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      collapsed: true,
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        { label: 'Subheading', name: 'subheading', widget: 'string' },
        image,
        {
          label: 'CTA',
          name: 'cta',
          widget: 'object',
          collapsed: true,
          fields: [
            { label: 'Heading', name: 'heading', widget: 'string', required: false },
            { label: 'Text', name: 'text', widget: 'string', required: false },
            { ...button, required: false },
          ],
          required: false,
        },
      ],
    },
    { label: 'Page Heading', name: 'heading', widget: 'string' },
    {
      label: 'Sections',
      label_singular: 'Section',
      name: 'sections',
      widget: 'list',
      types: [
        basicContent,
        columnContent,
        contentOnImages,
        botanicalsInsider,
        designProcess,
        meetTheOwners,
        plantscapeMaintenance,
        requestAConsultation,
        seeOurPortfolio,
        visitOurLocations,
        youtubeEmbed,
      ],
    },
    metadata,
  ],
};

export default pages;
