import React from 'react';
import './Calculate.css'

const Calculate = (props) => {
    console.log(props.data);
    const id = (10 + Math.random() * 10000);
    let totalCourseFee = 0;
    props.data.map(fee => totalCourseFee = (totalCourseFee + fee))
    return (
        <div className='calculate'>
            <div>
                <h4>Selected: {props.data.length}</h4>
                <table className="table">
                    <tr>
                        <th></th>
                        <th>Price</th>
                    </tr>
                 
                    {props.data.map(data =>
                        <tr>
                            <td>Price</td>
                            <td>{data}</td>
                        </tr>
                    )}
                    <tr>
                        <th>Total =</th>
                        <th>{totalCourseFee}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Calculate;