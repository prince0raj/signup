import React from 'react'
import styled from 'styled-components'

// #9155FD
const Navbar = () => {
  return (
    <>
      <Container>
         <Wrap>
            <Nav>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.625 8.5H9.0325L8.8225 8.2975C9.5575 7.4425 10 6.3325 10 5.125C10 2.4325 7.8175 0.25 5.125 0.25C2.4325 0.25 0.25 2.4325 0.25 5.125C0.25 7.8175 2.4325 10 5.125 10C6.3325 10 7.4425 9.5575 8.2975 8.8225L8.5 9.0325V9.625L12.25 13.3675L13.3675 12.25L9.625 8.5ZM5.125 8.5C3.2575 8.5 1.75 6.9925 1.75 5.125C1.75 3.2575 3.2575 1.75 5.125 1.75C6.9925 1.75 8.5 3.2575 8.5 5.125C8.5 6.9925 6.9925 8.5 5.125 8.5Z" fill="#3A3541"/>
            </svg>
            <p>Account</p>
            </Nav>
            <Nav>
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 12.75C7.325 12.75 8 12.075 8 11.25C8 10.425 7.325 9.75 6.5 9.75C5.675 9.75 5 10.425 5 11.25C5 12.075 5.675 12.75 6.5 12.75ZM11 6H10.25V4.5C10.25 2.43 8.57 0.75 6.5 0.75C4.43 0.75 2.75 2.43 2.75 4.5H4.175C4.175 3.2175 5.2175 2.175 6.5 2.175C7.7825 2.175 8.825 3.2175 8.825 4.5V6H2C1.175 6 0.5 6.675 0.5 7.5V15C0.5 15.825 1.175 16.5 2 16.5H11C11.825 16.5 12.5 15.825 12.5 15V7.5C12.5 6.675 11.825 6 11 6ZM11 15H2V7.5H11V15Z" fill="#3A3541" fill-opacity="0.87"/>
            </svg>
            <p>Account</p>
            </Nav>
            <Nav>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M6.75 4.25H8.25V5.75H6.75V4.25ZM6.75 7.25H8.25V11.75H6.75V7.25ZM7.5 0.5C3.36 0.5 0 3.86 0 8C0 12.14 3.36 15.5 7.5 15.5C11.64 15.5 15 12.14 15 8C15 3.86 11.64 0.5 7.5 0.5ZM7.5 14C4.1925 14 1.5 11.3075 1.5 8C1.5 4.6925 4.1925 2 7.5 2C10.8075 2 13.5 4.6925 13.5 8C13.5 11.3075 10.8075 14 7.5 14Z" fill="#3A3541" fill-opacity="0.87"/>
            </svg>
            <p>Info</p>
            </Nav>
            <Nav>
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.25 0.25H1.75C0.925 0.25 0.2575 0.925 0.2575 1.75L0.25 13.75L5.5 11.5L10.75 13.75V1.75C10.75 0.925 10.075 0.25 9.25 0.25ZM9.25 11.5L5.5 9.865L1.75 11.5V1.75H9.25V11.5Z" fill="#3A3541" fill-opacity="0.87"/>
            </svg>
            <p>Billing</p>
            </Nav>
            <Nav>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 15.5C6.825 15.5 7.5 14.825 7.5 14H4.5C4.5 14.825 5.175 15.5 6 15.5ZM10.5 11V7.25C10.5 4.9475 9.2775 3.02 7.125 2.51V2C7.125 1.3775 6.6225 0.875 6 0.875C5.3775 0.875 4.875 1.3775 4.875 2V2.51C2.73 3.02 1.5 4.94 1.5 7.25V11L0 12.5V13.25H12V12.5L10.5 11ZM9 11.75H3V7.25C3 5.39 4.1325 3.875 6 3.875C7.8675 3.875 9 5.39 9 7.25V11.75Z" fill="#3A3541" fill-opacity="0.87"/>
            </svg>
            <p>Notifications</p>
            </Nav>
         </Wrap>
      </Container>
    </>
  )
}

export default Navbar

const Container=styled.div`
border: 1px solid rgba(58, 53, 65, 0.12);
`
const Wrap=styled.div`
 display:flex;
 align-items:center;
`
const Nav=styled.div`
 display:flex;
 align-items:center;
 gap:9px;
 padding:12px 20px;
 p{
font-weight: 500;
font-size: 14px;
line-height: 24px;
text-align: center;
letter-spacing: 0.4px;
text-transform: uppercase;
color: rgba(58, 53, 65, 0.68);
 }
`