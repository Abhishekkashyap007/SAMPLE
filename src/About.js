import { Fragment } from "react";
import myimage from "./phtos/img2.jpg";
const cdnimg="https://th.bing.com/th/id/OIP.mZABWYIprPBvppX3ZEqc3AAAAA?w=275&h=406&rs=1&pid=ImgDetMain";

const b=<h1>this is js file</h1>
function Abc()
{
    // return "this is webppppppppppppppppp";
    // return <h1>this is webppppppppppppppp</h1>;
    return (
        <fragment>
        <p>this is <h2>sdfh</h2> heading</p>
        <h2>this is second heading</h2>
        <img src={myimage} alt="image54545" width="300"/>
        <img src="phtos/img2.jpg" alt="djsdkfdjk" width="300"/>
        <img src={cdnimg} alt="dhshdjd" width="300"/>
        </fragment>
    )
}
export default Abc;

export function Service()
{
    return <h4>this is heading four</h4>
}