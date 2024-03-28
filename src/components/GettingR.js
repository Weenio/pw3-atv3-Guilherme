import { useEffect, useState } from "react"
import axios from "axios";
import styles from '../App.css';

function Get(){
    const [datas,setDatas] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setDatas(response.data)
            console.log(response.data)
        }
        )

        .catch((error)=>{
            console.log(error)
        })
    },[]);

    return(
        <div className="centralizer">
            <div className="cardGrind">
                {
                    datas.map(data =>(
                            <div className="cardUser" key={data.id}>
                                <h3> {data.title} </h3>
                                <p>{data.body}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );  
}

export default Get