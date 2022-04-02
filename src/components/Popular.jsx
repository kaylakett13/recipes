import { useEffect, useState } from "react";

function Popular() {

    const[popular, setPopular] = useState([]);
    
    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=5181d7bcc07e42f9a98f740fde9cfc28&number=9`);
        const data = await api.json();
        setPopular(data.recipes);
        console.log(data);
    }
  return (
    <div>
        {popular.map((recipe) => {
        return(
            <div>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
            </div>
        );
    })}
    </div>
  )
}

export default Popular