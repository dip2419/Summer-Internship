const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    return this.log[this.log.length - 2];
  },
};

console.log(obj.latest);

const language = {
  set current(name) {
    this.log.push(name);
  },
  log :[],
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);

