let redzsc = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/REDzHUB/BloxFruits/main/redz9999"))()'
let gtgsc = 'loadstring(game:HttpGet("https://isnahamzahpastebin.tech/gantenghubv1_new"))()'

function modalparam(script,scriptTitle){
    let judulScript = document.getElementById('exampleModalLabel')
    let isiScript = document.getElementById('REDzHUB')
    isiScript.textContent = (script)
    judulScript.textContent = (scriptTitle)
}


// Copy function start
function Copy() {
    let valueIsiScript = document.getElementById('REDzHUB').textContent
// Copy the text inside the text field
navigator.clipboard.writeText(valueIsiScript);
console.log(valueIsiScript)
}

// Copy function end

