
function modalparam(script, scriptTitle) {
    let judulScript = document.getElementById('modalTitle')
    let isiScript = document.getElementById('scriptText')
    isiScript.textContent = (script)
    judulScript.textContent = (scriptTitle)

}

// showCopyNotification

function showSnackBar() {
    var sb = document.getElementById("snackbar");

    //this is where the class name will be added & removed to activate the css
    sb.className = "show";

    setTimeout(() => { sb.className = sb.className.replace("show", ""); }, 2000);
}

// Copy function start
function Copy() {
    let valueIsiScript = document.getElementById('scriptText').textContent
    // Copy the text inside the text field
    navigator.clipboard.writeText(valueIsiScript);

    showSnackBar()
}

// Copy function end

// Home Clock
function waktu() {
    let clock = document.getElementById('home-clock');
    const time = new Date()
    
    let detik = time.getSeconds()
    let menit = time.getMinutes()

    if(time.getSeconds() < 10){
        detik = '0'+ time.getSeconds()
    }
    if (time.getMinutes < 10) {
        menit = '0' + time.getMinutes()
    }

    clock.innerHTML = `${time.getHours()} : ${menit} : ${detik}`
}
setInterval(waktu,1000)
// Home Clock end