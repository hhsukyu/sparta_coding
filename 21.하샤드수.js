function solution(x) {
    let add = 0;
    const a = x.toString();
    for (i = 0; i < a.length; i++) {
    add += parseInt(a[i]);
  }
    if(x%add === 0){
        return true;
    }else {
        return false;
    }
 }