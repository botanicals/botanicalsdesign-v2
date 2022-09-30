import button from '../partials/button';
import image from '../partials/image';
import metadata from '../partials/metadata';

const locations = {
  name: 'locations',
  label: 'Locations',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: false,
  folder: 'cms/content/locations',
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
      label: 'About Us',
      name: 'aboutUs',
      widget: 'object',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        { label: 'Content', name: 'content', widget: 'markdown' },
        { label: 'Subheading', name: 'subheading', widget: 'string' },
        {
          label: 'Call Us',
          name: 'callUs',
          widget: 'object',
          fields: [
            { label: 'Text', name: 'text', widget: 'string' },
            { label: 'Href', name: 'href', widget: 'string' },
          ],
        },
        {
          label: 'Email Us',
          name: 'emailUs',
          widget: 'object',
          fields: [
            { label: 'Text', name: 'text', widget: 'string' },
            { label: 'Href', name: 'href', widget: 'string' },
          ],
        },
        image,
      ],
    },
    {
      label: 'Visit Us',
      name: 'visitUs',
      widget: 'object',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        { label: 'Business Info', name: 'businessInfo', widget: 'markdown' },
        {
          label: 'Map',
          name: 'map',
          widget: 'object',
          fields: [
            { label: 'Map Title', name: 'title', widget: 'string' },
            { label: 'Map Source', name: 'source', widget: 'string' },
          ],
        },
      ],
    },
    {
      label: 'Additional Content',
      name: 'additionalContent',
      widget: 'object',
      required: false,
      collapsed: true,
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string', required: false },
        { label: 'Content', name: 'content', widget: 'markdown', required: false },
        { ...button, required: false },
      ],
    },
    {
      label: 'Gallery',
      name: 'gallery',
      widget: 'object',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        {
          label: 'Images',
          label_singular: 'Image',
          name: 'images',
          widget: 'list',
          summary: '{{fields.alt}} - {{fields.image}}',
          fields: [
            { label: 'Source', name: 'source', widget: 'image' },
            { label: 'Alt', name: 'alt', widget: 'string', required: false },
            { label: 'Columns', name: 'columns', widget: 'number', default: 1, min: 1 },
            { label: 'Rows', name: 'rows', widget: 'number', default: 1, min: 1 },
          ],
        },
      ],
    },
    {
      label: 'Botanicals Insider',
      name: 'botanicalsInsider',
      widget: 'object',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        { label: 'Content', name: 'content', widget: 'markdown' },
        { label: 'Featured Text', name: 'featuredText', widget: 'string' },
      ],
    },
    {
      label: 'Contact Form',
      name: 'contactForm',
      widget: 'object',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text', required: false },
        { label: 'Heading', name: 'heading', widget: 'string' },
        { label: 'Subheading', name: 'subheading', widget: 'string' },
        image,
      ],
    },
    metadata,
  ],
};

export default locations;
