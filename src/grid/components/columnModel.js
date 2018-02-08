const columnModelData = Symbol('Column Model');

export const sortingFunction = (a, b) => {
  if (!a.order) {
    return 1;
  }
  if (!b.order) {
    return -1;
  }
  if (a.order >= b.order) {
    return 1;
  }
  return -1;
};

export default class ColumnModel {
  constructor(colModelData: Array<Object>) {
    this[columnModelData] = colModelData.sort(sortingFunction);
  }

  get() {
    return this[columnModelData];
  }
}
