import React, { useState } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ListGroup , Badge , Button } from 'react-bootstrap';
const url = process.env.REACT_APP_BASEURL;
const tvShow = process.env.REACT_APP_TV_SHOW;

const ListEpisodes = ({ idShow }) => {

  const [item, setItem] = useState([]);

  const getItem = async () => {
    console.log(idShow);
    const id = idShow;
    console.log("get data episodes");
    const { data } = await axios.get(`${url}shows/${id}/episodes`);
    console.log("result :"  , data);
    setItem(data);
  };
  if (item.length === 0) {
    getItem();
  }
  const {summary} = item;

  return (
    <>
      <Helmet>
        <title>{`${tvShow}`} - Detail Page</title>
        <meta name="description" content={summary} />
      </Helmet>
      <div className="container mt-5">
        <div className="row">
          {item.map((item) => (
            <ListGroup>
              <ListGroup.Item>
                Season : {item.season} <Badge bg="secondary">Num : {item.number}</Badge>
              </ListGroup.Item>
              <ListGroup.Item>Name : {item.name}</ListGroup.Item>
              <Button variant="warning" href={`/detail/${item.id}`}>Detail</Button>{' '}
              <br/>
            </ListGroup>
          ))}
        </div>
      </div>
    </>
  );

  
};

ListEpisodes.propTypes = {};

ListEpisodes.defaultProps = {};

export default withRouter(ListEpisodes);
