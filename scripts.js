$("#first").on('click', (event) => {console.log('Yeah, you clicked me');
  });
$("#second").on('click', (event) => { $('#first').text('liked');
  });
$("#third").on('click', (event) => { $('#third').text("color");
});

let color = "blue";

 
