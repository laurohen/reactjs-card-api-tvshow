import React from "react";
import { Card } from "react-bootstrap";
import s from "./Card.module.css";
import ListEpisodes from "../ListEpisodes/ListEpisodes";

const Cards = ({ item }) => {
  return (
    <>
      <Card className={s.card}>
        <Card.Img
          className={s.cardImage}
          variant="top"
          src={
            item.show.image
              ? item.show.image.original
              : "https://source.unsplash.com/random/148x218"
          }
        />
        <Card.Body>
          <Card.Title className={s.cardTitle}>{item.show.name}</Card.Title>
          <Card.Text className={s.cardText}>
            {item.show.summary?.replace(/<.*?>/gm, "")}
          </Card.Text>
          <ListEpisodes idShow={item.show.id} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
