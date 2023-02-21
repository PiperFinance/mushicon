import './style.css';
import { createIcon } from './zooicon';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div id="parent">
    </div>
    <input id="textInput" type="text" placeholder="Type something..." value=""/>

`;



document.getElementById('textInput')!.addEventListener('keyup', (event) => {

  const parent = document.querySelector<HTMLDivElement>('#parent')

  parent?.removeChild(parent.lastChild!)

  let icon = createIcon({
    text: event.target.value,
    pxSize: 5,
  });

  document.querySelector<HTMLDivElement>('#parent')!.appendChild(icon);
});
