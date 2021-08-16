const body = document.querySelector('body')

const secondChild = document.getElementById('main')
body.removeChild(secondChild)

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";