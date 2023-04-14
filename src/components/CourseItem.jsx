function CourseItem({ dish, description, price }) {
  return (
    <div className="row menu-item">
      <div className="col-4 dish">
        {dish}
      </div>
      <div className="col-8 border-bottom-dashed">
        <div className="row">
          <div className="col-10 description">
            {description}
          </div>
          {price &&
            <div className="col-2 price">
              {price}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default CourseItem
