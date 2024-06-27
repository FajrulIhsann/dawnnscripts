let redzsc = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BloxFruits/main/redz9999"))()'
let gantengsc = 'loadstring(game:HttpGet("https://isnahamzahpastebin.tech/gantenghubv1_new"))()'

function modalparam(script,scriptTitle){
    let judulScript = document.getElementById('exampleModalLabel')
    let isiScript = document.getElementById('REDzHUB')
    isiScript.textContent = (script)
    judulScript.textContent = (scriptTitle)
}

// showCopyNotification

function showSnackBar() {
    var sb = document.getElementById("snackbar");
  
    //this is where the class name will be added & removed to activate the css
    sb.className = "show";
  
    setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 2000);
  }

// Copy function start
function Copy() {
    let valueIsiScript = document.getElementById('REDzHUB').textContent
// Copy the text inside the text field
navigator.clipboard.writeText(valueIsiScript);
showSnackBar()
}

// Copy function end

