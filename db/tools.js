// UTC format date transformation
function formatDate(date) {
  return new Date(date).toJSON().slice(0, 19).replace("T", " ");
}

module.exports = {
  formatDate,
};
