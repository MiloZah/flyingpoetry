import MovingLetters from "../components/MovingLetters";

const text = `
  A poet is a painter. And conversely. A painter is a poet. This identity was
  announced by Guillaume Apollinaire. Michal Fostowicz is an artist corroborating
  this rule. His images are poetry materialized. But they are also something more.
  They are relations from inside the matter, they describe things coming into existence or transforming,
  seeking their proper shapes, seeking convenience, perhaps seeking a definition.
  Poetry finds its way into flesh. Flesh becomes poetry. Just like in a reciprocal Eucharist of beauty
  which can never find peace.
`;

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-96 h-96 bg-gray-900 border border-gray-700 p-4 overflow-hidden">
        <MovingLetters text={text} />
      </div>
    </div>
  );
}