import settings from './settings';
import pages from './pages';
import portfolio from './portfolio';
import locations from './locations';
import posts from './posts';
import categories from './categories';
import jobs from './jobs';

const config = {
  cms_manual_init: true,
  load_config_file: false,
  backend: {
    name: 'git-gateway',
    branch: 'main',
    commit_messages: {
      create: 'Create {{collection}} “{{slug}}”',
      update: 'Update {{collection}} “{{slug}}”',
      delete: 'Delete {{collection}} “{{slug}}”',
      uploadMedia: '[skip ci] Upload “{{path}}”',
      deleteMedia: '[skip ci] Delete “{{path}}”',
    },
  },
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  local_backend: true,
  collections: [settings, pages, portfolio, locations, posts, categories, jobs],
};

export default config;
