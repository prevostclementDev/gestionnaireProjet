function checkValidate(e){var t=/(\d{4})-(\d{2})-(\d{2})/g;let r=[];if((255<e.name.value.length||""==e.name.value)&&r.push([e.name,"valeur du nom incorrect"]),e.startDate.value.match(t))if(""==e.endDate.value||e.endDate.value.match(t)){const a=new Date(e.startDate.value),o=new Date(e.endDate.value);a.getTime()>o.getTime()&&r.push([e.endDate,"date de fin avant date de début"])}else r.push([e.endDate,"date de fin non valide"]);else r.push([e.startDate,"date de début non valide"]);return""==e.projectOwner.value&&r.push([e.projectOwner,"propriétaire requis"]),!(0<r.length)||r}function ajax_action(e,t,r,a){let o=new XMLHttpRequest;o.open("POST",e,!0),o.onreadystatechange=function(){if(4===o.readyState)return 200===o.status&&(a(JSON.parse(o.response)),!0)},o.setRequestHeader("ajaxAction",r);const n=new FormData;for(index in t)n.append(index,t[index].value);o.send(n)}window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#submitProject");null!=e&&(e.onclick=()=>{const t={name:document.querySelector("#form-addProject #projectName"),startDate:document.querySelector("#form-addProject #startDate"),endDate:document.querySelector("#form-addProject #endDate"),categorie:document.querySelector("#form-addProject #categorie"),projectDesc:document.querySelector("#form-addProject #projectDesc"),projectOwner:document.querySelector("#form-addProject #projectOwner")};for(var e in t)t[e].style.borderColor="#16302b";1==checkValidate(t)?ajax_action("../app/fonction/ajax.action.reception.php",t,"addproject",e=>{e[0]?changeReturnValue_project("Projet ajouté","valide"):1062==e[2][1]?(changeReturnValue_project("nom de projet déjà existant","error"),t.name.style.borderColor="red"):changeReturnValue_project("erreur, veuillez contacter un administrateur","error")}):(error=checkValidate(t),messageError="",error.forEach(e=>{e[0].style.borderColor="red",messageError+=e[1]+" | "}),changeReturnValue_project(messageError,"error"))})});