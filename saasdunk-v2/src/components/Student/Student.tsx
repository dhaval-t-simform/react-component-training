import StudentStyle from "./Student.style";
import { images } from "../../config/images";

const Student = () => {
  const studentData = [
    {
      studentId: "student-1",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-2",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-3",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-4",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-5",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-6",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-7",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-8",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-9",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-10",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-11",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
    {
      studentId: "student-12",
      studentImage: images.student.student1,
      studentName: "Albert Mustang",
      studentEmail: "albertmustangggg@mail.com",
    },
  ];

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
          <div className="student-card" key={data.studentId}>
            <img src={data.studentImage} alt={data.studentName} />
            <p className="student-name">{data.studentName}</p>
            <p className="student-email">{data.studentEmail}</p>
            <button>View Profile</button>
            {<images.student.threeDots />}
          </div>
        ))}
      </div>
    </StudentStyle>
  );
};

export default Student;
