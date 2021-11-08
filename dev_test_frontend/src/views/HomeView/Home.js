import React, { useState, useEffect } from 'react';
import Charts from '../components/Charts';
import SelectCharts from '../components/SelectCharts';
import axios from 'axios';
import properties from '../../properties';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
    let [chartsData, setChartsData] = useState("");
    let [selectData, setSelectData] = useState([]);

    // To fecth property data then update select options
    useEffect(() => {
        const featchSelectData = async () => {
            try {
                // Fetch property data
                let response = await axios.get('/api/property');
                
                setSelectData(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        featchSelectData();
    }, [])

    // To fecth property data by id then update chart data
    let selectedPropertyHandler = async (selected_property_id) => {
        try {
            let property = await axios.get(`/api/property/${selected_property_id}`);
            
            setChartsData(property.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Row>
            <Col className='text-center py-3'>
                <h1>Select property location</h1>
                <SelectCharts data={selectData} selectHandler={selectedPropertyHandler}/>
                <Charts data={chartsData} />
            </Col>
        </Row>
    )
}

export default Home
