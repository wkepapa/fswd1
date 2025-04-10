function hidebio(){
    const bio=document.getElementById("bio");
    const but=document.getElementById("but");
    if( bio.style.display==="none"){
        bio.style.display="block";
        but.innerText="Hide-Bio"
    }else{
        bio.style.display="none";
          but.innerText="Show-Bio";
    }
   
}
function Projsea(){
      const seabox=document.getElementById("seabox");
      const searchval=seabox.value.toLowerCase();
      const projects=document.querySelectorAll(".project");
      projects.forEach(project=>{
        const title=project.querySelector("h3").innerText.toLowerCase();
        if(title.includes(searchval)){
            project.style.display="block";
        }else{
            project.style.display="none";
        }
      })
}