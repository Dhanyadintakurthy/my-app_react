import "./App.css";

export default function App() {
  // //const users = [
  //   {
  //     name:"dhanya dintakurthy",
  //     pic:"https://static.statusqueen.com/dpimages/thumbnail/Stylish_Dp-1624.jpg"
  //   },
  //   {
  //     name:"swadha",
  //     pic:"https://1.bp.blogspot.com/-LmfHmn0vowU/X4yEzgh6DHI/AAAAAAAAfOw/E1PI8dCa2qkBSPiDtSy6xUi2unxdQoUrACLcBGAsYHQ/s2048/sad%2Bdp%2B%25281%2529.jpg"
  //   }
  // ];
  //const names = ["dhanya dintakurthy","swadha"];
  const movies = [
    {
      name:"The Way Back",
      poster:"data:image/jpeg;base64,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",
      IMDB:"6.7/10",
      summary:"Jack Cunningham was a high school basketball superstar who suddenly walked away from the game for unknown reasons. Years later, he's now stuck in a meaningless job and struggling with alcoholism - the very thing that ruined his marriage and his hope for a better life. But Jack soon gets a shot at redemption when he becomes the basketball coach for his alma mater, a programme that has fallen on hard times since his teenage glory days."
    },
    {
      name:"First Cow",
      poster:"https://www.thehollywoodnews.com/wp-content/uploads/image003-24.jpg",
      IMDB:"7.1/10",
      summary:"Two travellers, on the run from a band of vengeful hunters in the 1820s Northwest, dream of striking it rich -- but their tenuous plan to make their fortune on the frontier comes to rely on the secret use of a landowner's prized dairy cow."
    },
    {
      name:"Unstoppable",
      poster:"https://m.media-amazon.com/images/I/91jK1zy-eaL._SX342_.jpg",
      IMDB:"6.8/10",
      summary:"An unmanned, half-mile-long freight train hurtles towards a town at breakneck speed. An engineer and a young conductor, who happen to be on the same route, must race against time to try and stop it."
    },
    {
      name:"Inception",
      poster:"data:image/jpeg;base64,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",
      IMDB:"8.8/10",
      summary:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."
    },
    {
      name:"The Invisible Man",
      poster:"https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg",
      IMDB:"7.1/10",
      summary:"Cecilia's abusive ex-boyfriend fakes his death and becomes invisible to stalk and torment her. She begins experiencing strange events and decides to hunt down the truth on her own."
    },
    {
      name:"Yeh Jawaani Hai Deewani",
      poster:"https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_.jpg",
      IMDB:"7.2/10",
      summary:"Kabir and Naina meet during a trekking trip where she falls in love with him but refrains from expressing it. They soon drift apart but end up meeting at a friend's wedding."
    },
  ]
  return (
    <div className="App">
      {/*<Msg name="dhanya dintakurthy" />*/}
      {/*passing value to the props*/}
      {/*<Msg name="swadha" />*/}
      {/*users.map(ur => <Msg name={ur.name} pic={ur.pic}/>)*/}
      {movies.map(mv => <Movielist name={mv.name} poster={mv.poster} IMDB={mv.IMDB} summary={mv.summary}/>)}
    </div>
  );
}

// function Msg({name,pic}) {
//   //console.log(props);
//   //const name = "dhanya";
//   return (
//     <div>
//       <h1 className="username">hello react this is {name}</h1>
//       <img className="userpic" src={pic} alt={name}></img>
//     </div>
//   );
// }

function Movielist({name,poster,IMDB,summary}) {
  return(
    <div className="moviecontainer">
      <div className="matter">
        <h1 className="moviename">{name}</h1>
        <h1 className="rating">IMDB:{IMDB}</h1>
        <div className="summary">{summary}</div>
      </div>
      <img className="moviepic" src={poster} alt={name}></img>
    </div>
  )
}

