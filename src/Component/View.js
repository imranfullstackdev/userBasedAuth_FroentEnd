import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const [allUser, SetAlluser] = useState([]);
  const getUser = async () => {
    if(!localStorage.getItem('Token')){
      
      navigate('/')
    }else{
      const getAlluser = await fetch(`http://localhost:8000/get`,{
      headers:{
        autherization:localStorage.getItem('Token')
      }
    });
    const res = await getAlluser.json();
    console.log("userss",getAlluser)
    SetAlluser(res);
    }
    
    
  };

  // DeleteHandler
  const deleteHandler = async (id) => {
    window.confirm("are You sure You want");
    if (window.confirm) {
      console.log(id);
      const deleteUser = await fetch(`http://localhost:8000/dlt/${id}`, {
        method: "DELETE",
      });
      console.log(deleteUser);
      // alert('deleted Sucessfully')
      // window.location.reload()
    }
    // }

    // navigate()
    // window.lo
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(allUser.length);
  return (
    <>
      <h1>AllEmployee Details</h1>
      {allUser.length == 0 ? (
        <h1>THERE IS NO DATA AVAILABLE to Show</h1>
      ) : (
        <div id="tablesmooth">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>employeeid</th>
                <th>employeeName</th>
                <th>mobilenumber</th>
                <th>amobilenumber</th>
                <th>adharcard</th>
                <th>bankname</th>
                <th>bankbranch</th>
                <th>address1</th>
                <th>address2</th>
                <th>IFSC</th>
                <th>PAN</th>
                <th>PinCode</th>
                <th>emailadddress</th>
                <th>state</th>
                <th>district</th>
                <th>uan</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>

            <tbody>
              {allUser.map((user) => {
                console.log("user", user);
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.employeeid}</td>
                    <td>{user.employeename}</td>
                    <td>{user.mobilenumber}</td>
                    <td>{user.amobilenumber}</td>
                    <td>{user.adharcard}</td>
                    <td>{user.bankname}</td>
                    <td>{user.bankbranch}</td>
                    <td>{user.address1}</td>
                    <td>{user.address2}</td>
                    <td>{user.ifsc}</td>
                    <td>{user.pincode}</td>
                    <td>{user.pan}</td>
                    <td>{user.emailadddress}</td>
                    <td>{user.state}</td>
                    <td>{user.district}</td>
                    <td>{user.uan}</td>
                    <td onClick={() => navigate("/Edit", { state: user })}>
                      Edit
                    </td>
                    <td
                      onClick={() => {
                        deleteHandler(user.id);
                      }}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default View;
