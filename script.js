import data from './tasks.json' assert { type: 'json' };
console.log(data);

var tasks;
/*
fetch('./tasks.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        tasks = data;
    })
    .catch(function(error) {
        console.log('Error:', error);
    });
*/
//fetch('tasks.json')
  //  .then((response) => response.json())
    //.then((json) => console.log(json));
// work with tasks to target/populate/create HTML 