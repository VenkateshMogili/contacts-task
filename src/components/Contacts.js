import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllContacts, getSingleContact, deleteContact} from '../redux/actions/contacts-action';
import AddEditContact from './AddEditContact';

function Contacts({getAllContacts, contacts, getSingleContact, contact, deleteContact}) {
  useEffect(() => {
    getAllContactsData();
  });

  const getAllContactsData = () => {
    getAllContacts();
  };
  const handleDelete = (index) => {
    const confirm = window.confirm('Are you sure want to delete?');
    if (confirm) {
      deleteContact(index);
    }
  };
  return (
    <div>
      <div className="container d-flex flex-row justify-content-between mt-4">
        <h1>All Contacts</h1>
        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          +Add Contact
        </button>
      </div>
      <div className="container mt-4">
        {contacts.length === 0 && <p className="text-danger text-center">No Contacts Found!</p>}
        {contacts.length > 0 && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => getSingleContact(index)}>
                      Edit
                    </button>{' '}
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <AddEditContact editContactData={contact} />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact: (index) => dispatch(getSingleContact(index)),
    deleteContact: (index) => dispatch(deleteContact(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
