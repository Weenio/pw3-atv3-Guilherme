import axios from "axios";

export default function Delete(){

    function deleteData(){
        axios.post('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'DELETE',
        });
    }

    return(
        <div className="App">
            <form onSubmit={deleteData} className="form">
            <h1>Apagar registro de ID 1?</h1>

            <input type="submit"
            required />

            </form>
        </div>
    )
}