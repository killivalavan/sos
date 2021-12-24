import React, { useState } from "react";
import styled from "styled-components";
import submit from "../../img/submit-logo.png";
import warning from "../../img/warning.png";
import axios from "axios";
import Thank from "../Thank";
import { formSchema } from "../Validation";
import { setLocale } from "yup";

const FormPage = ({ setModal }) => {
  const [valid, setValid] = useState(false);
  const [closeIcon, setCloseIcon] = useState(true);
  const [error, setError] = useState("");
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

    try {
      const validation = await formSchema.validate(formData);
    } catch (err) {
      setError(err.errors);
    }

    const isValid = await formSchema.isValid(formData);
    setValid(isValid);
    isValid && axios.post("http://localhost:3001/posts", formData);
  };

  // Remove Alert
  const closeHandler = (e) => {
    if (e.target.id === "close") {
      setModal(false);
    }
  };

  return (
    <StyledCard onClick={closeHandler} id='close'>
      <StyledForm>
        {closeIcon && (
          <div className='close' onClick={() => setModal(false)}>
            <svg
              className='close'
              xmlns='http://www.w3.org/2000/svg'
              className='h-2 w-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        )}
        {!valid && (
          <div className='title'>
            <h3>Tell Us</h3>
            <small>We are here to help you !!!</small>
            {error && (
              <div id='alert'>
                <p>{error}</p>
              </div>
            )}
          </div>
        )}
        {!valid ? (
          <form>
            <div className='details'>
              <div className='left'>
                <div className='input-box'>
                  <label htmlFor='name'>
                    Nick Name <span className='mandatory'>*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, name: e.target.value })
                    }
                    autoComplete='off'
                    type='text'
                    name='name'
                    id=''
                    value={input.name}
                    required
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor='email'>Email (optional)</label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, mail: e.target.value })
                    }
                    autoComplete='off'
                    type='email'
                    name='email'
                    id=''
                    value={input.mail}
                    required
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor='city'>
                    City <span className='mandatory'>*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, city: e.target.value })
                    }
                    autoComplete='off'
                    type='text'
                    name='city'
                    value={input.city}
                    id=''
                    required
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor='locality'>
                    Locality <span className='mandatory'>*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, locality: e.target.value })
                    }
                    autoComplete='off'
                    type='text'
                    name='locality'
                    value={input.locality}
                    id=''
                    required
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor='country'>
                    Country <span className='mandatory'>*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, country: e.target.value })
                    }
                    autoComplete='off'
                    type='text'
                    name='country'
                    value={input.country}
                    id=''
                    required
                  />
                </div>
                <div className='input-box file'>
                  <label htmlFor='file'>
                    Choose a file to attach (optional)
                  </label>
                  <input type='file' name='file' id='' />
                </div>
              </div>
              <div className='right'>
                <div className='input-box'>
                  <label htmlFor='date'>
                    When <span className='mandatory'>*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, date: e.target.value })
                    }
                    autoComplete='off'
                    type='date'
                    name='date'
                    value={input.date}
                    id=''
                    required
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor='category'>
                    Select one <span className='mandatory'>*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setInput({ ...input, category: e.target.value })
                    }
                    autoComplete='off'
                    type='text'
                    name='category'
                    value={input.category}
                    id=''
                    required
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor='message'>
                    Message <span className='mandatory'>*</span>
                  </label>
                  <textarea
                    onChange={(e) =>
                      setInput({ ...input, message: e.target.value })
                    }
                    autoComplete='off'
                    name='message'
                    id=''
                    value={input.message}
                    placeholder='Describe in 1000 words'
                    required
                  ></textarea>
                </div>
                <div className='input-box'>
                  <button
                    disabled={false}
                    onClick={onClickHandler}
                    type='submit'
                  >
                    <img src={submit} alt='' />
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

  .input-box {
    width: 100%;
  }
  input,
  textarea {
    width: 100%;
    border: 1px solid var(--grey);
    padding: 0.1rem 0.5rem;
    border-radius: 2px;
    &:focus {
      outline: none;
      border: 1px solid var(--blue);
      box-shadow: 0 0 5px var(--blue);
    }
  }

  textarea {
    height: 7rem;
    &::placeholder {
      font-size: 0.8rem;
    }
  }
  label {
    margin: 0.9rem 0rem 0.2rem 0rem;
    color: var(--grey);
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
    height: 2rem;
    border: 1px solid var(--blue);
    border-radius: 2px;
    background: var(--blue);
    color: white;
    padding: 0.2rem 0.5rem;
    margin-top: 1rem;
    img {
      width: 1.2rem;
      margin-right: 0.3rem;
    }
  }
  .close {
    font-size: 1rem;
    position: absolute;
    right: 3%;
    top: 3%;
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
      padding: 0.3rem 2rem;
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
