class Trie {
  constructor() {
    this.trie = {};
  }

  insert(word) {
    let node = this.trie;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.isEnd = true;
  }

  searchPrefix(prefix) {
    let node = this.trie;
    for (const ch of prefix) {
      if (!node[ch]) {
        return false;
      }
      node = node[ch];
    }
    return node;
  }

  search(word) {
    const node = this.searchPrefix(word);
    return node.isEnd !== undefined;
  }

  startsWith(prefix) {
    return !!this.searchPrefix(prefix);
  }
}