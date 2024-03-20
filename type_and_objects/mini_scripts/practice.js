var student1 = {
    id: "ICT-1206",
    name: "Bini",
    age: 18,
    grade: "12th",
};
var mathCourse = {
    code: "MATH101",
    name: "Introduction to Calculus",
    credits: 4,
    students: [],
};
function enrollStudent(student, course) {
    course.students.push(student);
}
function printCourseDetails(course, printStudent) {
    console.log("Course Code: ".concat(course.code, " | Course Name: ").concat(course.name, " | Credits: ").concat(course.credits));
    console.log("Students Enrolled:");
    course.students.forEach(function (student) {
        printStudent(student);
    });
}
var student2 = {
    id: "ICT-1206",
    name: "Adrian Naoe",
    age: 19,
    grade: "12th",
};
enrollStudent(student1, mathCourse);
enrollStudent(student2, mathCourse);
function printStudentDetails(student) {
    console.log("- Name: ".concat(student.name, " | Grade: ").concat(student.grade));
}
printCourseDetails(mathCourse, printStudentDetails);
