import React, { useContext, useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import authContext from "../../context/authContext";

export const UserProfile = () => {
  const { auth, setAuth, logged, setLogged } = useContext(authContext);
  const [name, setName] = useState(auth?.name);
  const [email, setEmail] = useState(auth?.email);
  const modifUser = () => {
    const apiUrl = `http://localhost:8086/api/v1/users/${auth.id}`;
    const requestData = {
      email: email, // Replace with the actual email
      name: name, // Replace with the actual password
    };
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",

        // Add any other headers if needed, e.g., authorization headers
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          console.log(response);
          throw new Error("Network response was not ok");
        }
        // if (response.status === 201) navigate("/login");

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEmail(data.email);
      });
  };
  return (
    <>
      <NavBar></NavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src="assets/img/products/product-img-1.jpg" alt="" />
            </a>
          </div>
          <h3>{name}</h3>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <br />
          <a onClick={modifUser} className="cart-btn">
            Edit
          </a>
        </div>
      </div>
    </>
  );
};
