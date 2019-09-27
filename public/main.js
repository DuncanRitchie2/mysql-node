console.log("Hello from client-side JavaScript!");

const updateCount = async () => {
    try {
        let data = await fetch("http://localhost:3002/data");
        let count = data.count;
        countP = document.getElementById("count").textContent = count;
    }
    catch {

    }
}

updateCount();