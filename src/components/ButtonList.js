import React from "react";
import Button from "./Button";

const lists = [
  "All",
  "Music",
  "Songs",
  "Live",
  "Cricket",
  "Soccer",
  "News",
  "Gym",
];

export const ButtonList = () => {
  return (
    <div className="flex">
      {lists.map((list) => (
        <Button key={list} name={list} />
      ))}
    </div>
  );
};
