import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Chart from '../components/Chart'
import './css/views.css';

// import CreateForm from '../components/CreateForm';
// import DisplayTable from '../components/DisplayTable';

// get info from backend (axios)
// get info when loading (useEffect)
// variable will change when we get the data from backend (state)

const Main = ( ) => {

    const [message, setMessage] = useState("Loading...")
    const [refresh, setRefresh] = useState(false)
    const data2 = []

    const reloadList = () =>{
        setRefresh(!refresh)
    }
    

// //index route
// useEffect(()=>{
//     axios.get('http://localhost:8000/api')
//         .then(res=>setMessage(res.data.message))
//         .catch(err=>console.log(err))
// },[])

    return (
        <div className='container'>
            <div>
                <h1>California Water Resource Availability</h1>
                {/* <h2>Message from backend: {message} </h2> */}
                <p>
                    How much water is currently stored in California's key reservoirs?
                </p>
                <div className='box'>
                    <img src='./imgs/ca_outline_reservoirs.jpg' alt='california outline' height="450px"></img>
                    <div>
                        <div><Link to={"/trinity"}>Trinity Lake</Link></div>
                        <div><Link to={"/shasta"}>Shasta Lake</Link></div>
                        <div><Link to={"/oroville"}>Lake Oroville</Link></div>
                        <div><Link to={"/sanluis"}>San Luis Reservoir</Link></div>
                        <div><Link to={"/cachuma"}>Cachuma Lake</Link></div>
                        <div><Link to={"/castaic"}>Castaic Lake</Link></div>
                        <p>TBU:</p>
                        <ul>
                            <li>New Melones</li>
                            <li>Don Pedro</li>
                            <li>Millerton</li>
                            <li>Berryessa</li>
                        </ul>
                    </div>
                </div>
                <p>
                    California's State Water Project and the federal government's Central Valley Project collect runoff from California's wet regions 
                    for distribution to farms and urban centers in dry regions. After more than a century of public investment in water storage and 
                    conveyance infrastructure, most Californians today rely upon water imports originating from a small handful of distant reservoirs.
                </p>

                {/* <CreateForm reloadList={reloadList} /> */}
                {/* <DisplayTable refresh={refresh} reloadList={reloadList}/> */}
            </div>
        </div>
    );
}

export default Main;
