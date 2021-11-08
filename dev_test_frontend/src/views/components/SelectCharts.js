import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectChartsOptions from './SelectChartsOptions';


const SelectCharts = (props) => {
    let [selectedProperty, setSelectedProperty] = useState("");
    
    // Handles select input for any changes
    let selectedPropertyHandler = (event) =>{
        // Update select value
        setSelectedProperty(event.target.value);
        
        // If user selected a a new property, update chart
        if(event.target.value !== "0"){
            props.selectHandler(event.target.value);
        }
    }

    return (
        <Form.Select size="sm" onChange={selectedPropertyHandler} value={selectedProperty} aria-label="Select a property">
            <option value="0">Select a property</option>
            {props.data.map((propertyData) => (
                <SelectChartsOptions data ={propertyData} key ={propertyData._id}/>
            ))}
        </Form.Select>
    )
}

export default SelectCharts
