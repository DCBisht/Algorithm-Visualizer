import {Tree,buchheim} from './Tree';
export function getTree(n,algo=0,r=0){
    if(algo === 0)
        return buchheim( fib(n) );
    else if( algo === 1 )
        return buchheim(NcR(n,r));
}

function fib(n){
    let tree = new Tree(n,[],n+"");
    if( n <2 ) return tree;
    tree.children.push( fib(n-1) );
    tree.children.push( fib(n-2) );
    tree.node = tree.children[0].node+tree.children[1].node;
    return tree;
}

function sib(n){
    let tree = new Tree(n,[]);
    if( n <3 ) return tree;
    tree.children.push( sib(n-2) );
    tree.children.push( sib(n-3) );
    tree.node = tree.children[0].node+tree.children[1].node;
    return tree;
}

function NcR(n,r){
    if (r > n)
        return new Tree(-1,[],"("+n+","+r+")");

    if (n === r)
        return new Tree(1,[],"("+n+","+r+")");

    if (r === 0)
        return new Tree(1,[],"("+n+","+r+")");;

    // nCr(n, r) = nCr(n - 1, r - 1) + nCr(n - 1, r)
    let tree = new Tree(0,[],"("+n+","+r+")");
    tree.children.push( NcR(n-1,r-1) );
    tree.children.push( NcR(n-1,r) );
    tree.node = tree.children[0].node+tree.children[1].node;
    return tree;
}


