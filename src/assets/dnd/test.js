const charCalc = require('./charCalc.js');
// const data = require('./xoh.json');

// TO BE RECORDED ELSEWHERE:
// inspiration
// temp hp
// current hp
// equipment
// condition
// current ki
// current hd
// short/long rest abilities

if (!process.argv[2] || !process.argv[2].match(/.*.json/)) {
    console.log('requires json file');
}

try {
    console.log(charCalc.generate(require(process.argv[2])));
} catch {
    console.log('requires VALID json file');
}
