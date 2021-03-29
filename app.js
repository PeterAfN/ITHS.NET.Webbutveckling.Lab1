"use strict";

// const classroom = document.querySelector(".container-classroomcourses");
// const ondemand = document.querySelector(".container-ondemandcourses");

// getClassroomCoursesData();
// getOnDemandCoursesData();

// function getClassroomCoursesData() {
//   fetch("http://localhost:3000/klassrumskurser")
//     .then((response) => response.json())
//     .then((data) => printHTMLClassroomCourses(data));
// }

// function getOnDemandCoursesData() {
//   fetch("http://localhost:3000/ondemandkurser")
//     .then((response) => response.json())
//     .then((data) => printHTMLOnDemandCourses(data));
// }

// function printHTMLClassroomCourses(indata) {
//   indata.forEach((course) => {
//     classroom.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div class="box" id="box-1">
//         <ul>
//             <li class="course-list-item-1">Kurs: ${course.title}</li>
//             <li>Beskrivning: ${course.description}</li>
//             <li>Kategori: ${course.category}</li>
//             <li>Längd: ${course.length} h</li>
//             <li>Kurstyp: Klassrumsundervisning</li>
//             <li>Kursnummer: ${course.courseNumber}</li>
//         </ul>
//       </div>
//       `
//     );
//   });
// }

// function printHTMLOnDemandCourses(indata) {
//   indata.forEach((course) => {
//     ondemand.insertAdjacentHTML(
//       "beforeend",
//       `
//           <div class="box" id="box-1">
//             <ul>
//                 <li class="course-list-item-1">Kurs:${course.title}</li>
//                 <li>Beskrivning: ${course.description}</li>
//                 <li>Kategori: ${course.category}</li>
//                 <li>Längd: ${course.length} h</li>
//                 <li>Kurstyp: On-Demand, nedladdningsbar</li>
//                 <li>Kursnummer: ${course.courseNumber}</li>
//             </ul>
//           </div>
//           `
//     );
//   });
// }

const coursesTableContent = document.querySelector('#courses-table-content');
const tableView = document.querySelector('#tableView');
// const addVehicleView = document.querySelector('#addVehicle-container');
// const searchInput = document.querySelector('#searchInput');
// const searchButton = document.querySelector('#searchButton');
// const saveButton = document.querySelector('#save');
// const regNoInput = document.querySelector('#regNoInput');
// const makeInput = document.querySelector('#makeInput');
// const modelInput = document.querySelector('#modelInput');
// const modelYearInput = document.querySelector('#modelYearInput');
// const mileageInput = document.querySelector('#mileageInput');
// const valueInput = document.querySelector('#valueInput');
// const addNewButton = document.querySelector('#addNewVehicle');

getClassroomCoursesData();
getOnDemandCoursesData();

function getClassroomCoursesData() {
  fetch("http://localhost:3000/klassrumskurser")
    .then((response) => response.json())
    .then((data) => createClassroomCoursesTable(data));
}

function getOnDemandCoursesData() {
  fetch("http://localhost:3000/ondemandkurser")
    .then((response) => response.json())
    .then((data) => createOnDemandCoursesTable(data));
}


function createClassroomCoursesTable(courses){
  coursesTableContent.innerHTML = '';
  for (let course of courses) {
    createClassroomCoursesRow(course);
  }
}

function createOnDemandCoursesTable(courses){
  coursesTableContent.innerHTML = '';
  for (let course of courses) {
    createOnDemandCoursesRow(course);
  }
}

function createClassroomCoursesRow(course){
  coursesTableContent.insertAdjacentHTML(
    'beforeend',
    `
        <tr>
          <td>${course.id}</td>
          <td>${course.title}</td>
          <td>${course.description}</td>
          <td>${course.category}</td>
          <td>${course.length}</td>
          <td>Klassrumskurs</td>
          <td>${course.courseNumber}</td>
        </tr>
      `
  );
}

function createOnDemandCoursesRow(course){
  coursesTableContent.insertAdjacentHTML(
    'beforeend',
    `
        <tr>
          <td>${course.id}</td>
          <td>${course.title}</td>
          <td>${course.description}</td>
          <td>${course.category}</td>
          <td>${course.length}</td>
          <td>On-Demand</td>
          <td>${course.courseNumber}</td>
        </tr>
      `
  );
}