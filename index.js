let booksDisplayArray;
let booksToBeDisplayed =`
<p>Loading ....</p>
`
document.getElementById("displayFlex").innerHTML = booksToBeDisplayed;

//Displaying all books
function displayAll(){
  fetch("https://the-dune-api.herokuapp.com/books/30")
  .then((response) => {
    return response.json();
  })
  .then((displayData) => {
    booksDisplayArray = displayData
      booksToBeDisplayed ="";
      booksDisplayArray.map((values) => {
      booksToBeDisplayed += `       
        <div class="mt-2" >
        <img src="images/lib1.png">
            <h4>${values.id}</h4>
            <h4 class="text-xl text-green-700 bold">${values.title}</h4>
            <h3>${values.author}</h3>
            <h3>${values.year}</h3>
            <button class="button button1">Buy Now</button>
            </div>
    `

    });
    document.getElementById("displayFlex").innerHTML = booksToBeDisplayed;
  
  })
  .catch((error) => {
    booksToBeDisplayed = ` 
    <p>No internet...</p>
     
  `
  document.getElementById("displayFlex").innerHTML = booksToBeDisplayed;
    console.log(error.message);
  });
}
displayAll();
// Display books with two authors
function displayArrayWithTwoAuthors(){
  let displayNewRes = booksDisplayArray.filter(book => Array.isArray(book.author))
  booksToBeDisplayed ="";
   displayNewRes.map((values) => {
    booksToBeDisplayed += ` 
      <div class="mt-2" >
       <img src="images/lib1.png">
          <h4>${values.id}</h4>
          <h4 class="text-xl text-green-700 bold">${values.title}</h4>
          <h3>${values.author}</h3>
          <h3>${values.year}</h3>
          <button class="button button1">Buy Now</button>
          </div>
  `

  });
  document.getElementById("displayFlex").innerHTML = booksToBeDisplayed;
}
// Display books btn 2010 and now
function displayArrayOver2010(){
  let displayNewRes = booksDisplayArray.filter(book => book.year >= '2010' )
  booksToBeDisplayed ="";
   displayNewRes.map((values) => {
    booksToBeDisplayed += ` 
      <div class="mt-2" >
       <img src="images/lib1.png">
          <h4>${values.id}</h4>
          <h4 class="text-xl text-green-700 bold">${values.title}</h4>
          <h3>${values.author}</h3>
          <h3>${values.year}</h3>
          <button class="button button1">Buy Now</button>
          </div>
  `

  });
  document.getElementById("displayFlex").innerHTML = booksToBeDisplayed;
}
// Search function
function searchBookByTitle (){
  let searchString = document.getElementById("searchBar").value
  const filteredCharacters= booksDisplayArray.filter((item)=>{
    return (
      item.title.toLowerCase().includes(searchString.toLowerCase()) || item.year.includes(searchString) 
    )
  })
  booksToBeDisplayed ="";
  filteredCharacters.map((values) => {
   booksToBeDisplayed += ` 
     <div class="mt-2" >
      <img src="images/lib1.png">
         <h4>${values.id}</h4>
         <h4 class="text-xl text-green-700 bold">${values.title}</h4>
         <h3>${values.author}</h3>
         <h3>${values.year}</h3>
         <button class="button button1">Buy Now</button>
         </div>
 `

 });
 document.getElementById("displayFlex").innerHTML = booksToBeDisplayed;
}