const { parseQuery } = require("loader-utils");

module.exports = function (source) {
  console.log('holyshit source \r\n', source);
  console.log('holyshit this.resourceQuery  \r\n', this.resourceQuery);
  const params = (this.resourceQuery && parseQuery(this.resourceQuery)) || {};
  console.log('holyshit params---', params);
  return `${source} ; console.log('params.name is:', '${params.name}', '这个文件loader结束啦')`;
};
