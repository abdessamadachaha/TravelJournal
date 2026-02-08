import information from "../data";
import Article from "./Article";

function Main() {
   return (
      <main>
         {information.map(article => (
            <Article  {...article}/>
         ))}
      </main>
   );
}

export default Main;