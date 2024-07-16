const arr = ['a', 'b', 'c', 'A', 'B', 'C', 1, 2, 3];

// ARRAYs implementieren das Iterable-Interface:

// keys
const keys = arr.keys();
console.log(keys.next());
console.log(keys.next());

// values
const values = arr.values();
console.log(values.next());
console.log(values.next());

// entries
const entries = arr.entries();
console.log(entries.next());
console.log(entries.next());

// for...of
for (const item of arr) {
    console.log(item);
}

// forEach
arr.forEach((item, index) => {
    console.log(index, item);
});

// for...in (nicht empfohlen für Arrays)
for (const index in arr) {
    console.log(index, arr[index]);
}

// map
const mapped = arr.map((item, index) => {
    return `${index}: ${item}`;
});
console.log(mapped);

// filter
const filtered = arr.filter((item) => {
    return typeof item === 'string';
});
console.log(filtered);

// reduce
const reduced = arr.reduce((acc, item) => {
    return acc + item;
});
console.log(reduced);

// some
const some = arr.some((item) => {
    return typeof item === 'number';
});
console.log(some);

// every
const every = arr.every((item) => {
    return typeof item === 'number';
});
console.log(every);

// find
const found = arr.find((item) => {
    return typeof item === 'number';
});
console.log(found);

