





window.onload=function(){

  
    
    


    //sign up a user
    const signupForm = document.querySelector("#signup-form");
    
    signupForm.addEventListener('submit', (e) =>
    
    {
        e.preventDefault();
        // get user info
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        // sign up the user

        auth.createUserWithEmailAndPassword(email, password).then(cred =>
       {
            console.log(cred.user);
            // close the signup modal & reset form
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
       });
   });

   //logout a user

   const logout = document.querySelector("#logout");

   logout.addEventListener('click', (e) =>
    {
       e.preventDefault();

       auth.signOut();
   })

    // login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
   
  });

});
  
//auth status changes

auth.onAuthStateChanged(user =>{
  
    if (user) {

      document.getElementById("navBar").style.visibility = "visible";


      // Get collections from the database
db.collection('Orders').get().then(snapshot => {
  setupOrders(snapshot.docs);
});


// need to finish
db.collection('products').get().then(snapshot => {
  getProducts(snapshot.docs);
});

const getProducts = (data) => {
  data.forEach(doc => {
    const product = doc.data();
    

// get the prices for the html order container


  
})
}
//get the product info




// Get reference for html container

const orderList = document.querySelector('.order-list');

// setup the each order container on the staff display

const setupOrders = (data) => {

// get values of the map datatypes, name and amount, used in product documents



let html = '';
data.forEach(doc => {
  const order = doc.data();
  
  let productNames = [];
  let productAmounts= [];
  let productPrices= [];
  let productTotal = 0;

  // get data for product names and amounts
  let tbl = ``;
  for (let i = 0; i < order.products.length; i++){

      let data = order.products[i];
      
      
      productNames.push(data.name);
      productAmounts.push(data.amount);
      
  
  }

  // get data for prices 

  //get database reference 
  
  for (let i = 0; i < order.products.length; i++){

      


  }





  //construct html table with name, amount and price

  let row = ``;
  for (let i = 0; i < productNames.length; i++){

    row += `
    <tr>
    <td>${productNames[i]}</td>
    <td>${productAmounts[i]}</td>
    </tr>
    `;
    tbl = row;
    
  }

  
  
  
  // construct html used in each container

  const li = `
    
    <li>
    <div class="removeWhenLoggedOut">
      <div class="container grey lighten-4 z-depth-2">

      <div class="z-depth-2" id="check" style="background-color:#CD1818; height:10%" onclick="check(this)">
      </div>
      



      <div class ="row">
      <div class="col s5" style="margin: 20px;">Customer name - ${order.name}</div>
      <div class="col s5" style="margin: 20px;">Table number - ${order.tableNumber}</div>
      
      <div class="col s10" style="margin: 20px;"> Order

      <table>
      <thead>
        <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Price</th>
        </tr>
      </thead>

      <tbody>
       ${tbl}
      </tbody>
    </table> <br>
    <button class="btn waves-effect waves-red" style="left:90%;" onclick="remove(this)"><i class="material-icons right" ></i>Complete</button></td>
    </div> 
    </li> 
    </div>
    



  `;
  
  html += li;
});
orderList.innerHTML = html
document.getElementById("removeWhenLoggedIn").style.visibility = "hidden";





};
    
    } else {


      document.getElementById("removeWhenLoggedIn").style.visibility = "visible";
      document.getElementById("navBar").style.visibility = "hidden";
      
      
    console.log("User Logged Out")

     elements = document.getElementsByClassName("removeWhenLoggedOut");

    for (let i = 0; i < elements.length; i++) {

    elements[i].style.display = "none";
    } 
       
    }



}

)};