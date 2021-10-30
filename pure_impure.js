var count1 = 0;
var count2 = 0;

function increase_pure(n){
    return ++n;// n++로하면 리턴 되고 증가하기때문에 인수값 그대로 반환되니 주의
}
function increase_impure(){
    count2 ++;
}
count1 = increase_pure(count1);
console.log(count1);
count1 = increase_pure(count1);
console.log(count1);
increase_impure();
console.log(count2);
increase_impure();
console.log(count2);
//순수함수는 동일한 인수에 언제나 동일한 값을, 비순수함수는 외부 상태에 의존하며 외부 상태를 변경