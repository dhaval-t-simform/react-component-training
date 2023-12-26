import { images } from "../../config/images";
import CourseCardStyle from "./CourseCard.style";

const CourseCard = ({ data }) => {
  console.log(data);
  return (
    <CourseCardStyle>
      <div className="course-card" key={data.courseId}>
        <div className="card-head">
          <img src={data.courseLogo} alt="Course Logo" />
          <span>{data.coursePrice}</span>
        </div>
        <span className="course-tag">{data.courseTag}</span>
        <p className="course-desc">{data.courseSummary}</p>
        <div className="author-desc">
          <img src={data.authorImg} alt={data.authorName} />
          <p>{data.authorName}</p>
        </div>
        <div className="card-foot">
          <div className="card-rating">
            <images.courses.star />
            <p>4.7</p>
          </div>
          <button>View Course</button>
        </div>
      </div>
    </CourseCardStyle>
  );
};

export default CourseCard;
