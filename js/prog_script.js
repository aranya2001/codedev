function showIDE() {
    let lang = document.getElementById("languages").value;
    let ide = document.getElementById("editor");
    if(lang == 'python') {
        ide.innerHTML = '<iframe id="python" src="https://trinket.io/embed/python3/44c2e53ff7?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>'
    }
    else if(lang == 'java') {
        ide.innerHTML = '<iframe id="java" src="https://trinket.io/embed/java/9407397b05" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>'
    }
    else {
        ide.innerHTML = '<iframe id="r" src="https://trinket.io/embed/R/c29e17a28b?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>'
    }
}