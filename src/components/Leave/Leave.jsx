import React, { useState } from "react";
import Modal from "../../helpers/Modal";
import { useFetchEmployeeDetails } from "../../helpers/Api";
import './Leave.css'
import Chart from "../../helpers/Chart";

function Leave() {
    const { employeeData, loading, error } = useFetchEmployeeDetails();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const openEmployeeModal = (employee) => {
        setSelectedEmployee(employee);
        openModal();
    };

    const closeEmployeeModal = () => {
        setSelectedEmployee(null);
        closeModal();
    };

    const filteredEmployees = searchQuery && employeeData ? employeeData.filter((employee) =>
        employee.emp_name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    const cardStyle = { width: "18rem" };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>    
        <h1>Employees</h1>
        <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="d-flex flex-wrap m-4">
        {searchQuery ? (
            filteredEmployees.map((employee, index) => (
                <div key={`${employee.emp_id}-${index}`} className="card-search" onClick={() => openEmployeeModal(employee.emp_name)} style={cardStyle}>
                    <h4 className="card-img-top" >{employee.emp_id}</h4>
                    <div className="card-body">
                        <div className="card-title h5">{employee.emp_name}</div>
                    </div>
                    {selectedEmployee === employee.emp_name && (
                        <Modal isOpen={isOpen} toggle={closeModal}>
                            <h2>{employee.emp_name}</h2>
                            <Chart />
                        </Modal>
                    )}
                </div>
            ))
        ) : (
            <>
                <div className="card" onClick={() => openEmployeeModal("karthik")} style={cardStyle}>
                    <img className="card-img-top" onClick={openModal} src="https://avatars.githubusercontent.com/u/86754409" alt="image" />
                    <div className="card-body">
                        <div className="card-title h5">{employeeData[0].emp_name}</div>
                    </div>
                </div>
                {selectedEmployee === "karthik" && (
                    <Modal isOpen={isOpen} toggle={closeModal}>
                        <h2>{employeeData[0].emp_name}</h2>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{employeeData[0].emp_name}</td>
                            </tr>
                            <tr>
                                <td>user Id</td>
                                <td>{employeeData[0].emp_id}</td>
                            </tr>
                            <tr>
                                <td>picture</td>
                                <td>https://avatars.githubusercontent.com/u/86754409</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>{employeeData[0].emp_designation}</td>
                            </tr>
                            <tr>
                                <td>Project under</td>
                                <td>{employeeData[0].project}</td>
                            </tr>
                            <tr>
                                <td>number of leaves</td>
                                <td>{employeeData[0].emp_leaves}</td>
                            </tr>
                        </table>
                    </Modal>
                )}
                <div className="card" onClick={() => openEmployeeModal("somnath")} style={cardStyle}>
                    <img className="card-img-top" src="https://avatars.githubusercontent.com/u/83047765" alt="image" />
                    <div className="card-body">
                        <div className="card-title h5">{employeeData[1].emp_name}</div>
                    </div>
                </div>
                {selectedEmployee === "somnath" && (
                    <Modal isOpen={isOpen} toggle={closeModal}>
                        <h2>{employeeData[1].emp_name}</h2>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{employeeData[1].emp_name}</td>
                            </tr>
                            <tr>
                                <td>user Id</td>
                                <td>{employeeData[1].emp_id}</td>
                            </tr>
                            <tr>
                                <td>picture</td>
                                <td>https://avatars.githubusercontent.com/u/83047765</td>
                            </tr>
                            <tr>
                                <td>Project Under</td>
                                <td>{employeeData[1].project}</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>{employeeData[1].emp_designation}</td>
                            </tr>
                            <tr>
                                <td>number of leaves</td>
                                <td>{employeeData[1].emp_leaves}</td>
                            </tr>
                        </table>
                    </Modal>
                )}
                <div className="card" onClick={() => openEmployeeModal("pat cummins")} style={cardStyle}>
                    <img className="card-img-top" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg" alt="image" />
                    <div className="card-body">
                        <div className="card-title h5">{employeeData[2].emp_name}</div>
                    </div>
                </div>
                {selectedEmployee === "pat cummins" && (
                    <Modal isOpen={isOpen} toggle={closeModal}>
                        <h2>{employeeData[2].emp_name}</h2>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{employeeData[2].emp_name}</td>
                            </tr>
                            <tr>
                                <td>user Id</td>
                                <td>{employeeData[2].emp_id}</td>
                            </tr>
                            <tr>
                                <td>picture</td>
                                <td>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg</td>
                            </tr>
                            <tr>
                                <td>Project Under</td>
                                <td>{employeeData[2].project}</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>{employeeData[2].emp_designation}</td>
                            </tr>
                            <tr>
                                <td>number of leaves</td>
                                <td>{employeeData[2].emp_leaves}</td>
                            </tr>
                        </table>
                    </Modal>
                )}
                <div className="card" onClick={() => openEmployeeModal("travis head")} style={cardStyle}>
                    <img className="card-img-top" src="https://avatars.githubusercontent.com/u/83047765" alt="image" />
                    <div className="card-body">
                        <div className="card-title h5">{employeeData[3].emp_name}</div>
                    </div>
                </div>
                {selectedEmployee === "travis head" && (
                    <Modal isOpen={isOpen} toggle={closeModal}>
                        <h2>{employeeData[3].emp_name}</h2>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{employeeData[3].emp_name}</td>
                            </tr>
                            <tr>
                                <td>user Id</td>
                                <td>{employeeData[3].emp_id}</td>
                            </tr>
                            <tr>
                                <td>picture</td>
                                <td>https://avatars.githubusercontent.com/u/83047765</td>
                            </tr>
                            <tr>
                                <td>Project Under</td>
                                <td>{employeeData[3].project}</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>{employeeData[3].emp_designation}</td>
                            </tr>
                            <tr>
                                <td>number of leaves</td>
                                <td>{employeeData[3].emp_leaves}</td>
                            </tr>
                        </table>
                    </Modal>
                )}
                <div className="card" onClick={() => openEmployeeModal("nitish kumar reddy")} style={cardStyle}>
                    <img className="card-img-top" src="https://avatars.githubusercontent.com/u/83047765" alt="image" />
                    <div className="card-body">
                        <div className="card-title h5">{employeeData[4].emp_name}</div>
                    </div>
                </div>
                {selectedEmployee === "nitish kumar reddy" && (
                    <Modal isOpen={isOpen} toggle={closeModal}>
                        <h2>{employeeData[4].emp_name}</h2>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{employeeData[4].emp_name}</td>
                            </tr>
                            <tr>
                                <td>user Id</td>
                                <td>{employeeData[4].emp_id}</td>
                            </tr>
                            <tr>
                                <td>picture</td>
                                <td>https://avatars.githubusercontent.com/u/83047765</td>
                            </tr>
                            <tr>
                                <td>Project Under</td>
                                <td>{employeeData[4].project}</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>{employeeData[4].emp_designation}</td>
                            </tr>
                            <tr>
                                <td>number of leaves</td>
                                <td>{employeeData[4].emp_leaves}</td>
                            </tr>
                        </table>
                    </Modal>
                )}
                <div className="card" onClick={() => openEmployeeModal("AbhishiekSharma")} style={cardStyle}>
                    <img className="card-img-top" src="https://avatars.githubusercontent.com/u/83047765" alt="image" />
                    <div className="card-body">
                        <div className="card-title h5">{employeeData[5].emp_name}</div>
                    </div>
                </div>
                {selectedEmployee === "AbhishiekSharma" && (
                    <Modal isOpen={isOpen} toggle={closeModal}>
                        <h2>{employeeData[5].emp_name}</h2>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{employeeData[5].emp_name}</td>
                            </tr>
                            <tr>
                                <td>user Id</td>
                                <td>{employeeData[5].emp_id}</td>
                            </tr>
                            <tr>
                                <td>picture</td>
                                <td>https://avatars.githubusercontent.com/u/83047765</td>
                            </tr>
                            <tr>
                                <td>Project Under</td>
                                <td>{employeeData[5].project}</td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td>{employeeData[5].emp_designation}</td>
                            </tr>
                            <tr>
                                <td>number of leaves</td>
                                <td>{employeeData[5].emp_leaves}</td>
                            </tr>
                        </table>
                    </Modal>
                )}
            </>
        )}
        </div>
        </>
    );
}

export default Leave;
