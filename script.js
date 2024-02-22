fetch("amarillo.json")
.then(resp => resp.json())
.then(data => console.log(data))