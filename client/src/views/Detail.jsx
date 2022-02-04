import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from '../components/Chart';

const Detail = ( ) => {

    const {reservoir} = useParams()
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${reservoir}/measurements`)
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    },[])

    return (
        <div>
            {
                data?(
                    <div>
                        <h1>{reservoir.toUpperCase()}</h1>
                        <Chart data={data} />
                        {/* <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Date</td>
                                    <td>Water Level (ft) </td>
                                    <td>Water Storage (acre-feet)</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((reservoir, i)=>(  //note: parenthesis allow for an implicit return; curly braces requires explicit return 
                                                <tr key={i}>
                                                    <td>{reservoir.Name}</td>
                                                    <td>{reservoir.DATE}</td>
                                                    <td>{reservoir.RES_ELE}</td>
                                                    <td>{reservoir.STORAGE}</td>
                                                </tr>
                                    ))
                                }
                            </tbody>
                        </table> */}
                    </div>
                ):
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default Detail;
