import metadata from '../../partials/metadata';

const global = {
  file: 'cms/content/settings/global.md',
  label: 'Global',
  name: 'global',
  fields: [
    { label: 'Site Title', name: 'siteTitle', widget: 'string' },
    { ...metadata, label: 'Default Metadata', name: 'defaultMetadata' },
    {
      label: 'Site Banner',
      name: 'siteBanner',
      widget: 'object',
      required: false,
      fields: [
        { label: 'Short Text', name: 'shortText', widget: 'string', required: false },
        { label: 'Long Text', name: 'longText', widget: 'string', required: false },
        {
          label: 'Link',
          name: 'link',
          widget: 'object',
          required: false,
          fields: [
            { label: 'Text', name: 'text', widget: 'string', required: false },
            { label: 'Href', name: 'href', widget: 'string', required: false },
            { label: 'External', name: 'external', widget: 'boolean', default: false, required: false },
          ],
        },
      ],
    },
  ],
};

export default global;
