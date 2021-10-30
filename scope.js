function foo(){
    console.log('foo함수입니다.');
}
function bar(){
    function foo(){
        console.log('bar안에 있는 foo함수입니다.');
    }
    foo();
}
bar();
foo();