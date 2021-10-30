var sort = new Array(20);
function DefineNumber(){
    for(var i = 0; i < sort.length; i++){
        sort[i] = Math.floor(Math.random() * 30);
    }
    console.log(sort);
}DefineNumber();
function partition(p,q){
    if(p<q){
        var pivot = QuickSort(p, q);
        partition(p, pivot-1);
        partition(pivot+1, q);
    }else{
        return;
    }
}partition(0,19);
function QuickSort(p, q){
    var pivot = Math.floor((p+q)/2);
    var i = p;
    var j = q;
    var tmp = sort[pivot];
    sort[pivot] = sort[p];
    sort[p] = tmp;
    while(i < j){
        while(sort[j] > tmp){
            j--;
        }
        while(sort[i]<=tmp&&i<j){
            i++;
        }
        var temp = sort[i];
        sort[i] = sort[j];
        sort[j] = temp;
    }
    var temp = sort[i];
    sort[i] = sort[p];
    sort[p] = temp;
    return i;
}
function print(){
    console.log("---정렬한 것---");
    console.log(sort);
}print();