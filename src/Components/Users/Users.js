import "./user.css";
import { useSelector, useDispatch } from "react-redux";
import * as userAction from "../../Actions/userActions";

const users = () => {
  const dispatch = useDispatch();

  const unverifiedUsers = useSelector((state) => state.unverifiedUserList);

  const { users } = unverifiedUsers;

  // Grant Token
  const grantToken = (id) => {
    dispatch(userAction.grantArduinoToken(id));
  };

  return (
    <div className="users--container">
      <div className="title">
        <h1>Users</h1>
      </div>
      <div className="card-body">
        {users &&
          users.map((user) => {
            return (
              <div className="card">
                <div className="user-content">
                  <div className="img-holder">
                    <div className="bg-image"></div>
                  </div>
                  <div className="content-holder">
                    <h2 className="name">{user.name}</h2>
                    <h2 className="email">{user.email}</h2>
                  </div>
                </div>
                <div className="button" onClick={() => grantToken(user._id)}>
                  Grant Token
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default users;
