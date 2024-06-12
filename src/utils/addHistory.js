export const addHistory = ({ array, counting, result, page }) => {
  return array.concat({
    counting: counting,
    result: result,
    page: page,
  });
};
