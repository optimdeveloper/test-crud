import React from "react";

// Styles
import "./style.scss";

// Images
import PlaceholderImg from "../../img/placeholder-user.jpg";
import SortIcon from "../../img/sort-icon.png";

const DataTable = props => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              <span className="column-sort">
                Image
                <img src={SortIcon} alt="First Name" />
              </span>
            </th>
            <th
             
            >
              <span className="column-sort">
                Title
                <img src={SortIcon} alt="Last Name" />
              </span>
            </th>
            <th>
              <span className="column-sort">
                Description
                <img src={SortIcon} alt="Last Name" />
              </span>
            </th>
            <th
             
            >
              <span className="column-sort">
                Price
                <img src={SortIcon} alt="E-Mail" />
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length ? (
            props.users.map(user => (
              <tr key={user.id}>
                  <td>{user.id}</td>
                <td className="field-avatar">
                  <img
                    src={user.image ? process.env.REACT_APP_IMAGE+'/public/Image/'+user.image : PlaceholderImg}
                    alt={user.image}
                  />
                </td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>{user.price}</td>
                <td className="field-actions">
                  <button
                    className="primary-btn"
                    onClick={() => {
                      props.updateRow(user);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="field-actions__delete"
                    onClick={() => props.deleteRow(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
