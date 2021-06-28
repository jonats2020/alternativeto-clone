import React from "react";
import { useParams } from "react-router";
import { Typography, TextField } from "@material-ui/core";

import "./UserEdit.css";
import logo from "../../images/logo-new.svg";

function UserEdit() {
  const { id } = useParams();

  return (
    <div className="userEdit__container">
      <div className="userEdit__header">
        <img src={logo} alt="" />
      </div>

      <div className="userEdit__body">
        {/* section container */}
        <div className="section__container">
          {/* section for about yourself */}
          <div className="section">
            <div className="title">
              <Typography>About yourself</Typography>
              <div className="realName">
                <TextField variant="filled" size="small" />
                <TextField variant="filled" size="small" />
              </div>
            </div>
          </div>

          {/* section for other websites */}
          <div className="section">
            <div className="title">
              <Typography>Other websites</Typography>
            </div>
          </div>

          {/* section for notifications */}
          <div className="section">
            <div className="title">
              <Typography>Notifications</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
