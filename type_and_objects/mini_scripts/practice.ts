interface Student {
  id: string;
  name: string;
  age: number;
  grade: string;
}

interface Course {
  code: string;
  name: string;
  credits: number;
  students: Student[];
}

const student1: Student = {
  id: "ICT-1206",
  name: "Bini Colet",
  age: 18,
  grade: "12th",
};

const mathCourse: Course = {
  code: "MATH101",
  name: "Introduction to Calculus",
  credits: 4,
  students: [],
};

function enrollStudent(student: Student, course: Course): void {
  course.students.push(student);
}

function printCourseDetails(
  course: Course,
  printStudent: (student: Student) => void
): void {
  console.log(
    `Course Code: ${course.code} | Course Name: ${course.name} | Credits: ${course.credits}`
  );
  console.log("Students Enrolled:");
  course.students.forEach((student) => {
    printStudent(student);
  });
}

const student2: Student = {
  id: "ICT-1206",
  name: "Adrian Naoe",
  age: 19,
  grade: "12th",
};

enrollStudent(student1, mathCourse);
enrollStudent(student2, mathCourse);

function printStudentDetails(student: Student): void {
  console.log(`- Name: ${student.name} | Grade: ${student.grade}`);
}

printCourseDetails(mathCourse, printStudentDetails);
