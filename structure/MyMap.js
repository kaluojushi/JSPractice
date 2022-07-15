export function defaultToStr(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export class MyMap {
  constructor(toStrFn = defaultToStr) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair ? valuePair.value: undefined;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (const valuePair of valuePairs) {
      const result = callbackFn(valuePair.key, valuePair.value);
      if (result === false) {
        break;
      }
    }
  }

  size() {
    return Object.values(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objStr = '' + valuePairs[0].toString();
    for (let i = 1; i < valuePairs.length; i++) {
      objStr += ', ' + valuePairs[i].toString();
    }
    return objStr;
  }
}
