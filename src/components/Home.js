import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemList } from "../store/actions";
import Helmet from "react-helmet";
import Cards from "./Card/Card";
const tvShow = process.env.REACT_APP_TV_SHOW;

const Home = () => {

  const item = useSelector((state) => state.List);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      if (data.length == 0 && item) {
        await dispatch(getItemList());
        return setData(item);
      }
    };

    fetchData();
  });

  return (
    <>
      <Helmet>
        <title>See details of the TV show and its episodes - {tvShow}</title>
        <meta name="description" content="See details of the TV show and its episodes" />
      </Helmet>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div
              className="col-lg-3 col-sm-12 col-md-6 col-xs-12 mt-5"
              key={Math.random()}
            >
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
