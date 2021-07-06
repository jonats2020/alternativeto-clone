import React, { useState } from "react";
import { useParams } from "react-router";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";

import "./UserEdit.css";
import logo from "../../images/logo-new.svg";
import db from "../../firebase";

function UserEdit() {
  const { id } = useParams();

  const [valuesToUpload, setValuesToUpload] = useState({});

  const handleUpdateValues = (fieldName, value) => {
    setValuesToUpload({ ...valuesToUpload, [fieldName]: value });
  };

  console.log(valuesToUpload);

  const saveToFirebase = () => {
    db.collection("persons").add(valuesToUpload);
  };

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
              <div className="titleText">
                <Typography>About yourself</Typography>
              </div>
            </div>

            <Typography variant="body1">Real Name</Typography>
            <div className="realName">
              <TextField
                variant="filled"
                size="small"
                placeholder="first name"
                onChange={e => handleUpdateValues("firstName", e.target.value)}
              />

              <TextField
                variant="filled"
                size="small"
                placeholder="last name"
                onChange={e => handleUpdateValues("lastName", e.target.value)}
              />
            </div>

            <Typography
              variant="body1"
              style={{
                marginTop: 20,
              }}
            >
              Bio
            </Typography>
            <TextField
              variant="filled"
              multiline
              rows={4}
              onChange={e => handleUpdateValues("bio", e.target.value)}
              fullWidth
            />

            <Typography variant="body1" style={{ marginTop: 20 }}>
              Where are you from?
            </Typography>

            <TextField
              variant="filled"
              size="small"
              placeholder="Pick a city"
              fullWidth
              onChange={e => handleUpdateValues("city", e.target.value)}
            />

            <Typography variant="body1" style={{ marginTop: 20 }}>
              User Image
            </Typography>

            <div className="userImage">
              <input type="file" name="" id="" />

              <img src={null} alt="No Image" width={150} height={150} />
            </div>
          </div>

          {/* section for other websites */}
          <div className="section">
            <div className="title">
              <div className="titleText">
                <Typography>Other websites</Typography>
              </div>
            </div>

            <Typography variant="body1">Twitter</Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("twitter", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Enter without @
            </Typography>

            <Typography variant="body1" style={{ marginTop: 20 }}>
              LinkedIn Profile URL
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("linkedin", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Your LinkedIn URL in the form
              https://www.linkedin.com/in/username/
            </Typography>

            {/* Reddit */}
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Reddit
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("reddit", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Your reddit username if you have one
            </Typography>

            {/* Github */}
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Github
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("github", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Github username if you have one
            </Typography>

            {/* Youtube */}
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Youtube
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("youtube", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Youtube username if you have one
            </Typography>

            {/* Instagram */}
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Instagram
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("instagram", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Instagram username if you have one
            </Typography>

            {/* Webpage */}
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Website
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              style={{
                marginBottom: 0,
              }}
              onChange={e => handleUpdateValues("website", e.target.value)}
            />
            <Typography
              variant="caption"
              style={{
                paddingTop: 0,
              }}
            >
              Promote your blog, website or something else supported by the http
              protocol
            </Typography>
          </div>

          {/* section for notifications */}
          <div className="section">
            <div className="title">
              <div className="titleText">
                <Typography>Notification Settings</Typography>
              </div>
            </div>

            <Typography variant="body1" style={{ marginTop: 20 }}>
              Send me an email if someone...
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  name="checkedA"
                  checked={valuesToUpload.sendPublicMessage}
                />
              }
              label="Sends me a public message"
              onChange={e =>
                handleUpdateValues("sendPublicMessage", e.target.checked)
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  checked={valuesToUpload.sendPrivateMessage}
                />
              }
              label="Sends me a private message"
              onChange={e =>
                handleUpdateValues("sendPrivateMessage", e.target.checked)
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="checkedC"
                  checked={valuesToUpload.applicationApproved}
                />
              }
              label="An application I submitted is approved"
              onChange={e =>
                handleUpdateValues("applicationApproved", e.target.checked)
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="checkedD"
                  checked={valuesToUpload.messageDiscussion}
                />
              }
              label="Post a message after me in a discussion"
              onChange={e =>
                handleUpdateValues("messageDiscussion", e.target.checked)
              }
            />
          </div>

          <div className="section">
            <Button
              variant="contained"
              color="primary"
              onClick={saveToFirebase}
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
