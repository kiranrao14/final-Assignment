//Name Cases: Store a person’s name in a variable, and
//  then print that person’s name in lowercase, uppercase, and titlecase.

// storing a person name in a variable


let personName :string = "Nasim Akhter";
//printing a person name in a lowercase
 console.log("Lowercase:",personName.toLowerCase())

// printing a person name in a UpperCase
 console.log("Uppercase:",personName.toUpperCase());

// printing a person name in a TitleCase
console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase);
