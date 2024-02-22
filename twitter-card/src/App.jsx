import "./App.css";
import TwittetrFollowCard from "./TwitterFollowCard";

export default function App() {
  return (
    <section className="App">
      <TwittetrFollowCard username="midudev" name="Miguel Angel Duran" />
      <TwittetrFollowCard username="pheralb" name="Pablo Hernandez" />
      <TwittetrFollowCard username="elonmusk" name="Elon Musk" />
    </section>
  );
}
