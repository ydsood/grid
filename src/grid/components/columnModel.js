const columnModelData = Symbol('Column Model');

export default class ColumnModel {
  constructor(colModelData: Array<Object>) {
    this[columnModelData] = colModelData.sort((a, b) => {
      if (!a.order) {
        return 1;
      }
      if (!b.order) {
        return -1;
      }
      if (a >= b) {
        return 1;
      }
      return -1;
    });
  }

  get() {
    return this[columnModelData];
  }
}
