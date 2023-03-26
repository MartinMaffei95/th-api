interface MongooseQuery {
  _id?: object | string;
  uploaded_by?: string;
}

const createQuery = (query: object) => {
  let mongooseQuery: MongooseQuery = {};

  for (const [key, value] of Object.entries(query)) {
    switch (key) {
      case 'nickname':
        mongooseQuery = { ...mongooseQuery, uploaded_by: value };
        break;
      case 'id':
        mongooseQuery = { ...mongooseQuery, _id: value };
        break;

      default:
        // mongooseQuery = { ...mongooseQuery, [key]: value };
        break;
    }
  }

  return mongooseQuery;
};
export { createQuery };
