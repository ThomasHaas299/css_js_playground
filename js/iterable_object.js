// TODO die "neue" Notation für Klassen

// Das ist die "alte" Notation für Klassen
function even() {
    this.n = 0;
    this.next = function () {
        return this.n += 2;
    }
}

// Direkte Erzeugung eines Iterators
function uneven() {
    let n = 1;
    return {
        next: function () {
            n += 2;
            return { value: n, done: false };
        }
    }
}

// Erzeugung mit new
let typeOld = new even();

// hier kann aber von außen typeOld.n manipuliert werden!
// typeOld.n = 11;

// ein paar Durchläufe
typeOld.next();
typeOld.next();

// Ausgabe des nächsten Wertes
console.log(typeOld.next());
console.log('----');

// ----------------------------------------------------------

// Erzeugung ohne new, nur Funktionsaufruf
let typeIter = uneven();
typeIter.next();
typeIter.next();
console.log(typeIter.next().value);
console.log('----');
