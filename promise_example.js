let readfile = require('./readFile');

const printAsyncFunc = async () => {
    let promise_return;
    try {
        promise_return = await readfile('text1.txt');
        console.log(promise_return)
    } catch(e) {
        console.log(`handling error ==> ${e}`)
    }
   
    console.log(`function finished`);

}

printAsyncFunc();


