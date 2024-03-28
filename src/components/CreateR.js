import { useState } from "react";
import axios from "axios";

export default function Create(){
    const[title, setTitle] = useState();
    const[body, setBody] = useState();

    function createData(){
        let user = JSON.stringify({name:title, job:body})
        alert(user)

        axios.post('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => {
                console.log(response)
                alert(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="App">
            <form onSubmit={createData} className="form">
            <h1>FORMULÁRIO DE CADÁSTRO</h1>

            <input type="text"
            placeholder="Digite Title aqui"
            required
            value={title}
            onChange={(event) => {setTitle(event.target.value)}}/>

            <input type="text"
            placeholder="Digite Body aqui"
            required
            value={body}
            onChange={(event) => {setBody(event.target.value)}}/>

            <input type="submit"
            required />

            </form>
        </div>
    )
}