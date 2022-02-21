import PageLayout from '../layouts/PageLayout';

const NotFound = () => {
  return (
    <PageLayout seo={{ title: 'Not Found', slug: '' }}>
      <h1 className="text-xl font-bold">Not found</h1>
    </PageLayout>
  );
};

export default NotFound;
