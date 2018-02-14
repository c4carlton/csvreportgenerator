console.log("APP.js has loaded")

$("#button1").click((data) => {
	data.preventDefault()

	var input = $("#input").val()

  console.log('You clicked the submit button homie and typed [' + input + ']');

  axios.post('/', input) 
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

});

// $("#button2").click((data) => {
// 	data.preventDefault()

// 	var input = $("#input").val()
//   axios.get('/', )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// });