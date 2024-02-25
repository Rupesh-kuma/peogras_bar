let progressClrcular = document.querySelector(".progress-clrcular");
let btn=document.querySelector("button");
let input=document.querySelector("input");
let value=document.querySelector(".value");

let start=0;
btn.addEventListener("click",bar);

function bar(){
let progress=setInterval(()=>{
    if(start < input.value){
        start++;
        progressEnd()
    }
    else{
        start--;
        progressEnd()
    }
    
    function progressEnd(){
        value.textContent=`${start}%`;
    progressClrcular.style.background=`conic-gradient(#880bea ${start*3.6}deg, #878585 0deg)`;
    if(start==input.value){
        clearInterval(progress)
        input.value="";
    }
    }
});
}
