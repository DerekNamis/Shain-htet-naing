let text=document.getElementById("text");
let uou=document.getElementById("uou");
let wie=document.getElementById("wie");

let b = document.getElementById("b");
let ans = document.getElementById("ans");
let vb=0;
let ree,eer,ou=true;

text.style.display="none";
uou.style.display="none";
wie.style.display="none";


b.addEventListener("click", () => {
    let ce = document.getElementById("ce");
    let co = document.getElementById("co");
    let opera= document.getElementById("opera");
    console.log("hi")
    thing(ce,co,opera);
    ce=parseInt(ce.value);
    co=parseInt(co.value);
    
    if(ree && eer && ou){
        switch (opera.value){
            case "add" : vb =  ce+co ; break;
            case "sub" :  vb  =   ce-co ; break;
            case "mul" :  vb  =  ce*co ; break;
            case "divi" :  vb  = ce / co; break;
            case "default" : console.log("Operation failed");break;
    
        }
       console.log(vb);
       ans.innerHTML=vb;
    }
    }
   )

    let thing=(ce,co,opera)=>{
        if (ce.value=="" || ce.value==null || ce.value==undefined){
           text.style.display="block";
           ree=false;
        }
        else {text.style.display="none" 
        ree=true}


       if (co.value=="" || co.value==null || co.value==undefined){
            wie.style.display="block";
            eer=false;
        }
        else {wie.style.display="none"
            eer=true}


        if (opera.value=="empty"){
            uou.style.display="block"
            ou=false;
        }
        else {uou.style.display="none"
                ou=true}
    }

