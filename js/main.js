



let cacher=(e)=>{

    let xu=document.getElementById(e)
    let x=xu.nextElementSibling;
   

    console.log(e);
     if (x.style.display === "none") {

        x.style.display= "block";
       
    } else {
        x.style.display = "none";
        console.log(xu.childNodes[0]);
      
        
    }
    
    
};
