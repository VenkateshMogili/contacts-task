import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {filterContacts} from '../redux/actions/contacts-action';
function Header({filterContacts}) {
  const [ searchInput, setSearchInput ] = useState('');
  useEffect(
    () => {
      filterContacts(searchInput);
    },
    [ searchInput ],
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          Contacts
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
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
    filterContacts: (searchInput) => dispatch(filterContacts(searchInput)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
