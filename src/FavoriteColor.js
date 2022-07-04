import { useState } from "react";

function FavoriteColor(){
    const [color, setColor] = useState("red");
    //console.log();
    return(
        <div className="container">
            <h1 style={{color:color}}>My favorite color is {color}</h1>
            <button className="btn" type="button" onClick={()=>setColor("blue")}> Blue </button>
            <span>  </span><button className="btn" type="button" onClick={()=>setColor("yellow")}> Yellow </button>
            <span>  </span><button className="btn" type="button" onClick={()=>setColor("pink")}> Pink </button>
        </div>
    );
}

export default FavoriteColor