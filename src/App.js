
import './App.css';
import Profilecomponent from './profile/Profilecomponent';
function App() {

  const data = [
    {
      fullName : "Souid Monia",
      bio : "Je suis un developpeur FullStack Junior, j'habite à Sayada-Monastir, je cherche un offre d'emploie qui enrichie mes compétances,j'aime la musique et le voyage. ",
      profession : "developpeur FullStack Junior" ,
      img : "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_960_720.jpg"
}
]
const HandleName = () =>{
  alert("What's your name ?")
}
  return (
    <div className="App">
     <Profilecomponent donnee = {data} HandleName ={HandleName}/>
    </div>
  );
}


export default App;
