import { useState } from "react"
import { useLocalUser } from "./userData/LocalUser"
import { useMemo } from "react"
import { useCallback } from "react"

export const Dashboard=()=>{
    let {localUser,deleteUser,editUser} = useLocalUser()

    let [search, setSearch] = useState('')

    let [editId,setEditId] = useState(null)

    let [editForm,setEditForm] = useState({name:'',mobile:'',email:''})

    let filteredUsers = useMemo(()=>{
        return localUser.filter((person)=>person.userName.toLowerCase().includes(search.toLowerCase()))
    },[localUser,search])

    let handleData = useCallback((e)=>{
        setSearch(e.target.value)
    },[])

    let editUserId = (user)=>{
        setEditForm({name:user.userName,email:user.email,mobile:user.mobile})
        setEditId(user.id)
    }

    let updateData = (e)=>{
        e.preventDefault()
        editUser(editId,{userName:editForm.name,email:editForm.email,mobile:editForm.mobile})
        setEditForm({name:'',email:'',mobile:''})
        setEditId(null)
    }

    let closeEditModal = ()=>{
        setEditForm({name:'',email:'',mobile:''})
        setEditId(null)
    }
    
    return (<>
        <div className="row">
            <div className="col-4">
                <input type="text" value={search} className="form-control m-3 text-center" onChange={handleData}/>
            </div>
        </div>

        <table className="table table-striped table-hover table-light">
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map(person=>(
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.userName}</td>
                        <td>{person.email}</td>
                        <td>{person.mobile}</td>
                        <td><button type="button" className="btn btn-warning rounded p-2" onClick={()=>editUserId(person)}>✏️</button></td>
                        <td><button className="btn btn-danger rounded p-2" onClick={()=>deleteUser(person)}>🗑️</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

        {editId !== null && (
            <>
                <div className="modal-backdrop fade show"></div>
                <div className="modal fade show d-block" role="dialog" aria-modal="true" aria-labelledby="edit-user-title">
                    <div className="modal-dialog modal-dialog-centered">
                        <form className="modal-content" onSubmit={updateData}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="edit-user-title">Edit user details</h5>
                                <button type="button" className="btn-close" onClick={closeEditModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label className="form-label" htmlFor="edit-user-name">Name</label>
                                <input id="edit-user-name" className="form-control mb-3" type="text" value={editForm.name} onChange={(e)=>setEditForm({...editForm,name:e.target.value})} required />
                                <label className="form-label" htmlFor="edit-user-email">Email</label>
                                <input id="edit-user-email" className="form-control mb-3" type="email" value={editForm.email} onChange={(e)=>setEditForm({...editForm,email:e.target.value})} required />
                                <label className="form-label" htmlFor="edit-user-mobile">Mobile</label>
                                <input id="edit-user-mobile" className="form-control" type="tel" value={editForm.mobile} onChange={(e)=>setEditForm({...editForm,mobile:e.target.value})} required />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeEditModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )}
    </>)
}