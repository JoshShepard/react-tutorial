import Card from './Card.jsx';
import kakashiImage from './assets/kakashi.png';
import jiraiyaImage from './assets/jiraiya.png';
import narutoImage from './assets/naruto.png';
import minatoImage from './assets/minato.png';
import guyImage from './assets/guy.png';

function App() {
  return (
    <>
      <Card profilePic={kakashiImage} name="Kakashi Hatake" description="Also known as The Copy Ninja, Kakashi has copied over 1,000 jutsu with his Sharingan. Cool, calm, and always reading Make-Out Paradise, but don't get it twisted — he never ducks a fade. From rogue ninjas to gods, Kakashi pulls up every time." />

      <Card profilePic={jiraiyaImage} name="Jiraiya" description="One of the Legendary Sannin, the Toad Sage lived loud, fought hard, and taught legends. Spy master, sage mode beast, and author of Make-Out Paradise." />

      <Card profilePic={narutoImage} name="Naruto Uzumaki" description="Once the village outcast, now the Seventh Hokage. Jinchuriki, war hero, and king of comebacks. Fueled by ramen and unbreakable will." />

      <Card profilePic={minatoImage} name="Minato Namikaze" description="The Yellow Flash, fastest ninja alive and the Fourth Hokage. Blink and he's behind you. Sealed a demon, saved a village, and left a legacy." />

      <Card profilePic={guyImage} name="Might Guy" description="The Blue Beast of the Leaf, Guy doesn't need ninjutsu — just hands. He opened all Eight Gates and went toe-to-toe with Madara, proving pure will can rival gods." />
    </>
  );
}


export default App;
