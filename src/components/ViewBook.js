import React from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
    var viewbook=[
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]
  return (
    <div>
      <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
               {viewbook.map((value,key)=>{
                   return <div className='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                   <div className="card">
                   <div className="card-body">
                 <center>  <img style={{width:250,height:250}} src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/></center>
                     <p className="card-text">Name:  {value.name}</p>
                     <p className="card-text">Username:  {value.username}</p>
                     <p className="card-text">Email:  {value.email}</p>
                     <p className="card-text">Address:  {value.address.street}</p>
                     <p className="card-text">City:  {value.address.city}</p>
                     <p className="card-text">Suite:  {value.address.suite}</p>
                     <p className="card-text">Zipcode:  {value.address.zipcode}</p> 
                     <p className="card-text">lng:  {value.address.geo.lng}</p>
                     <p className="card-text">lat:  {value.address.geo.lat}</p>
                     <p className="card-text">PhNo:  {value.phone}</p> 
                     <p className="card-text">Website:  {value.website}</p> 
                     <p className="card-text">Company:  {value.company.name}</p>  
                     <p className="card-text">catchPhrase {value.company.catchPhrase}</p>  
                     <p className="card-text">Bs:  {value.company.bs}</p>        
                   </div>
                 </div>
                 </div>
               })}
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default ViewBook