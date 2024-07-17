const form = document.querySelector("#clientinfo");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const update = {
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value,
        cpf: document.querySelector('#cpf').value,
        date_of_birth: document.querySelector('#date').value,
        email: document.querySelector('#email').value,
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };
    sendData(options);

    async function sendData(options) {
        try {
            const response = await fetch('http://localhost:8080/api/v1/clients', options);
            console.log(await response.json());
        } catch (e) {
            console.error(e);
        }
    }
});