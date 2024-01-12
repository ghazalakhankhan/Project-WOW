


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  
  let panelsElement = document.querySelectorAll('.panel');
let removeActiveClasses = () => {
    
             // call backIn: panel =>
     panelsElement.forEach(  panel =>{
                 
                 // (tokens:'active')
     panel.classList.remove('active');
   });

};
panelsElement.forEach(panel =>{
    panel.addEventListener('click',() => {
        removeActiveClasses();
        panel.classList.add('active');
 });

 });

 var acc= document.getElementsByClassName("accordion");
    var i;
    for(i=0; i<acc.length; i++){
        acc[i].addEventListener("click", function(){
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

            var pannel = this.nextElementSibling;

            if(pannel.style.display ==="block"){
                pannel.style.display = "none";
            }
            else{
                pannel.style.display = "block";
            }
        });
    }

    
    function submitFeedback() {
        // You can add form validation here before proceeding
        // For simplicity, I'm just displaying an alert
        alert("Feedback submitted successfully!");
        document.getElementById("feedbackForm").toggle(); // Clear the form
    }
    // function toggle(){
    //     document.getElementsByClassName("btn1").toggle();
    // };

    
    function myFunction() {
var x = document.getElementById("myDIV");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}