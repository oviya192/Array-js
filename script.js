function lengthFunction(){
    var a=document.getElementById("length").value;
    var len = a.split(",")
    document.getElementById("demo").innerHTML=len.length;
}

function stringFunction(){
    var b=document.getElementById("string").value;
    var str = b.split(",")
    str.toString(document.getElementById("demo1").value);
    document.getElementById("demo1").innerHTML=str;
}

function popFunction(){
    var c=document.getElementById("pop").value;
    var pop = c.split(",")
    pop.pop(document.getElementById("demo2").value);
    document.getElementById("demo2").innerHTML=pop;
}

function pushFunction(){
    var d=document.getElementById("push").value;
    var push = d.split(",")
    push.push(document.getElementById("newinput").value);
    document.getElementById("demo3").innerHTML = push;
}

function shiftFunction(){
    var e=document.getElementById("shift").value;
    var shift = e.split(",")
    shift.shift(document.getElementById("demo4").value);
    document.getElementById("demo4").innerHTML = shift;
}

function unshiftFunction() {
    let f = document.getElementById("unshift").value;
    let unshift = f.split(",");
    unshift.unshift(document.getElementById("newvalue").value);
    document.getElementById("demo5").innerHTML = unshift;
}

function myFunction() {
    let del = document.getElementById("delete").value;
    let arrdel = del.split(",");
    delete arrdel[document.getElementById("newdel").value];
    document.getElementById("arrdel").innerHTML = arrdel;

}

function concateFunction() {
    let g = document.getElementById("concate").value;
    let concate = g.split(",");
    let result = concate.concat([document.getElementById("newval").value]);
    document.getElementById("demo6").innerHTML = result;
}

function joinFunction() {
    let h = document.getElementById("join").value;
    let join = h.split(",");
    let result = join.join([document.getElementById("newjoin").value]);
    document.getElementById("demo7").innerHTML = result;
}

function sliceFunction()
{
    let slicing = document.getElementById("slice").value;
    let slice = slicing.split(",");
    let val1 = document.getElementById("slice1").value;
    let val2 = document.getElementById("slice2").value;
    document.getElementById("demo8").innerHTML = slice.slice(val1,val2);
}

function spliceFunction()
{

    let splicing = document.getElementById("splice").value;
    let splice = splicing.split(",");
    let val1 = document.getElementById("splice1").value;
    let val2 = document.getElementById("splice2").value;
    splice.splice(val1,val2)
    document.getElementById("demo9").innerHTML = splice;

}