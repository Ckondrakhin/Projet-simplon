import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  });

  const [ageError, setAgeError] = useState(""); // Ajout de l'état pour l'erreur Age
  const [mdpError, setMdpError] = useState(""); // Ajout de l'état pour l'erreur du mot de passe

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Validation de la longueur du mot de passe
    if (e.target.name === "password" && e.target.value.length < 8) {
      setMdpError("Le mot de passe doit faire au moins 8 caractères.");
    } else {
      setMdpError(""); // Réinitialiser l'erreur si la condition est remplie
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier l'âge
    if (formData.age < 18) {
      setAgeError("L'âge doit être supérieur à 18 ans.");
    } else {
      setAgeError("");
      console.log("Données soumises :", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className="labelContainer">Prénom:</div>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <div className="labelContainer">Nom:</div>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <div className="labelContainer">Âge:</div>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <span style={{ color: "red" }}>{ageError}</span>
      </label>
      <br />
      <label>
        <div className="labelContainer"> Email:</div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <div className="labelContainer"> Mot de passe:</div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span style={{ color: "red" }}>{mdpError}</span>
      </label>
      <br />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegistrationForm;
