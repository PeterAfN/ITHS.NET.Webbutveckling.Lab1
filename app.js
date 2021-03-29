"use strict";

const coursesTableContent = document.querySelector("#courses-table-content");
const tableView = document.querySelector("#tableView");

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

function createClassroomCoursesTable(courses) {
  for (let course of courses) {
    createClassroomCoursesRow(course);
  }
}

function createOnDemandCoursesTable(courses) {
  for (let course of courses) {
    createOnDemandCoursesRow(course);
  }
}

function createClassroomCoursesRow(course) {
  coursesTableContent.insertAdjacentHTML(
    "beforeend",
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

function createOnDemandCoursesRow(course) {
  coursesTableContent.insertAdjacentHTML(
    "beforeend",
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
