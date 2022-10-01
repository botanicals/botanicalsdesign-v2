import metadata from '../partials/metadata';

const categories = {
  name: 'categories',
  label: 'Categories',
  label_singular: 'Category',
  identifier_field: 'name',
  create: true,
  folder: 'cms/content/categories',
  fields: [
    { label: 'Name', name: 'name', widget: 'string' },
    { label: 'Color', name: 'color', widget: 'color' },
    {
      label: 'Featured Posts',
      name: 'featuredPosts',
      widget: 'relation',
      collection: 'posts',
      multiple: true,
      required: false,
      search_fields: ['metadata.slug'],
      value_field: '{{metadata.title}}__{{metadata.slug}}',
      display_fields: ['name'],
    },
    metadata,
  ],
};

export default categories;
