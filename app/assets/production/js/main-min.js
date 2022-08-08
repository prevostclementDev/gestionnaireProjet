function ajax_action(e,t,r,o){let n=new XMLHttpRequest;n.open("POST",e,!0),n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status&&(o(JSON.parse(n.response)),!0)},n.setRequestHeader("ajaxAction",r);const a=new FormData;for(index in t)"string"==typeof t[index]||t[index]instanceof String?a.append(index,t[index]):a.append(index,t[index].value);n.send(a)}function confirmePopUp(e,t,r,o){const n=document.querySelector("#containerPopUp"),a=document.querySelector("#confirmationBox"),c=document.querySelector("#confirmationBox #validation"),i=document.querySelector("#confirmationBox #annulation"),d=document.querySelector("#confirmationBox h2 span");d.innerHTML=e,n.classList.add("active"),a.classList.add("active"),c.onclick=()=>{n.classList.remove("active"),a.classList.remove("active"),loader(),ajax_action("fonction/ajax.action.reception.php",r,t,o)},i.onclick=()=>{n.classList.remove("active"),a.classList.remove("active")}}function eventFor_finishProject(){const e=document.querySelector("#finishProject");null!=e&&(e.onclick=()=>{confirmePopUp("finir le projet","finishProject",PostValue={delete:e.getAttribute("attr_slug")},e=>{"true"==e?(changePage("projets-finish",document.querySelector("#page-content"),document.querySelector("#navigationHeader .Hlink.projets-finish")),setTimeout(()=>{AddreturnIndication("Projet validé avec succès !","valide")},350)):AddreturnIndication("erreur lors de la finalisation du projet","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})})}function eventFor_deleteProject(){null!=(deleteProject=document.querySelector("#deleteProject"))&&(deleteProject.onclick=()=>{confirmePopUp("supprimer le projet","deleteProject",PostValue={delete:deleteProject.getAttribute("attr_slug")},e=>{"true"==e?(changePage("projets-now",document.querySelector("#page-content"),document.querySelector("#navigationHeader .Hlink.projets-now")),setTimeout(()=>{AddreturnIndication("Projet supprimé avec succès !","valide")},350)):AddreturnIndication("erreur lors de la suppression du projet","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})})}function eventFor_addList(){null!=(addList=document.querySelector("#addListToProject"))&&(addList.onclick=()=>{document.querySelector("#add_list").style.borderColor="#16302b",""!=document.querySelector("#add_list").value?(loader(),ajax_action("fonction/ajax.action.reception.php",PostValue={slug:addList.getAttribute("attr_slug"),listName:document.querySelector("#add_list").value},"addList",e=>{"true"==e?(initProjetPage(PostValue.slug,document.querySelector("#page-content")),setTimeout(()=>{AddreturnIndication("Liste ajoutée !","valide")},350)):AddreturnIndication("erreur lors de l'ajout de la liste","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})):document.querySelector("#add_list").style.borderColor="red"})}function eventFor_deleteList(){const e=document.querySelectorAll("#RemoveList");0!=e.length&&e.forEach(e=>{e.onclick=()=>{confirmePopUp("supprimer la list","deleteList",PostValue={id_list:e.getAttribute("id_list"),slug:e.getAttribute("project_slug")},e=>{"true"==e?(initProjetPage(PostValue.slug,document.querySelector("#page-content")),setTimeout(()=>{AddreturnIndication("Liste supprimée !","valide")},350)):AddreturnIndication("erreur lors de la suppression de la liste","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})}})}function eventFor_addTask(){null!=(addTask=document.querySelector("#submittask"))&&(addTask.onclick=()=>{""!=document.querySelector("#taskName").value?(document.querySelector("#containerPopUp").classList.remove("active"),document.querySelector(".add_taskPopUp").classList.remove("active"),document.querySelector("body").style.overflow="auto",loader(),ajax_action("fonction/ajax.action.reception.php",PostValue={slug:addTask.getAttribute("project_slug"),id_list:addTask.getAttribute("id_list"),taskname:document.querySelector("#taskName").value,taskowner:document.querySelector("#taskOwner").value,taskdesc:document.querySelector("#taskdesc").value},"addTask",e=>{"true"==e?(initProjetPage(PostValue.slug,document.querySelector("#page-content")),setTimeout(()=>{AddreturnIndication("Tâche ajoutée !","valide")},350)):(AddreturnIndication("erreur lors de l'ajout de la tâche","error"),changeReturnValue_task("erreur lors de l'ajout de la tâche","error")),setTimeout(()=>{loader(),AffreturnIndication()},350)})):changeReturnValue_task("Nom de la tâche obligatoire","error")})}function eventFor_valideTask(){const e=document.querySelectorAll(".valideTask");0!=e.length&&e.forEach(e=>{e.onclick=()=>{confirmePopUp("valider la tâche","finishTask",PostValue={id_task:e.getAttribute("id_task"),slug:e.getAttribute("project_slug")},e=>{"true"==e?(initProjetPage(PostValue.slug,document.querySelector("#page-content")),setTimeout(()=>{AddreturnIndication("Tâche validée !","valide")},350)):AddreturnIndication("erreur lors de la validation de la tâche","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})}})}function eventFor_unvalideTask(){const e=document.querySelectorAll(".unvalideTask");0!=e.length&&e.forEach(e=>{e.onclick=()=>{confirmePopUp("invalider la tâche","unfinishTask",PostValue={id_task:e.getAttribute("id_task"),slug:e.getAttribute("project_slug")},e=>{"true"==e?(initProjetPage(PostValue.slug,document.querySelector("#page-content")),setTimeout(()=>{AddreturnIndication("Tâche invalidée !","valide")},350)):AddreturnIndication("erreur lors de la invalidation de la tâche","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})}})}function eventFor_deleteTask(){const e=document.querySelectorAll(".deleteTask");0!=e.length&&e.forEach(e=>{e.onclick=()=>{confirmePopUp("supprimer la tâche","deleteTask",PostValue={id_task:e.getAttribute("id_task"),slug:e.getAttribute("project_slug")},e=>{"true"==e?(initProjetPage(PostValue.slug,document.querySelector("#page-content")),setTimeout(()=>{AddreturnIndication("Tâche supprimée !","valide")},350)):AddreturnIndication("erreur lors de la supression de la tâche","error"),setTimeout(()=>{loader(),AffreturnIndication()},350)})}})}function AddreturnIndication(e,t){let r=document.querySelector("#returnInfo"),o=document.querySelector("#returnInfo .close");r.classList.forEach(e=>{r.classList.remove(e)}),r.classList.add(t),document.querySelector("#returnInfo p").innerHTML=e,o.onclick=()=>{r.classList.toggle("active")}}function AffreturnIndication(){const e=document.querySelector("#returnInfo");setTimeout(()=>{e.classList.toggle("active")},350)}function basicSearchOnList(){const e=document.querySelector("#searchProjectByName");null!=e&&(e.onclick=()=>{const t=document.querySelector("#searchProject").value,e=document.querySelectorAll(".projet");e.forEach(e=>{e.getAttribute("attr_nameProject").includes(t)?e.style.display="block":e.style.display="none"})})}function advencedSearch(){const e=document.querySelector("#advencedSearch");null!=e&&(e.onclick=()=>{var e=document.querySelector("#searchProject").value;const t=document.querySelector("#page-content");loader(),window.scrollTo(0,0),document.title="Gestionnaire projets | search",requestPage("search-"+e,e=>{t.classList.forEach(e=>{t.classList.remove(e)}),t.classList.add("view-list"),t.innerHTML=e,projetCall(t),basicSearchOnList(),advencedSearch(),window.history.pushState({direction:"search"},"search",window.location.origin+baseUrl+"search"),loader()})})}window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#submitProject");null!=e&&(e.onclick=()=>{const t={name:document.querySelector("#form-addProject #projectName"),startDate:document.querySelector("#form-addProject #startDate"),endDate:document.querySelector("#form-addProject #endDate"),categorie:document.querySelector("#form-addProject #categorie"),projectDesc:document.querySelector("#form-addProject #projectDesc"),projectOwner:document.querySelector("#form-addProject #projectOwner")};for(var e in t)t[e].style.borderColor="#16302b";1==(error=checkValidate(t))?ajax_action("fonction/ajax.action.reception.php",t,"addproject",e=>{e[0]?changeReturnValue_project("Projet ajouté","valide"):1062==e[2][1]?(changeReturnValue_project("nom de projet déjà existant","error"),t.name.style.borderColor="red"):changeReturnValue_project("erreur, veuillez contacter un administrateur","error")}):(messageError="",error.forEach(e=>{e[0].style.borderColor="red",messageError+=e[1]+" | "}),changeReturnValue_project(messageError,"error"))}),eventFor_finishProject(),eventFor_deleteProject(),eventFor_addList(),eventFor_deleteList(),eventFor_addTask(),eventFor_valideTask(),eventFor_unvalideTask(),eventFor_deleteTask(),basicSearchOnList(),advencedSearch()});