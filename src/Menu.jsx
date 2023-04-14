import { Fragment, useState } from "react";
import Course from "./components/Course";
import CourseItem from "./components/CourseItem";
import data from "./api/data";

function Menu() {
  console.log(data)
  return (
    <div id="menu-container" className="container">
      {data.map((item, index) => (
        <Fragment>
          <Course key={index} course={item["course"]} />
          {item["items"].map((dish, index) => (
            <CourseItem 
              key={index}
              dish={dish["dish"]}
              description={dish["description"]}
              price={dish["price"]} 
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default Menu;
