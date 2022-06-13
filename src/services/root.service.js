const _ = require('lodash');

const PAGE_SIZE = 10;

const getOperatedData = async (DBmodel, query = {}, sort = {}, page = 1) => {
  const skip = page ? (+page - 1) * PAGE_SIZE : 0;
  let finalSort = {};
  if (sort instanceof String) {
    finalSort = {};
    const tempSort = sort.split(',');
    // eslint-disable-next-line no-restricted-syntax
    for (const item of tempSort) {
      const str = item.slice(0, -1);
      finalSort[str] = item.slice(-1) === '-' ? -1 : 1;
    }
  }

  let finalQuery = query;
  let data = [];
  if (query && query.q) {
    const searchQuery = { $text: { $search: query.q } };
    const fieldAdd = { score: { $meta: 'textScore' } };
    finalQuery = _.omit(query, ['q']);
    data = await DBmodel.find({ ...searchQuery, ...finalQuery }, fieldAdd)
      .sort(finalSort)
      .lean();
  } else {
    data = await DBmodel.find(finalQuery)
      .sort(finalSort)
      .lean();
  }

  return data;
};

module.exports = {
  getOperatedData,
};
