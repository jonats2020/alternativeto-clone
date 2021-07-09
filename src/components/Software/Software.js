import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Software.css";

import AlternativeCard from "../custom/AlternativeCard";
import db from "../../firebase";

function Software() {
  const { softwareId } = useParams();

  // state that stores data from firebase
  const [valuesFromFirebase, setValuesFromFirebase] = useState([]);

  // function that gets data from firebase
  const getData = () => {
    db.collection("softwares")
      .get()
      .then(softwares => {
        let tempArray = [];

        softwares.forEach(software => {
          tempArray.push(software.data());
        });

        setValuesFromFirebase(tempArray);
      });
  };

  // UseEffect hook that runs getData() function when
  // Software.js component is loaded
  useEffect(() => {
    getData();
  }, []);

  console.log(valuesFromFirebase);

  return (
    <div>
      {/* Navbar */}

      <div className="body">
        {/* Breadcrumbs */}

        <div className="software__detailsContainer">
          <div className="logoContainer">
            <img
              src="https://alternative.me/media/256/firefox-icon-wj0j37ztyzta8chp-c.png"
              alt=""
              height={130}
            />
          </div>

          <div className="descriptionContainer">
            <h2>Firefox</h2>

            <br />

            <h3>Description</h3>

            <br />

            <p>
              Firefox is one of the most popular web browsers in the world, and
              it has a beautiful aesthetic that is fortified with exceptional
              privacy, speed, and the ability to sync between a desktop and
              mobile device. What's interesting is that the version for the
              iPhone is actually just Safari with a different interface shell
              that provides a few new functions, but the core rendering code is
              still that of Safari. While the iPhone version is quite nice, it
              lacks some of the polish found in the Windows and Android
              versions.
            </p>
          </div>
        </div>

        <div className="alternativesContainer">
          <h2>Alternatives to Firefox</h2>

          <AlternativeCard
            logoUrl="https://alternative.me/media/256/opera-mini-icon-5irh8q23w1pu0zn2-c.png"
            description="Opera Mini pera mobile browsers are among the world’s most popular web browsers. Download for free to browse faster and save data on your phone or tablet."
            title="Opera Mini"
          />

          <AlternativeCard
            logoUrl="https://alternative.me/media/256/maxthon-cloud-browser-icon-cuaxxogb3pk0j4er-c.png"
            description="Maxthon provides you with the fastest web browser available for Windows, Android, iOS, macOS, PC, Mobile Phone, Mac, iPhone and iPad. Download Maxthon Browser for Free."
            title="Maxthon Cloud Browser"
          />

          <AlternativeCard
            logoUrl="https://alternative.me/media/256/brave-icon-f76adt1ez10lzz2g-c.png"
            description="Brave software is a browser that enables you to browse without receiving ads that violate your privacy and waste your time and money. Ads have become a significant problem in recent times as greedy..."
            title="Brave"
          />
        </div>
      </div>
    </div>
  );
}

export default Software;
