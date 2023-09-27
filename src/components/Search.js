import { styled } from "styled-components";
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('searched/'+ input )
  }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            < input type="text" onChange={(e)=> setInput(e.target.value) } value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle =styled.form`
    margin: 0rem 7rem;
    div{
        width: 100% ;
        position: relative;
    }
    input {
        border: none;
        background:linear-gradient(35deg,#494949,#393939) ;
        color: white;
        font-size: 1rem;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100% ;
      }
    
    svg{
        position: absolute; 
        color: white;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
    }
    
`
export default Search