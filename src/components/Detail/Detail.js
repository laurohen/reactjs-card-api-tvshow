import React, { useState } from "react";
import s from "./Detail.module.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
const url = process.env.REACT_APP_BASEURL;

const Detail = ({ match }) => {
  const [item, setItem] = useState([]);

  const getItem = async () => {
    const id = match.params.id;
    const { data } = await axios.get(`${url}episodes/${id}?embed=show`);
    console.log("result :"  , data);
    setItem(data);
  };
  if (item.length === 0) {
    getItem();
  }
  const { image, name, summary, airdate, _embedded } = item;

  return (
    <>
      <Helmet>
        <title>{`${name}`} - Detail Page</title>
        <meta name="description" content={summary} />
      </Helmet>
      <div className="container mt-5">
        <div className="row">
          <Card style={{ width: "100%" }}>
            <div className={s.Wrapper}>
              <Card.Img
                className={s.cardImage}
                src={
                  image?.original ||
                  "https://source.unsplash.com/random/230x338"
                }
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Genre : {_embedded?.show.genres}</Card.Title>
                <Card.Title>Airdate : {airdate}</Card.Title>
                <Card.Text>{summary?.replace(/<.*?>/gm, "")}</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default withRouter(Detail);
