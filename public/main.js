console.log("Hello from client-side JavaScript!");

const updateCount = async () => {
    try {
        let data = await fetch("http://localhost:3002/data").then(response => response.json());
        let count = data.count;
        infoSpan = document.getElementById("info").textContent = count;
    }
    catch (err) {
        console.log(err)
    }
}

updateCount();


let button = document.getElementById("submit");
let input = document.getElementById("input");

const addEmail = () => {
    fetch("http://localhost:3002/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: input.value
      })
    }).then(()=>{
        window.location.reload();
    })
}

button.addEventListener("click", addEmail);

/*







​
input.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    addEmail();
  }
});

*/