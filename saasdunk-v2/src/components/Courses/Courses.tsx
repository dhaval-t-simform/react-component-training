import CoursesStyle from "./Courses.style";
import { images } from "../../config/images";
import { Select } from "antd";

const Courses = () => {
  const coursesData = [
    {
      courseId: "course-1",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-2",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-3",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-4",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-5",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-6",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-7",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-8",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-9",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-10",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-11",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
    {
      courseId: "course-12",
      courseLogo: images.courses.courseLogo1,
      coursePrice: "$120",
      courseTag: "Front End Development",
      courseSummary:
        "Complete Web Design: from Figma to Webflow to Freelancing",
      authorImg: images.student.student1,
      authorName: "Albert Mustang",
      authorRating: 4.7,
    },
  ];

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
            options={[
              {
                value: "all-categories",
                label: (
                  <div className="dropdown-options">
                    <p>All Categories</p>
                    <images.dashboard.downOutlined />
                  </div>
                ),
              },
              {
                value: "some-categories",
                label: (
                  <div className="dropdown-options">
                    <p>Some Categories</p>
                    <images.dashboard.downOutlined />
                  </div>
                ),
              },
              {
                value: "few-categories",
                label: (
                  <div className="dropdown-options">
                    <p>Few Categories</p>
                    <images.dashboard.downOutlined />
                  </div>
                ),
              },
            ]}
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
        ))}
      </div>
    </CoursesStyle>
  );
};

export default Courses;
