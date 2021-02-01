import React from 'react'

function TableBody(props) {
    const { result, index} = props
    console.log(result)
    return (
        <div>
            <div key={index}>
                
                <td><img alt="headshot" src={result.picture.medium} /></td>
                <td>{result.name.first} {result.name.last}</td>
                <td>{new Date(result.dob.date).toLocaleDateString()}</td>
                <td>{result.phone}</td>
            </div>
        </div>
    )
}

export default TableBody;