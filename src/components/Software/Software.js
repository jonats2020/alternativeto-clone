import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Software.css";

import AlternativeCard from "../custom/AlternativeCard";
import db from "../../firebase";

function Software() {
  const { softwareId } = useParams();

  // STEP 1
  // state that stores data from firebase
  const [valuesFromFirebase, setValuesFromFirebase] = useState([]);

  const [alternativesArray, setAlternativesArray] = useState([]);

  // STEP 2
  // function that gets data from firebase
  const getData = () => {
    const softwares = db
      .collection("softwares")
      .get()
      .then(function (data) {
        // Saving values to state
        // 1. Create temp array
        let temporaryArray = [];

        data.docs.forEach(function (document) {
          // 2. Save each document using array.push()
          if (document.data().title === "Mozilla Firefox") {
            temporaryArray.push(document.data());
          }
        });

        // 3. Store temp array to state
        setValuesFromFirebase(temporaryArray);
      });
  };

  const getAlternativesData = () => {
    db.collection("softwares")
      .get()
      .then(softwares => {
        let tempArray = [];

        softwares.docs.forEach(document => {
          if (valuesFromFirebase[0].alternatives.includes(document.id)) {
            tempArray.push(document.data());
          }
        });

        setAlternativesArray(tempArray);
      });
  };

  // STEP 3
  // UseEffect hook that runs getData() function when
  // Software.js component is loaded
  useEffect(() => {
    getData();
  }, []);

  // UseEffect hooks that runs getAlternativesData() function when
  // valuesFromFirebase has data meaning on 2nd reload
  useEffect(() => {
    if (valuesFromFirebase.length > 0) {
      getAlternativesData();
    }
  }, [valuesFromFirebase]);

  if (valuesFromFirebase.length < 1) return <h1>Loading...</h1>;

  return (
    <div>
      {/* Navbar */}

      <div className="body">
        {/* Breadcrumbs */}

        <div className="software__detailsContainer">
          <div className="logoContainer">
            <img src={valuesFromFirebase[0].logo} alt="" height={130} />
          </div>

          <div className="descriptionContainer">
            <h2>{valuesFromFirebase[0].title}</h2>

            <br />

            <h3>Description</h3>

            <br />

            <p>{valuesFromFirebase[0].description}</p>
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
