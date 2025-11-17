function getFormvalue(e) {
    //Write your code here
	// const submitBtn = document.querySelector("#submit");
	// submitBtn.addEventListener ("click" , (e)=>{
		e.preventDefault();
		const firstName = document.forms["form1"]["fname"].value;
		const lastName = document.forms["form1"]["lname"].value;

		alert(firstName + " " + lastName);
		
	})

}
