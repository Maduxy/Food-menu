import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { styled } from "styled-components";

function Cuisiness() {
// const [cuisines,setCuisines] = useState([]);
const [italian,setItalian] = useState([]);
const [american,setAmerican] = useState([]);
const [thai,setThai] = useState([]);
const [japanese,setJapanese] = useState([]);

let params = useParams();

useEffect(()=>{
    getCuisine(params.type),
    console.log(params.type)
},[params.type])

// saving each fetched data to localstorage 


const getCuisine = async (name)=>{

    // const check = localStorage.getItem('cuisine')

    if(name==="Italian"){
        if(localStorage.getItem('italian')){
            setItalian(JSON.parse(localStorage.getItem('italian')))
        } else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
            const recipes = await api.json();
            localStorage.setItem("italian",JSON.stringify(recipes.results));
            console.log(recipes.results);
            setItalian(recipes.results);
        }
    }else if(name==="American"){
        if(localStorage.getItem('american')){
            setAmerican(JSON.parse(localStorage.getItem('american')))
        } else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
            const recipes = await api.json();
            localStorage.setItem("american",JSON.stringify(recipes.results));
            console.log(recipes.results);
            setAmerican(recipes.results)
        }
    }else if(name==="Thai"){
        if(localStorage.getItem('thai')){
            setThai(JSON.parse(localStorage.getItem('thai')))
        } else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
            const recipes = await api.json();
            localStorage.setItem("thai",JSON.stringify(recipes.results));
            console.log(recipes.results);
            setThai(recipes.results)
        }
    }else if(name==="Japanese"){
        if(localStorage.getItem('japanese')){
            setJapanese(JSON.parse(localStorage.getItem('japanese')))
        } else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
            const recipes = await api.json();
            localStorage.setItem("japanese",JSON.stringify(recipes.results));
            console.log(recipes.results);
            setJapanese(recipes.results)
        }
    }else {
        console.log("Invalid cuisine")
    }



    // const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
    // const recipes = await api.json();
    // setCuisines(recipes.results)
}

  return (
    <Grid>
        {(params.type)=="Italian"? italian.map((item)=>{
                return(
                    <Link to={"/recipe/" + item.id}>
                    <Card key={item.id} >
                        <img src={item.image} />
                        <h4>{item.title} </h4>
                    </Card>
                    </Link>
                );
            })
        :
        (params.type)=="American"? american.map((item)=>{
            return(
                <Link to={"/recipe/" + item.id}>
                    <Card key={item.id} >
                        <img src={item.image} />
                        <h4>{item.title} </h4>
                    </Card>
                </Link>
            );
            }) 
        :
        (params.type=="Thai")? thai.map((item)=>{
            return(
                <Link to={"/recipe/" + item.id}>
                    <Card key={item.id} >
                        <img src={item.image} />
                        <h4>{item.title} </h4>
                    </Card>
                </Link>
            );
        })
        :
        japanese.map((item)=>{
            return(
                <Link to={"/recipe/" + item.id}>
                    <Card key={item.id} >
                        <img src={item.image} />
                        <h4>{item.title} </h4>
                    </Card>
                </Link>
            )
        })
    
    }
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 3rem;

`
const Card = styled.div`
img{
    border-radius: 2rem;
    width: 100%;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`

export default Cuisiness ;