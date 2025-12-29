
import { useEffect, useState } from 'react';

const useFetch = (url) =>{

    const [Items,setItemlist] = useState([]);
     const [error , setError] = useState(null);

    useEffect(()=>{
    
                
                    
                
    
                fetch(url)
                .then(response =>{
                    if(!response.ok){
                        throw Error('could not connet to the data')
    
    
                    }
                    
                    return response.json()
                }).then(data => setItemlist(data))
                .catch((error)=>{
                    console.log(error.message)
                    setError(error.message)
                })

    
    
               
            },[]);


            return [Items,error,setItemlist]
}

export default useFetch;