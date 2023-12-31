const sum = (a, b) => {
  return a + b;
};

const deleteUserById = (arr, id) => {
  return arr.filter((item) => item.id !== id);
};
const findUserById = (arr, id) => {
  return arr.find((item) => item.id === id);
};

module.exports = {
  sum,
  deleteUserById,
  findUserById,
};
