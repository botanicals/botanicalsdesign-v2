import image from '../partials/image';
import metadata from '../partials/metadata';

const posts = {
  name: 'posts',
  label: 'Posts',
  label_singular: 'Post',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: true,
  folder: 'cms/content/posts',
  fields: [
    { label: 'State', name: 'state', widget: 'select', options: ['Draft', 'Published'], default: 'Draft' },
    { label: 'Name', name: 'name', widget: 'string' },
    { label: 'Author', name: 'author', widget: 'select', options: ['Botanicals Design', 'Nicole Hancock', 'Darren Edwards', 'Shannon Mondry', 'Talon Durrant'] },
    { label: 'Publish Date', name: 'date', widget: 'datetime', time_format: false },
    {
      label: 'Categories',
      name: 'categories',
      widget: 'relation',
      collection: 'categories',
      multiple: true,
      search_fields: ['metadata.slug'],
      value_field: '{{metadata.title}}__{{metadata.slug}}__{{color}}',
      display_fields: ['name'],
      required: false,
    },
    {
      label: 'Related Posts',
      name: 'relatedPosts',
      widget: 'relation',
      collection: 'posts',
      multiple: true,
      required: false,
      search_fields: ['metadata.slug'],
      value_field: 'metadata.slug',
      display_fields: ['name'],
    },
    image,
    { label: 'Featured', name: 'featured', widget: 'boolean', default: false },
    { label: 'Excerpt', name: 'excerpt', widget: 'text' },
    { label: 'Content', name: 'body', widget: 'markdown' },
    metadata,
  ],
};

export default posts;
