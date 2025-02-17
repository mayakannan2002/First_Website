import React from "react";
import { Link } from "react-router-dom";
import "./Clients.css";
import client1 from "./../../../Components/assets/Images/client1.jpg";
import client2 from "./../../../Components/assets/Images/client2.jpg";
import client3 from "./../../../Components/assets/Images/client3.jpg";
import client4 from "./../../../Components/assets/Images/client4.jpg";
import client5 from "./../../../Components/assets/Images/client5.jpg";
import client6 from "./../../../Components/assets/Images/client6.jpg";
import client7 from "./../../../Components/assets/Images/client7.jpg";
import client8 from "./../../../Components/assets/Images/client8.jpg";
import client9 from "./../../../Components/assets/Images/client9.jpg";
import client10 from "./../../../Components/assets/Images/client10.jpg";
import client11 from "./../../../Components/assets/Images/client11.jpg";
import client12 from "./../../../Components/assets/Images/client12.jpg";
import client13 from "./../../../Components/assets/Images/client13.jpg";
import client14 from "./../../../Components/assets/Images/client14.jpg";
import client15 from "./../../../Components/assets/Images/client15.jpg";
import client16 from "./../../../Components/assets/Images/client16.jpg";
import client17 from "./../../../Components/assets/Images/client17.jpg";
import client18 from "./../../../Components/assets/Images/client18.png";
import client19 from "./../../../Components/assets/Images/client19.png";
import client20 from "./../../../Components/assets/Images/client20.png";


const clients = [
  { name: "Client 1", img: client1 },
  { name: "Client 2", img: client2 },
  { name: "Client 3", img: client3 },
  { name: "Client 4", img: client4 },
  { name: "Client 5", img: client5 },
  { name: "Client 6", img: client6 },
  { name: "Client 6", img: client7 },
  { name: "Client 6", img: client8 },
  { name: "Client 6", img: client9 },
  { name: "Client 6", img: client10 },
  { name: "Client 6", img: client11},
  { name: "Client 6", img: client12},
  { name: "Client 6", img: client13},
  { name: "Client 6", img: client14},
  { name: "Client 6", img: client15},
  { name: "Client 6", img: client16},
  { name: "Client 6", img: client17},
  { name: "Client 6", img: client18},
  { name: "Client 6", img: client19},
  { name: "Client 6", img: client20},
];


const Clients = () => {
  return (
   <div className="web-application">
         <header className="header3">
           <div className="breadcrumb">
             <p>  <Link to="/">Home</Link> &gt; Clients</p>
           </div>
           <h1>Our Clients </h1>
         </header>
         <p>Together with our professional partners we provide our clients with the ultimate service, budgeting, scalability and innovation for their needs.</p>
        
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img src={client.img} alt={client.name} className="client-logo" />
            </div>
          ))}
        </div>  
       </div>
  );
};

export default Clients;
