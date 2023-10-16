
Array.prototype.swap = function (a, b) {
    if ( b >= this.length || b < 0 ) return this;

    let temp = this[a];
    this[a] = this[b];
    this[b] = temp;
    return this;
};


Array.range = n => Array.from(new Array(n), (x,i) => i);

Array.matrix = (x, y) => {
    const rows = Array.range(y);
    const columns = Array.range(x);
    return rows.map( (row, i) => columns.slice() );
}
