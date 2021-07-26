const A1 = {
    'a':0,
    'b':1,
    'c':2
};

// const A2 = {...A1};
const A2 = Object.assign({}, A1);
A2.a = 2;

console.log('A1',A1)
console.log('A2',A2)



const B1 = [1,2,3,4];
// const B2 = B1.slice();
const B2 = [...B1];

B2[0] = 2;

console.log('B1',B1)
console.log('B2',B2)