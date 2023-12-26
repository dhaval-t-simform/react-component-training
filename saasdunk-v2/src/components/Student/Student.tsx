import StudentStyle from "./Student.style";
import { images } from "../../config/images";
import { studentData } from "../../dummyData";
import StudentCard from "../StudentCard/StudentCard";

const Student = () => {
  return (
    <StudentStyle>
      <div className="page-head">
        <div className="page-header">
          <h2 className="page-name">Page Name</h2>
          <div className="rectangle">68</div>
        </div>
        <div className="view">
          <div className="toggle-view">
            <button className="button-view selected-view">
              <images.student.studentTileView />
            </button>
            <button className="button-view">
              <images.student.studentListView />
            </button>
          </div>
          <div className="something"></div>
        </div>
      </div>
      <div className="student-card-container">
        {studentData.map((data) => (
          <StudentCard data={data} />
        ))}
      </div>
    </StudentStyle>
  );
};

export default Student;
