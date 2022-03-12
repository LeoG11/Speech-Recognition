const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('como estas')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Yo estoy bien';
      texts.appendChild(p)
    }
    if (text.includes("cual es tu nombre") || text.includes('cual es tu nombre')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Cifar';
      texts.appendChild(p)
    }
    if (text.includes('abre YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'abriendo canal';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
