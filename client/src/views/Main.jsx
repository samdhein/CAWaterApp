import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Chart from '../components/Chart'
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
    

//index route
useEffect(()=>{
    axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        .catch(err=>console.log(err))
},[])

    return (
        <div>
            <div>
                <h1>California Water Resource Availability</h1>
                <h2>Message from backend: {message} </h2>
                <p>
                    Much of California's water comes from a few key sources. 
                    How much water is available within key storage facilities at this point in the water year?
                </p>
                <p>Lake Oroville</p>
                <p>Shasta Lake</p>
                <p>Trinity Lake</p>
                <img src='./imgs/ca_outline.jpg' alt='california outline'></img>
                <p>
                    In California, the State Water Project collects runoff from wet regions of the state for distribution to dry-region farms
                    and urban centers. After more than a century of development, most Californians depend upon the state's extensive
                    water conveyance infrastructure to meet their basic needs. 
                </p>

                {/* <CreateForm reloadList={reloadList} /> */}
                {/* <DisplayTable refresh={refresh} reloadList={reloadList}/> */}
            </div>
        </div>
    );
}

export default Main;
