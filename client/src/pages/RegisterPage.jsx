import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Register.scss";
import axios from "axios";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   profileImage: null,
  // });

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //     [name]: name === "profileImage" ? files[0] : value,
  //   });
  // };

  const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(() => {
    setPasswordMatch(password === confirmPassword || confirmPassword === "")
  });


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      axios.post('https://real-estate-website-1.onrender.com/auth/register', { firstName, lastName, email, phone, password })
        .then(result => {
          console.log(result)
          navigate('/login')
        })
        .catch((err) => console.log(err))
    } catch (err) {
      console.log("Registration failed", err.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="register">
        <div className="register_content">
          <form className="register_content_form" onSubmit={handleSubmit}>
            <input
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
            <input
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            <input
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              required
            />
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              type="password"
              required
            />

            {!passwordMatch && (
              <p style={{ color: "red" }}>Passwords are not matched!</p>
            )}

            {/* <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label> */}

            {/* {profileImage && (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )} */}
            <button type="submit" disabled={!passwordMatch}>REGISTER</button>
          </form>
          <a href="/login">Already have an account? Log In Here</a>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
