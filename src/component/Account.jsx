import React from "react";
import styled from "styled-components";
import { useState } from "react";
const Account = () => {
  const [val, setval] = useState(true);
  return (
    <>
      <Container>
        <Wrap>
          <Profil>
            <Logo>
              <img src="./images/Avatar.png" alt="" />
            </Logo>
            <Command>
              <C_wrap>
                <Btn1>
                  <button>Upload new photo</button>
                </Btn1>
                <Btn2>
                  <button>Reset</button>
                </Btn2>
              </C_wrap>
              <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
            </Command>
          </Profil>
          <From>
            <form action="">
              <div class="form-row">
                <input
                  type="text"
                  id="form-email"
                  class="form-textbox"
                  required
                />
                <label for="form-email" class="form-label">
                  Username
                </label>
              </div>
              {/* <input type="text" placeholder="Username" required /> */}
              <div class="form-row">
                <input
                  type="text"
                  id="form-email"
                  class="form-textbox"
                  required
                />
                <label for="form-email" class="form-label">
                  name
                </label>
              </div>
              {/* <input type="text" placeholder="Name" required /> */}
              <div class="form-row">
                <input
                  type="email"
                  id="form-email"
                  class="form-textbox"
                  required
                />
                <label for="form-email" class="form-label">
                  Email
                </label>
              </div>
              {/* <input type="email" placeholder="Email" required /> */}
              <div class="form-row">
                <input
                  type="text"
                  id="form-email"
                  class="form-textbox"
                  required
                />
                <label for="form-email" class="form-label">
                  Role
                </label>
              </div>
              {/* <input type="text" placeholder="Role" required /> */}

              <Box>
                <select id="cars" name="cars">
                  <option value="volvo">Active</option>
                  <option value="saab">Active</option>
                  <option value="fiat">Active</option>
                  <option value="audi">Active</option>
                </select>
              </Box>
              {/* <input type="text" placeholder="Status" /> */}

              <div class="form-row">
                <input
                  type="text"
                  id="form-email"
                  class="form-textbox"
                  required
                />
                <label for="form-email" class="form-label">
                  Company
                </label>
              </div>
              {/* <input type="text" placeholder="Company" required /> */}
            </form>
          </From>
          <PopUp style={val ? { display: "flex" } : { display: "none" }}>
            <First>
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
                  fill="#FFB400"
                />
                <path
                  d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
                  fill="black"
                  fill-opacity="0.1"
                />
              </svg>
            </First>
            <Second>
              <h4>Your email is not confirmed. Please check your inbox.</h4>
              <p>Resend Confirmation</p>
            </Second>
            <Third
              onClick={() => {
                setval(!val);
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8333 1.34167L10.6583 0.166672L5.99999 4.82501L1.34166 0.166672L0.166656 1.34167L4.82499 6L0.166656 10.6583L1.34166 11.8333L5.99999 7.175L10.6583 11.8333L11.8333 10.6583L7.17499 6L11.8333 1.34167Z"
                  fill="#FFB400"
                />
                <path
                  d="M11.8333 1.34167L10.6583 0.166672L5.99999 4.82501L1.34166 0.166672L0.166656 1.34167L4.82499 6L0.166656 10.6583L1.34166 11.8333L5.99999 7.175L10.6583 11.8333L11.8333 10.6583L7.17499 6L11.8333 1.34167Z"
                  fill="black"
                  fill-opacity="0.1"
                />
              </svg>
            </Third>
          </PopUp>
          <Button>
            <Sbtn1>
              <button
                onClick={() => {
                  setval(!val);
                }}
              >
                Save Changes
              </button>
            </Sbtn1>
            <Sbtn2>
              <button>Cancel</button>
            </Sbtn2>
          </Button>
        </Wrap>
        <Check>
          {/* <form action="">
            <div class="form-row">
              <input
                type="text"
                id="form-email"
                class="form-textbox"
                required
              />
              <label for="form-email" class="form-label">
                Email address
              </label>
            </div>
          </form> */}
        </Check>
      </Container>
    </>
  );
};

export default Account;

const Container = styled.div`
  margin: 20px 0;
`;
const Wrap = styled.div`
  width: 97vw;
  margin: 0 auto;
`;
const Profil = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: calc(39px - 24px);
`;
const Command = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(58, 53, 65, 0.68);
  }
`;
const Logo = styled.div``;
const Btn1 = styled.div`
  button {
    cursor: pointer;
    width: 197px;
    height: 38px;
    background: #9155fd;
    box-shadow: 0px 4px 8px -4px rgba(58, 53, 65, 0.42);
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
const Btn2 = styled.div`
  button {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #ff4c51;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 7px 22px;
    gap: 8px;
    border: 1px solid rgba(255, 76, 81, 0.5);
    border-radius: 5px;
    width: 90px;
    height: 38px;
  }
`;
const C_wrap = styled.div`
  display: flex;
  align-item: center;
  gap: 16px;
`;

/* From */

const From = styled.div`
  margin: 24px 0;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    column-gap: 20px;
    input {
      border: 1px solid rgba(58, 53, 65, 0.23);
      border-radius: 6px;
      background: transparent;
      padding: 17px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.15px;
    }
    select {
      border: none;
      border-radius: none;
      background: transparent;
      // padding: 17px;
      font-weight: 400;
      width: 100%;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.15px;
      color: rgba(58, 53, 65, 0.87);
    }
  }
`;

const Box = styled.div`
  border: 1px solid rgba(58, 53, 65, 0.23);
  border-radius: 6px;
  background: transparent;
  padding: 17px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
`;
const PopUp = styled.div`
  // display: flex;
  gap: 17px;
  padding: 14px 17px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.88),
      rgba(255, 255, 255, 0.88)
    ),
    #ed6c02;
  border-radius: 5px;
`;
const First = styled.div`
  position: relative;
`;
const Second = styled.div`
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    align-self: stretch;
    letter-spacing: 0.15px;
    color: #ffb400;
  }
  p {
    color: #ffb400;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
`;
const Third = styled.div`
  cursor: pointer;
  position: absolute;
  right: 2.5rem;
`;
const Button = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 24px;
`;
const Sbtn1 = styled.div`
  button {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #ffffff;
    background: #9155fd;
    cursor: pointer;
    width: 157px;
    height: 38px;
    box-shadow: 0px 4px 8px -4px rgba(58, 53, 65, 0.42);
    border-radius: 5px;
    border: none;
  }
`;
const Sbtn2 = styled.div`
  button {
    background: transparent;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #8a8d93;
    width: 104px;
    height: 38px;
    border: 1px solid rgba(138, 141, 147, 0.5);
    border-radius: 5px;
  }
`;

const Check = styled.div`
  margin: 40px;
`;
const Labelbox = styled.div`
  width: 100%;
  input {
    width: 100%;
    border: 1px solid rgba(58, 53, 65, 0.23);
    border-radius: 6px;
    background: transparent;
    padding: 17px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
  }
`;
