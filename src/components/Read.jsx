import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [apiData, setApiData] = useState([]);
    const getData = () => {
        axios
            .get(
                "https://crudcrud.com/api/5534a09d56dd41009046b3622b6318ca/StudenData"
            )
            .then((response) => {
                setApiData(response.data);
            });
    };
    useEffect(() => {
        getData();
    }, [apiData]);
    console.log(apiData);
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center bg-info mt-5">Student Data</h1>
                        <div className="mb-2 mt-2">
                            <Link to={'/create'}>
                                <button className="btn btn-info">Create New Data</button>
                            </Link>
                        </div>
                    <table className="table table-bordered table-striped table-hover table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Age}</td>
                                            <td>{item.Email}</td>
                                            <td>
                                                <button className="btn btn-primary">Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary">Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Read;
