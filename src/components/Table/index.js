import React from 'react'
import TableBody from "./TableBody"

function Table(props) {
    const { results } = props
    
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {results?.map((result, index) => (
                        <TableBody result={result} index={index}/>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}

export default Table;