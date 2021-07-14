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
  // UseEffect hook that runs getData() function when Software.js component is loaded
  //
  // ComponentDidMount();
  useEffect(() => {
    db.collection("softwares")
      .where("title", "==", "Mozilla Firefox")
      // .doc('uUEML1Y8Z5Bzwg7Vvgpq')
      .get()
      .then(function (results) {
        if (results.docs.length > 0) {
          setValuesFromFirebase(results.docs[0].data());
        }

        // setValuesFromFirebase(results.data());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // UseEffect hooks that runs getAlternativesData() function when
  // valuesFromFirebase has data meaning on 2nd reload
  useEffect(() => {
    if (valuesFromFirebase.length > 0) {
      db.collection("softwares")
        .get() // 1. Get all softwares
        .then(results => {
          let tempArray = [];

          // 2. Loop through each document
          results.docs.forEach(document => {
            // 3. Check if firefox.alternatives has this document.id
            if (
              valuesFromFirebase.alternatives.includes(document.data().title)
            ) {
              // 4. Store the document in temp
              tempArray.push(document.data());
            }
          });

          // 5. Save all document in temp to state
          setAlternativesArray(tempArray);
        });
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
            <img src={valuesFromFirebase.logo} alt="" height={130} />
          </div>

          <div className="descriptionContainer">
            <h2>{valuesFromFirebase.title}</h2>

            <br />

            <h3>Description</h3>

            <br />

            <p>{valuesFromFirebase.description}</p>
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
