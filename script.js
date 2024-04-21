var tasks;

fetch('tasks.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        tasks = data;
    })
    .catch(function(error) {
        console.log('Error:', error);
    });

// work with tasks to target/populate/create HTML 
