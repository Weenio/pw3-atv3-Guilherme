import { useEffect, useState } from "react"
import axios from "axios";
import '../App.css';

function List(){
    const [datas,setDatas] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setDatas(response.data)
            console.log(response.data)
            console.log(datas);
        }
        )

        .catch((error)=>{
            console.log(error)
        })
    },[]);

    return(
        <div>
            {
                <div className='cardUser' key={datas.id}>
                    <h3> {datas.title} </h3>
                    <p>{datas.body}</p>
                </div>
            }
        </div>
    );  
}

export default List