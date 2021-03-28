// const listCoursesButton = document.querySelector('#listCourses');

// const { json } = require("body-parser");
// const getClassroomCourses = {};

// function getData()  {
//   fetch('http://localhost:3000/klassrumskurser')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// }


const listCoursesApi = function(){
    //Hämta data ur courses.json filen
    fetch('http://localhost:3000/klassrumskurser')
      //När anropet är klart och data finns.
      .then((response) => response.json())
      .then((data) => writeToConsole(data));
  }

  function writeToConsole(indata) {
    console.log(indata)
}


listCoursesApi();