import React from 'react'

const SelectChartsOptions = (props) => {
    return (
        <option value={props.data._id}>{props.data.propertyName}</option>
    )
}

export default SelectChartsOptions
