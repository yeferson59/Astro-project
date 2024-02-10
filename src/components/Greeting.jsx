import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>
        ¡Gracias por tu visita!
        Aquí puedes encontar sobre {greeting}
      </h3>
      <button  class=" flex flex-row justify-center" onClick={() => setGreeting(randomMessage())}>
        Continuar
      </button>
    </div>
  );
}