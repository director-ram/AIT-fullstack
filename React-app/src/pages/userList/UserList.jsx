// performance optimization hooks
// useMemo and useCallback
// which helps to avoid uneccassary re-renders
// it remembers the function defination of a component when it gets updates until unless dependency changes.

import axios from "axios";
import { useCallback } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./UserList.css";

export default function UserList() {
  let [users, setUsers] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    async function fetch() {
      let { data } = await axios.get("https://dummyjson.com/user");
      setUsers(data.users);
    }
    fetch();
  }, []);

  let filterData = useMemo(() => {
    return users.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [users, search]);

  let handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);


//to delete
let handleDelete = useCallback((id)=>{
        setUsers(users.filter(user=>user.id !== id))
},[users])

// to edit
let handleChangeFirstName = useCallback((id, value) => {
  setUsers((currUsers) =>
    currUsers.map((user) =>
      user.id === id ? { ...user, firstName: value } : user,
    ),
  );
}, []);

let handleChangeLastName = useCallback((id, value) => {
  setUsers((currUsers) =>
    currUsers.map((user) =>
      user.id === id ? { ...user, lastName: value } : user,
    ),
  );
}, []);

let handleChangeEmail = useCallback((id, value) => {
  setUsers((currUsers) =>
    currUsers.map((user) =>
      user.id === id ? { ...user, email: value } : user,
    ),
  );
}, []);

let handleChangePhone = useCallback((id, value) => {
  setUsers((currUsers) =>
    currUsers.map((user) =>
      user.id === id ? { ...user, phone: value } : user,
    ),
  );
}, []);

  return (
    <>
      <center>
        <h2>User List</h2>
      </center>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <label
          htmlFor="search"
          className="container my-3 fs-3 text-danger text-center"
        >
          Search here
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="form-control border-3 text-warning w-25"
          placeholder="Enter a name"
          onChange={handleSearch}
        />
      </div>

      <div className="container text-center">
        <div className="row  my-4">
          <div className="text-center">
            <table className="user-table">
              <thead className="border border-2 rounded col-5">
                <tr className="col-3">
                  <th>S.no</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th className="phone-cell">Phone</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="border border-2 rounded">
                {filterData.map((users) => (
                  <tr className="border border-2 rounded" key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td className="phone-cell">{users.phone}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-solid btn-warning"
                        onClick={(event) =>
                          event.currentTarget.nextElementSibling.showModal()
                        }
                      >
                        Edit
                      </button>

                      <dialog className="dialog" data-bs-theme="dark">
                        <div className="dialog-header">
                          <h3 className="dialog-title">Edit details</h3>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={(event) =>
                              event.currentTarget.closest("dialog").close()
                            }
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="dialog-body">
                          <input type="text" value={users.firstName} className="form-control p-2 my-2 text-center text-warning" onChange={(e)=>handleChangeFirstName(users.id,e.target.value)}/>
                          <input type="text" value={users.lastName} className="form-control p-2 my-2 text-center text-warning"onChange={(e)=>handleChangeLastName(users.id,e.target.value)}/>
                          <input type="text" value={users.email} className="form-control p-2 my-2 text-center text-warning" onChange={(e)=>handleChangeEmail(users.id,e.target.value)}/>
                          <input type="text" value={users.phone} className="form-control p-2 my-2 text-center text-warning" onChange={(e)=>handleChangePhone(users.id,e.target.value)}/>
                        </div>
                        <div className="dialog-footer p-4 m-3">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(event) =>
                              event.currentTarget.closest("dialog").close()
                            }
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary mx-3"
                            onClick={(event) =>
                              event.currentTarget.closest("dialog").close()
                            }
                          >
                            Save changes
                          </button>
                        </div>
                      </dialog>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>handleDelete(users.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
