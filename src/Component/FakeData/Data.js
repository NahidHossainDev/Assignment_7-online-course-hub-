class Course {
  constructor(image, title, ratting, p, weeks, hrs, catagori, price) {
    this.image = image;
    this.title = title;
    this.ratting = ratting;
    this.p = p;
    this.weeks = weeks;
    this.hrs = hrs;
    this.catagori = catagori;
    this.price = price;
  }
}

const crs1 = new Course(
  "https://i.postimg.cc/G2tV2pr6/copy-Writing.jpg",
  "Copyright and the Business of Creative Industries",
  4,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Business",
  109
);
const crs2 = new Course(
  "https://i.postimg.cc/vmZbrbbt/digital-Marketing.jpg",
  "Digital Skills: Digital Marketing",
  4.7,
  "Learn about some of the different digital marketing strategies and techniques that are available for businesses to use.",
  4,
  3,
  "Business",
  90
);
const crs3 = new Course(
  "https://i.postimg.cc/8cjSqHjJ/digital-Mobile.jpg",
  "Digital Skills: Mobile",
  4.6,
  "Learn about mobile design, development and creating mobile experiences, as well as bigger concepts related to mobile technology",
  3,
  4,
  "IT",
  50
);
const crs4 = new Course(
  "https://i.postimg.cc/KzKbWfKK/retail.jpg",
  "Digital Skills: Retail",
  4,
  "Discover the impact digital technology is having on the retail industry and what it means for customers.",
  3,
  2,
  "Business",
  60
);
const crs5 = new Course(
  "https://i.postimg.cc/T2DGqkMF/rubby.jpg",
  "Digital Skills: Social Media",
  4,
  "Learn how to use social media for business, from creating a social media presence to measuring success",
  2,
  1,
  "Business",
  65
);
const crs6 = new Course(
  "https://i.postimg.cc/g0sbj5hL/computer-Programming.jpg",
  "Computer Programming for Everyone",
  3,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Programming",
  77
);
const crs7 = new Course(
  "https://i.postimg.cc/fLbn9K72/programmingeveryone.jpg",
  "Programming for Everybody (Getting Started with Python)",
  3.5,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Programming",
  100
);
const crs8 = new Course(
  "https://i.postimg.cc/cJkZT2Jy/Computer-Science.jpg",
  "Programming 102: Think Like a Computer Scientist",
  4,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Programming",
  90
);
const crs9 = new Course(
  "https://i.postimg.cc/d04gwCM8/python.jpg",
  "Networking with Python: Socket Programming for Communication",
  3.4,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Programming",
  88
);
const crs10 = new Course(
  "https://i.postimg.cc/cH5qMnXs/javascript.jpg",
  "Learn Javascript",
  5,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Coding"
);
const crs11 = new Course(
  "https://i.postimg.cc/d0wKqvhK/networking-Python.jpg",
  "Learn Python Basic to Advance",
  4.4,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Coding",
  95
);
const crs12 = new Course(
  "https://i.postimg.cc/2yhDk57r/Djanngo.jpg",
  "Learn Django Basic to Advance",
  4.5,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Coding",
  50
);
const crs13 = new Course(
  "https://i.postimg.cc/kXPCjx74/java.jpg",
  "Learn Java Basic to Advance",
  5,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Coding",
  45
);
const crs14 = new Course(
  "https://i.postimg.cc/SsZ4T5Nb/social-Media.jpg",
  "Learn Rubby Basic to Advance",
  4,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Coding",
  60
);
const crs15 = new Course(
  "https://i.postimg.cc/Nj4Q25q0/C.jpg",
  "Learn C## Basic to Advance",
  4.4,
  "Explore the role of copyright in the creative and cultural industries.",
  4,
  3,
  "Coding",
  75
);

const Data = [
  crs1,
  crs2,
  crs3,
  crs4,
  crs5,
  crs6,
  crs7,
  crs8,
  crs9,
  crs10,
  crs11,
  crs12,
  crs13,
  crs14,
  crs15,
];

export default Data;
