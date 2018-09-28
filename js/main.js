

let cacher=(e)=>{

    let x=document.getElementById(e).nextElementSibling;
   

    console.log(e);
     if (x.style.display === "none") {

        x.style.display= "block";
       
    } else {
        x.style.display = "none";
    }
    
    
};



