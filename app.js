let display='';
const row=document.querySelector('.row');
let txt;
fetch('https://fakestoreapi.com/products').then(
    response=>response.json())
    .then(
        data=>{
            console.log(data);
            // .map()-->file-iig copy hiiged uur file bolgoj uurchildug function
            // slice() -->taslah,huvaah ->massive,string
            data.slice(0,4).map(
                product=>{
                    console.log(product.title);
                    console.log(product.image);
                    console.log(product.description.length);
                    if(product.description.length>20){
                        txt=product.description.slice(0,41)
                    }
                    display +=`
                    <div class="col-md-3">
                    <div class="card">
                        <img src="${product.image}" alt="">
                        <h5>${product.title}</h5>
                        <p class="price">${product.price}</p>
                        <p class="cat">${product.category}</p>
                        <p>${txt}...</p>
                    </div>
                </div>
                `
                  row.innerHTML=display;
                }
            )
        }
    )
 
fetch('https://fakestoreapi.com/users').then(
    response=>response.json())
    .then(
     usdata=>{
        console.log(usdata);
        usdata.slice(0,4).map(
            user=>{
                console.log(user.name.firstname);
                console.log(user.name.lastname);
                console.log(user.email);
                console.log(user.phone);
                display +=`
            <div class="col-md-3">
                <div class="user">
                    <h5>${user.name.firstname} ${user.name.lastname}</h5>
                    <p class="email">email:${user.email}</p>
                    <p class="phone">phone number:${user.phone}</p>
                    <p>username:${user.username}</p>

                </div>
            </div>
                `
                row.innerHTML=display;
          }
           
        )
      }
    )