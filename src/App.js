import "./App.css";
import { useState } from "react";

export default function App() {
  const name = [
    {
      name: "Ratatouille",
      image:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      summary:
        "Ratatouille is a 2007 American computer-animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The eighth film produced by Pixar, it was written and directed by Brad Bird, who took over from Jan Pinkava in 2005, and produced by Brad Lewis, from an original idea from Bird, Pinkava and Jim Capobianco. The title refers to the French dish ratatouille, which is served at the end of the film, and also references the species of the main character, a rat. Set in Paris, the plot follows the rat named Remy, who dreams of becoming a chef and tries to achieve his goal by forming an alliance with a Parisian restaurant's garbage boy.",
      rating: "8/10 IMDb",
    },

    {
      name: "Frozen",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
      summary:
        "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale of The Snow Queen. The film depicts a princess who sets off on a journey alongside an iceman, his reindeer, and a snowman to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter.",
      rating: "7.4/10 IMDb",
    },

    {
      name: "Finding Nemo",
      image:
        "https://2.bp.blogspot.com/-CGIKiw6Sbng/VpL1pY1tdQI/AAAAAAAAOcc/2W4IAxQ6MBI/s1600/finding%2Bnemo%2Bposter.jpg",
      summary:
        "Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. It tells the story of an overprotective clownfish named Marlin who, along with a regal blue tang named Dory, searches for his missing son Nemo. Along the way, Marlin learns to take risks and comes to terms with Nemo taking care of himself.",
      rating: "8.1/10 IMDb",
    },
    {
      name: "Despicable Me",
      image:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/movie/LoafGCYY52KVosa261df2t9KTFVCuF.jpg",
      summary:
        "A man who delights in all things wicked, supervillain Gru (Steve Carell) hatches a plan to steal the moon. Surrounded by an army of little yellow minions and his impenetrable arsenal of weapons and war machines, Gru makes ready to vanquish all who stand in his way. But nothing in his calculations and groundwork has prepared him for his greatest challenge: three adorable orphan girls (Miranda Cosgrove, Dana Gaier, Elsie Fisher) who want to make him their dad.",
      rating: "7.6/10 IMDb",
    },
    {
      name: "kung fu panda",
      image: "https://m.media-amazon.com/images/I/51xlf28jbiL.jpg",
      summary:
        "Kung Fu Panda is an American media franchise by DreamWorks Animation, consisting of three films: Kung Fu Panda (2008), Kung Fu Panda 2 (2011), and Kung Fu Panda 3 (2016). Po, a clumsy panda, is a kung fu fanatic who lives in the Valley of Peace and works in his goose father Mr. Ping's noodle shop, unable to realize his dream of learning the art of kung fu. One day, a kung fu tournament is held for the elderly spiritual leader of the valley, Grand Master Oogway, to determine the identity of the Dragon Warrior, the one kung fu master capable of understanding the secret of the Dragon Scroll",
      rating: "8.1/10 IMDb",
    },
  ];
  return (
    <div className="App">
      <Title />
      {name.map(({ name, image, summary, rating }) => (
        <Name name={name} image={image} summary={summary} rating={rating} />
      ))}
      <Counter />
    </div>
  );
}
function Title() {
  return (
    <div className="title">
      <h1>Favourite Top 5 Animation Movies</h1>
    </div>
  );
}
function Name({ name, image, summary, rating }) {
  return (
    <div className="name">
      <br></br>
      <img src={image} width="300" alt="image1" />
      <h3> MOVIE NAME: {name} 📽🎬</h3>
      <h4>SUMMARY: {summary}</h4>
      <h4>RATING: {rating}</h4>
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  //const [state,setState] = useState(Initial value)
  //State means current value
  //setState helps to update state
  return (
    <div className="counter">
      <h3>Comment if you like or dislike this page. Thanks!!!😊😊</h3>
      <button
        onClick={() => {
          //like++;
          //console.log(like);
          setLike(like + 1); // Informs react that like is updated
        }}
      >
        Like
      </button>
      <h2>{like}👍</h2>
      <br></br>
      <button
        onClick={() => {
          setDislike(dislike + 1); //
        }}
      >
        Dislike
      </button>
      <h2>{dislike}👎</h2>
    </div>
  );
}
