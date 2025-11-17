function getFormvalue() {
    //Write your code here
	// const submitBtn = document.querySelector("#submit");
	// submitBtn.addEventListener ("click" , (e)=>{
		// event.preventDefault();
		const firstName = document.forms["form1"]["fname"].value.trim();
		const lastName = document.forms["form1"]["lname"].value.trim();

	    if (firstName === "" && lastName === "") {
      alert("Please enter at least one name.");
      return;
    }
		alert(firstName + " " + lastName);

}
