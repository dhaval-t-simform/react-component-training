import CoursesStyle from "./Courses.style";
import { images } from "../../config/images";
import { Select } from "antd";
import { courseCategoryOptions, coursesData } from "../../dummyData";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <CoursesStyle>
      <div className="page-head">
        <div className="page-header">
          <h2 className="page-name">Page Name</h2>
          <p className="page-summary">
            My courses for
            <span> All Categories</span>
          </p>
        </div>
        <div className="page-end">
          <Select
            className="select"
            suffixIcon={null}
            defaultValue="all-categories"
            style={{ width: "17rem", height: "4rem" }}
            onChange={handleChange}
            options={courseCategoryOptions}
          />
          <button className="filter-button">
            <images.courses.filter />
          </button>
          <div className="toggle-view">
            <button className="button-view selected-view">
              <images.student.studentTileView />
            </button>
            <button className="button-view">
              <images.student.studentListView />
            </button>
          </div>
        </div>
      </div>
      <div className="courses-card-container">
        {coursesData.map((data) => (
          <CourseCard data={data} />
        ))}
      </div>
    </CoursesStyle>
  );
};

export default Courses;
