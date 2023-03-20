const DatauriParser = require('datauri/parser');

const parser = new DatauriParser();

export const bufferToDataURI = (fileFormat: any, buffer: any) =>
  parser.format(fileFormat, buffer);
