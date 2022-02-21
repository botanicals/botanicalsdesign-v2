export const getParent = parentString => {
  const data = parentString.split('__');
  return {
    title: data[0],
    slug: data[1],
  };
};
