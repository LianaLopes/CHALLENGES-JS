add(1000);
function add(limit) {
    let multiplesof3 = 0
    let multiplesof5 = 0
    for(i = 0;i<=1000;i++) {
        if(i % 3 === 0)
        multiplesof3 +=i
        if(i % 5 === 0)
        multiplesof5 +=i
    }
    console.log(multiplesof3 + multiplesof5)
}