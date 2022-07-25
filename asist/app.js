fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
        let output = '';
        console.log(data)
        data.forEach(function (todo) {
        output += `
            <tr>
                <td> ${todo.id}</td> 
                <td> ${todo.name}</td>
                <td> ${todo.email}</td>
            </tr>
            `;
        });
        document.getElementById('ToDoList').innerHTML = output;
        return output;
    })

    // Apidagi xatolik uchun
    .catch(err => console.log('Something went wrong: ', err));