module.exports = (urlPath) => {
  return urlPath.match(/([^/]*)\/*$/)[0];
};
