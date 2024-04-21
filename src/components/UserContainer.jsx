import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const UserContainer = ({ fetchUsers, userData }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userData.loading ? (
        <h3>Loading...</h3>
      ) : userData.error ? (
        <h3>{userData.error}</h3>
      ) : (
        userData?.users?.map((user, index) => {
          return <h4 key={index}>{user.name}</h4>;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
