import {defaultToStr, ValuePair} from "./MyMap.js";
import {LinkedList} from "./LinkedList.js";

export class HashTable {
  constructor(toStrFn = defaultToStr) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    // return this.loseloseHashCode(key);
    return this.djb2HashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const pos = this.hashCode(key);
      this.table[pos] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair ? valuePair.value: undefined;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.get(hash);
    if (valuePair) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  size() {
    return Object.values(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objStr = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objStr += `\n{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objStr;
  }
}

export class HashTableSeparateChaining extends HashTable {
  put(key, value) {
    if (key != null && value != null) {
      const pos = this.hashCode(key);
      if (!this.table[pos]) {
        this.table[pos] = new LinkedList((a, b) => a === b.key);
      }
      this.table[pos].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const pos = this.hashCode(key);
    const list = this.table[pos];
    return list ? list.getElementAt(list.indexOf(key)).element.value : undefined;
  }

  remove(key) {
    const pos = this.hashCode(key);
    const list = this.table[pos];
    if (list && list.indexOf(key) > -1) {
      list.remove(key);
      if (list.isEmpty()) {
        delete this.table[pos];
      }
      return true;
    }
    return false;
  }
}

export class HashTableLinearProbing extends HashTable {
  put(key, value) {
    if (key != null && value != null) {
      const pos = this.hashCode(key);
      if (!this.table[pos]) {
        this.table[pos] = new ValuePair(key, value);
      } else {
        let index = pos + 1;
        while (this.table[index]) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const pos = this.hashCode(key);
    if (this.table[pos]) {
      if (this.table[pos].key === key) {
        return this.table[pos].value;
      }
      let index = pos + 1;
      while (this.table[index] && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] && this.table[index].key === key) {
        return this.table[index].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const pos = this.hashCode(key);
    if (this.table[pos]) {
      if (this.table[pos].key === key) {
        delete this.table[pos];
        this.verifyRemoveSideEffect(key, pos);
        return true;
      }
      let index = pos + 1;
      while (this.table[index] && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }

  verifyRemoveSideEffect(key, removedPos) {
    const hash = this.hashCode(key);
    let index = removedPos + 1;
    while (this.table[index]) {
      const curHash = this.hashCode(this.table[index].key);
      if (curHash <= hash || curHash <= removedPos) {
        this.table[removedPos] = this.table[index];
        delete this.table[index];
        removedPos = index;
      }
      index++;
    }
  }
}