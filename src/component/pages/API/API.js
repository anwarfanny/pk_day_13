import React,{ useState, useEffect} from "react"
import Table from "../../component/table/table"
import axios from '../../../../node_modules/axios/dist/axios.js'
const API = () => {
    const {StarWar, setStarWar} = useState([])
    // const [data, setData] = useState({})
    const fetcchApi = async () => {
         await axios
         .get("https://swapi.dev/api/people")
         .then((response) =>{
             console.log(response.data.result)
         })
         .catch ((error) =>{
             console.log(error)
         })
    }

    useEffect(() =>{
        fetcchApi()
    }, [])
    return (
        <div>
           <h1>API page</h1>
           {/* <buttonclassName='btn btn-primary mb-3 onClick={fetchApi}>
           fecht Data 
    </button> */}
    <Table starwar={StarWar} />
        </div>
    )
}
export default API