import { images } from "./config/images";

export const row1CardData = [
  {
    cardHeading: "Realtime Users",
    cardValue: "553",
    cardPer: "+21.01",
    incdec: images.dashboard.icIncrease,
    graph: images.dashboard.realtimeGraph,
  },
  {
    cardHeading: "Total Visits",
    cardValue: "32.12",
    cardPer: "+10.01",
    incdec: images.dashboard.icIncrease,
    graph: images.dashboard.totalVisitsGraph,
  },
  {
    cardHeading: "Visit Duration",
    cardValue: "1m 8s",
    cardPer: "-12.01",
    incdec: images.dashboard.icDecrease,
    graph: images.dashboard.visitDuration,
  },
  {
    cardHeading: "Bounce Rate",
    cardValue: "21.2",
    cardPer: "+21.01",
    incdec: images.dashboard.icIncrease,
    graph: images.dashboard.bounceRate,
  },
];
export const marketingCardData = [
  {
    cardHeading: "New Visitor",
    cardValue: "42",
    cardPer: "+21.01",
    incdec: images.dashboard.icIncrease,
  },
  {
    cardHeading: "New Customer",
    cardValue: "$41,000",
    cardPer: "-21.01",
    incdec: images.dashboard.icDecrease,
  },
  {
    cardHeading: "Reach",
    cardValue: "3241",
    cardPer: "-8.01",
    incdec: images.dashboard.icDecrease,
  },
];
export const dashboardMarketingOptions = [
  {
    value: "new-visitor",
    label: (
      <div className="dropdown-options">
        <span className="rectangle"></span>
        <p>New Visitor</p>
        <images.dashboard.downOutlined />
      </div>
    ),
  },
  {
    value: "new-customer",
    label: (
      <div className="dropdown-options">
        <span className="rectangle"></span>
        <p>New Customer</p>
        <images.dashboard.downOutlined />
      </div>
    ),
  },
  {
    value: "reach",
    label: (
      <div className="dropdown-options">
        <span className="rectangle"></span>
        <p>Reach</p>
        <images.dashboard.downOutlined />
      </div>
    ),
  },
];
export const coursesData = [
  {
    courseId: "course-1",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-2",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-3",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-4",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-5",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-6",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-7",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-8",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-9",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-10",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-11",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
  {
    courseId: "course-12",
    courseLogo: images.courses.courseLogo1,
    coursePrice: "$120",
    courseTag: "Front End Development",
    courseSummary: "Complete Web Design: from Figma to Webflow to Freelancing",
    authorImg: images.student.student1,
    authorName: "Albert Mustang",
    authorRating: 4.7,
  },
];

export const courseCategoryOptions = [
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
];
export const studentData = [
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
