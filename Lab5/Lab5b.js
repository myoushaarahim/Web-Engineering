function replaceWithTextbox() {

    let container = document.getElementById("container");

    container.innerHTML = `
        <input type="text" id="newTextBox">
        <button onclick="replaceWithTextbox()">New Entry</button>
    `;
}