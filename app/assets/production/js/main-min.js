function ajax_action(e,r,t,o){let a=new XMLHttpRequest;a.open("POST",e,!0),a.onreadystatechange=function(){if(4===a.readyState)return 200===a.status&&(o(JSON.parse(a.response)),!0)},a.setRequestHeader("ajaxAction",t);const n=new FormData;for(index in r)n.append(index,r[index].value);a.send(n)}window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#submitProject");null!=e&&(e.onclick=()=>{const r={name:document.querySelector("#form-addProject #projectName"),startDate:document.querySelector("#form-addProject #startDate"),endDate:document.querySelector("#form-addProject #endDate"),categorie:document.querySelector("#form-addProject #categorie"),projectDesc:document.querySelector("#form-addProject #projectDesc"),projectOwner:document.querySelector("#form-addProject #projectOwner")};for(var e in r)r[e].style.borderColor="#16302b";1==(error=checkValidate(r))?ajax_action("../app/fonction/ajax.action.reception.php",r,"addproject",e=>{e[0]?changeReturnValue_project("Projet ajouté","valide"):1062==e[2][1]?(changeReturnValue_project("nom de projet déjà existant","error"),r.name.style.borderColor="red"):changeReturnValue_project("erreur, veuillez contacter un administrateur","error")}):(messageError="",error.forEach(e=>{e[0].style.borderColor="red",messageError+=e[1]+" | "}),changeReturnValue_project(messageError,"error"))})});