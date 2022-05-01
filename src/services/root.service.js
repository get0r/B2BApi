const PAGE_SIZE = 10;

const getOperatedData = async (DBmodel, query = {}, sort = {}, page = 1) => {
  const skip = (page - 1) * PAGE_SIZE;
  let finalQuery = query;
  let data = [];
  if (query && query.q) {
    const searchQuery = { $text: { $search: query.q } };
    const fieldAdd = { score: { $meta: 'textScore' } };
    finalQuery = _.omit(query, ['q']);
    data = await DBmodel.find({ ...searchQuery, ...finalQuery }, fieldAdd)
      .skip(skip)
      .sort(sort)
      .limit(PAGE_SIZE)
      .lean();
  } else {
    data = await DBmodel.find(finalQuery)
      .skip(skip)
      .sort(sort)
      .limit(PAGE_SIZE)
      .lean();
  }

  return data;
};

module.exports = {
  getOperatedData,
};
