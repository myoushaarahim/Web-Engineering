let textbox = document.getElementById("textbox");

textbox.addEventListener("select", displaySelectedText);
textbox.addEventListener("keyup", displaySelectedText);

function displaySelectedText() {

    let selectedText = textbox.value.substring(
        textbox.selectionStart,
        textbox.selectionEnd
    );

    document.getElementById("output").innerHTML = selectedText;
}