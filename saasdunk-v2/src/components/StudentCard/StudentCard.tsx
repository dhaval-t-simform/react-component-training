import { images } from "../../config/images";
import StudentCardStyle from "./StudentCard.style";

const StudentCard = ({ data }) => {
  return (
    <StudentCardStyle>
      <div className="student-card" key={data.studentId}>
        <img src={data.studentImage} alt={data.studentName} />
        <p className="student-name">{data.studentName}</p>
        <p className="student-email">{data.studentEmail}</p>
        <button>View Profile</button>
        {<images.student.threeDots />}
      </div>
    </StudentCardStyle>
  );
};

export default StudentCard;
