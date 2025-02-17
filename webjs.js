const input = document.getElementById("name");
        const button = document.getElementById("displayname");
        const message = document.getElementById("message");

        let escapeCount = 0;
        let maxMoves = 3; 
        let moveRange = 200; 

        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && input.value.trim() !== "") {
                button.style.display = "block";
                escapeCount = 0; 
                message.innerText = ""; 
            }
        });

        button.addEventListener("mouseover", () => {
            if (escapeCount < maxMoves) {
                let x = Math.random() * moveRange * 2 - moveRange;
                let y = Math.random() * moveRange * 2 - moveRange; 
                button.style.transform = `translate(${x}px, ${y}px)`;
                escapeCount++;
            } else {
                button.style.transform = "translate(0, 0)"; 
            }
        });

        button.addEventListener("click", () => {
            button.innerText = "Argh! you caught me!";
            setTimeout(() => {
                button.innerText = "Click me";
                message.innerText = `Hello and welcome, ${input.value}!`;
            }, 2000);
        });