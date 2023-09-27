import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { styled } from "styled-components";

function Cuisines() {
    const [cuisine,setCuisine] = useState([]);
    let params = useParams();

    

    // saving each fetched data to localstorage  


    const getCuisine = async (name)=>{

        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
        const recipes = await api.json();
        setCuisine(recipes.results)
    };
    useEffect(()=>{
        getCuisine(params.type),
        console.log(params.type)
    },[params.type])

  return (
    <Grid>
        {cuisine.map((item)=>{
            return(
                <Card key={item.id} >
                    <img src={item.image} />
                    <h4>{item.title} </h4>
                </Card>
            )
        })}
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

export default Cuisines ;