const body=document.querySelector("body"),containerPopUp=(task_list_open(),document.querySelector("#containerPopUp")),popUp_Projet=document.querySelector("#containerPopUp .add_project_popUp"),btn_popUp_Projet=document.querySelector("#add_project"),btn_Close_PopUp_projet=document.querySelector("#AddcloseProject");function changeReturnValue_project(e,t){const o=document.querySelector("#containerPopUp .add_project_popUp #response");"error"==t?(o.classList.add("error"),o.classList.remove("valide")):"valide"==t&&(o.classList.remove("error"),o.classList.add("valide")),o.innerHTML=e}function checkValidate(e){var t=/(\d{4})-(\d{2})-(\d{2})/g;let o=[];if((255<e.name.value.length||""==e.name.value)&&o.push([e.name,"valeur du nom incorrect"]),e.startDate.value.match(t))if(""==e.endDate.value||e.endDate.value.match(t)){const n=new Date(e.startDate.value),a=new Date(e.endDate.value);n.getTime()>a.getTime()&&o.push([e.endDate,"date de fin avant date de début"])}else o.push([e.endDate,"date de fin non valide"]);else o.push([e.startDate,"date de début non valide"]);return""==e.projectOwner.value&&o.push([e.projectOwner,"propriétaire requis"]),!(0<o.length)||o}function task_list_open(){const e=document.querySelector("#add_list_btn"),t=document.querySelector("#ajoutList-menu");null!=e&&e.addEventListener("click",function(){t.classList.toggle("active")})}null!=btn_popUp_Projet&&(btn_popUp_Projet.addEventListener("click",function(){body.style.overflow="hidden",containerPopUp.classList.add("active"),popUp_Projet.classList.add("active")}),btn_Close_PopUp_projet.addEventListener("click",function(){body.style.overflow="auto",containerPopUp.classList.remove("active"),popUp_Projet.classList.remove("active")}));