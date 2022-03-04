import React, { useState } from "react";
import styled from "styled-components";
import submit from "../../img/submit-logo.png";
import axios from "axios";
import Thank from "../Thank";
// Form validation
import { formSchema } from "../Validation";
//Importing Cate data
import { Categories } from "../Categories-data";
// Country npm
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
// Cehckbox
import { Checkbox, Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

//To change date format
import moment from "moment";
// SEO
import { Helmet } from "react-helmet";

const FormPage = ({ setModal }) => {
  const [valid, setValid] = useState(false);
  const [closeIcon, setCloseIcon] = useState(true);
  const [error, setError] = useState("");
  // IsChecked
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [country, setCountry] = useState();
  const [region, setRegion] = useState();

  const [input, setInput] = useState({
    name: "",
    mail: "",
    city: "",
    locality: "",
    country: "",
    date: "",
    category: "",
    message: "",
  });

  const onClickHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name: input.name,
      mail: input.mail,
      city: input.city,
      locality: input.locality,
      country: input.country,
      date: input.date,
      category: input.category,
      message: input.message,
    };

    // Form Validation
    try {
      const validation = await formSchema.validate(formData);
    } catch (err) {
      setError(err.errors);
    }

    const isValid = await formSchema.isValid(formData);
    setValid(isValid);
    isValid && axios.post("/posts", formData);
  };

  // Remove Alert
  const closeHandler = (e) => {
    if (e.target.id === "close") {
      setModal(false);
    }
  };
  //Country and city handler
  const regionHandler = (val) => {
    setRegion(val);
    setInput({ ...input, city: val });
  };

  const countryHandler = (val) => {
    setCountry(val);
    setInput({ ...input, country: val });
  };

  // Slide Handler
  const slideHandler = (e) => {
    let isChecked = e.target.checked;
    setIsChecked(isChecked);

    if (isChecked) {
      setInput({ ...input, name: "Anonymous" });
    } else {
      setInput({ ...input, name: "" });
    }
  };
  // Checkbox Handler
  const checkboxHandler = (e) => {
    let isChecked = e.target.checked;
    setIsSelected(isChecked);
    if (isChecked) {
      setInput({ ...input, date: new Date().toLocaleDateString("en-CA") });
    } else {
      setInput({ ...input, date: "" });
    }
  };

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Meta edge */}
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* Meta description */}
        <meta
          name="description"
          content="Women who have faced any Sexual/Financial/Physical abuse, they can post their happenings on our website without revealing any personal data. Once the details are verified, the post will be published on the website. Furthermore, the action would be taken by the Govt for justice."
        />
        {/*  Keywords */}
        <meta
          name="keywords"
          content="women, Sexual abuse, Financial abuse, Physical abuse, post abuse, without revealing any personal data, the action would be taken by the Govt for justice, Sexual assault,Threatening, Child Sexual Abuse, Marital rape,Incest sexual intrusion between family members,Sexual Exploitaion By Professionals,Body shaming,Threats to publish nude photo's,Stalking,Pornographic images to threaten,Forcing to take part in pornography,Following or Tracking,Threatening to commit suicide,Forcing into prostitution,Sexual touching,Cyberstalking,Trolling,Insulting,Hidden Cameras,Touching in any way you doesn't want,Forcing into sexual acts,Slapping, Beating, Punching, Kicking, Burning, Stabbing,keeping you imprisoned,Sexual Violence Within Prisons,Same Gender Assault,Gang Rape,Destroying immigration papers,Not letting you to see your friends or family,"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Save women - saveoursouls.co.in</title>
      </Helmet>
      <StyledCard onClick={closeHandler} id="close">
        <StyledForm>
          {closeIcon && (
            <div className="close" onClick={() => setModal(false)}>
              <svg
                className="close"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
          {!valid && (
            <div className="title">
              <h3>Tell Us</h3>
              <small>We are here to help you !!!</small>
              {error && (
                <div id="alert">
                  <p>{error}</p>
                </div>
              )}
            </div>
          )}
          {!valid ? (
            <form>
              <div className="details">
                <div className="left">
                  <div className="input-box">
                    <label htmlFor="name">
                      Name <span className="mandatory">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, name: e.target.value })
                      }
                      disabled={isChecked}
                      autoComplete="off"
                      type="text"
                      name="name"
                      id=""
                      value={input.name}
                      required
                    />
                  </div>
                  <div className="Slider">
                    <Switch
                      onChange={(e) => slideHandler(e)}
                      className="switch"
                      color="primary"
                    >
                      Do you want to hide your name?
                    </Switch>
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">Email (optional)</label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, mail: e.target.value })
                      }
                      autoComplete="off"
                      type="email"
                      name="email"
                      id=""
                      value={input.mail}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="country">
                      Country <span className="mandatory">*</span>
                    </label>
                    {/* Country Dropdown */}
                    <CountryDropdown
                      id="my-country-field-id"
                      defaultOptionLabel="Select your country"
                      value={country}
                      onChange={(val) => countryHandler(val)}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="city">
                      City <span className="mandatory">*</span>
                    </label>
                    {/* City Dropdown */}
                    <RegionDropdown
                      id="my-region-field-id"
                      disableWhenEmpty={true}
                      defaultOptionLabel="Select your city"
                      country={country}
                      value={region}
                      onChange={(val) => regionHandler(val)}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="locality">
                      Locality <span className="mandatory">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, locality: e.target.value })
                      }
                      autoComplete="off"
                      type="text"
                      name="locality"
                      value={input.locality}
                      id=""
                      required
                    />
                  </div>

                  <div className="input-box file">
                    <label htmlFor="file">Attach an evidence (optional)</label>
                    <input type="file" name="file" title="" id="" />
                  </div>
                </div>
                <div className="right">
                  <div className="input-box">
                    <label htmlFor="date">
                      When <span className="mandatory">*</span>
                    </label>
                    <input
                      onChange={(e) =>
                        setInput({ ...input, date: e.target.value })
                      }
                      autoComplete="off"
                      type="date"
                      name="date"
                      value={input.date}
                      id=""
                      required
                      disabled={isSelected}
                      max={moment().format("YYYY-MM-DD")}
                    />
                  </div>
                  <div className="checkBox">
                    <Checkbox
                      onChange={(e) => checkboxHandler(e)}
                      className="check"
                      color="primary"
                      shape="curve"
                      animation="smooth"
                    >
                      Check for today's date
                    </Checkbox>
                  </div>
                  <div className="input-box">
                    <label htmlFor="category">
                      What happen <span className="mandatory">*</span>
                    </label>
                    <select
                      required
                      onChange={(e) =>
                        setInput({ ...input, category: e.target.value })
                      }
                      name=""
                      id="category"
                    >
                      <option value="starter" defaultValue>
                        Select one
                      </option>
                      {Categories.map((cate) => (
                        <option key={cate} value={cate}>
                          {cate}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-box">
                    <label htmlFor="message">
                      Message <span className="mandatory">*</span>
                    </label>
                    <textarea
                      onChange={(e) =>
                        setInput({ ...input, message: e.target.value })
                      }
                      autoComplete="off"
                      name="message"
                      id=""
                      value={input.message}
                      placeholder=""
                      required
                    ></textarea>
                  </div>
                  <div className="input-box">
                    <button
                      disabled={false}
                      onClick={onClickHandler}
                      type="submit"
                    >
                      <img src={submit} alt="" />
                      Sumbit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <Thank setCloseIcon={setCloseIcon} />
          )}
        </StyledForm>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-y: scroll;
`;

const StyledForm = styled.div`
  width: 70%;
  margin-top: 5rem;
  border-radius: 10px;
  padding: 2rem 2rem 3rem 5rem;
  background: white;
  position: absolute;
  left: 15%;
  .title {
    width: 90%;
    text-align: center;
    color: black;
    margin-bottom: 1rem;
    h3 {
      margin-bottom: 0rem;
    }
    small {
      opacity: 70%;
    }
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--grey);
    padding: 0.3rem 0.5rem;
    border-radius: 2px;
    &:focus {
      outline: none;
      border: 1px solid var(--blue);
      box-shadow: 0 0 5px var(--blue);
    }
  }

  select,
  #my-region-field-id,
  #my-country-field-id {
    width: 100%;
    border: 1px solid var(--grey);
    padding: 0.4rem 0.2rem;
    border-radius: 2px;
    &:focus {
      outline: none;
      border: 1px solid var(--blue);
      box-shadow: 0 0 5px var(--blue);
    }
  }

  textarea {
    height: 8rem;
    &::placeholder {
      font-size: 0.8rem;
    }
  }
  label {
    margin: 0.9rem 0rem 0.2rem 0rem;
    color: var(--grey);
  }

  /*Name Slider */
  .Slider {
    font-size: 0.7rem;
    .switch {
      margin-top: 0.4rem;
    }
  }

  /* Date Check box */
  .checkBox {
    font-size: 0.7rem;
    .check {
      margin-top: 0.4rem;
    }
  }

  .details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left,
    .right {
      flex: 1 1 15rem;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 5rem;
    }
  }

  button {
    width: 100%;
    border: 1px solid var(--blue);
    border-radius: 2px;
    background: var(--blue);
    color: white;
    padding: 0.3rem 0.5rem;
    margin-top: 1rem;
    img {
      width: 1.2rem;
      margin-right: 0.3rem;
    }
  }
  .close {
    font-size: 1rem;
    position: absolute;
    right: 0%;
    top: 0%;
    transform: translate(-50%, 30%);
    font-size: 1.5rem;
    width: 2rem;
    color: var(--grey);
    &:hover {
      cursor: pointer;
      color: black;
    }
  }
  .mandatory {
    color: var(--blue);
  }
  .file {
    input {
      border: none;
      padding-left: 0rem;
      &::file-selector-button {
        border: 2px solid var(--blue);
        border-radius: 2px;
        background-color: var(--blue);
        color: white;
        font-size: 0.9rem;
      }
    }
  }
  #alert {
    margin: 1rem auto 0rem auto;
    padding: 0.3rem;
    font-size: 0.7rem;
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
    p {
      display: table;
      border-radius: 2px;
      padding: 0.3rem 5rem;
      margin: 0px auto 0px auto;
      background: rgba(47, 128, 237, 0.3);
    }
    img {
      width: 0.8rem;
      margin-left: 0.4rem;
    }
  }

  @media screen and (max-width: 1080px) {
    width: 90%;
    margin: 5rem auto;
    left: 6%;
  }
  @media screen and (max-width: 620px) {
    padding: 2rem 2rem 3rem 2rem;

    .input-box {
      width: 100%;
    }
    .details {
      .left,
      .right {
        margin-right: 0rem;
      }
    }
    .title {
      width: 100%;
    }
    #alert {
    }
  }
`;

export default FormPage;
