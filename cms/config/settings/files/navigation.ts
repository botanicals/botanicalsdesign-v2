const navigation = {
  file: 'cms/content/settings/navigation.md',
  label: 'Navigation',
  name: 'navigation',
  fields: [
    {
      label: 'Header Navigation',
      label_singular: 'Navigation Item',
      name: 'headerNavigation',
      widget: 'list',
      fields: [
        { label: 'Name', name: 'name', widget: 'string' },
        { label: 'Path', name: 'path', widget: 'relation', collection: 'pages', search_fields: ['metadata.slug'], value_field: 'metadata.slug', display_fields: ['name'], required: false },
        { label: 'Href', name: 'href', widget: 'string', required: false },
        {
          label: 'Children',
          label_singular: 'Item',
          name: 'children',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Path', name: 'path', widget: 'relation', collection: 'pages', search_fields: ['metadata.slug'], value_field: 'metadata.slug', display_fields: ['name'], required: false },
            { label: 'Href', name: 'href', widget: 'string', required: false },
            { label: 'Nested', name: 'nested', widget: 'boolean', default: true },
          ],
        },
      ],
    },
    {
      label: 'Footer Locations',
      name: 'footerLocations',
      widget: 'object',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        {
          label: 'Locations',
          label_singular: 'location',
          name: 'locations',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Href', name: 'href', widget: 'string' },
            { label: 'Address', name: 'address', widget: 'text' },
            {
              label: 'Phone',
              name: 'phone',
              widget: 'object',
              fields: [
                { label: 'Text', name: 'text', widget: 'string' },
                { label: 'Href', name: 'href', widget: 'string' },
              ],
            },
            {
              label: 'Email',
              name: 'email',
              widget: 'object',
              fields: [
                { label: 'Text', name: 'text', widget: 'string' },
                { label: 'Href', name: 'href', widget: 'string' },
              ],
            },
            {
              label: 'Socials',
              label_singular: 'Social',
              name: 'socials',
              widget: 'list',
              fields: [
                { label: 'Type', name: 'type', widget: 'select', options: ['facebook', 'instagram'] },
                { label: 'Href', name: 'href', widget: 'string' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Footer Navigation',
      label_singular: 'Column',
      name: 'footerNavigation',
      widget: 'list',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string' },
        {
          label: 'Groups',
          label_singular: 'Group',
          name: 'groups',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            {
              label: 'Children',
              label_singular: 'Group',
              name: 'children',
              widget: 'list',
              fields: [
                { label: 'Name', name: 'name', widget: 'string' },
                {
                  label: 'Path',
                  name: 'path',
                  widget: 'relation',
                  collection: 'pages',
                  search_fields: ['metadata.slug'],
                  value_field: 'metadata.slug',
                  display_fields: ['name'],
                  required: false,
                },
                { label: 'Href', name: 'href', widget: 'string', required: false },
                { label: 'Tag', name: 'tag', widget: 'string', required: false },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default navigation;
