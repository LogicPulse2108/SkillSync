function showScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{
screen.classList.remove("active");
});

document.getElementById(id).classList.add("active");

document.getElementById("pageTitle").innerText =
id.charAt(0).toUpperCase()+id.slice(1);

}

function startDemo(){

const logs=[
"Parsing resume...",
"Extracting skills...",
"Searching jobs...",
"Analysing gaps...",
"Calculating coverage score...",
"Generating roadmap...",
"Drafting cover letters...",
"Preparing dashboard...",
"Completed successfully."
];

const logBox=document.getElementById("logBox");
logBox.innerHTML="";

let i=0;

const interval=setInterval(()=>{

if(i<logs.length){

const div=document.createElement("div");
div.textContent="✓ "+logs[i];
logBox.appendChild(div);

i++;

}else{

clearInterval(interval);

setTimeout(()=>{
showScreen("dashboard");
},500);

}

},380);

}

function approve(actionsId,cardId){

document.getElementById(actionsId).innerHTML=
'<span class="submitted">✓ Submitted</span>';

document.getElementById(cardId).style.opacity="0.65";

}