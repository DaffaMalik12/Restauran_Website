const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
  const target = event.target;
  
  // Check if the clicked element is the plus or minus button
  if (target.id === 'plus' || target.id === 'minus') {
    const cardContent = target.closest('.content');
    const numElement = cardContent.querySelector('#num');
    
    if (target.id === 'plus') {
      incrementNum(numElement);
    } else if (target.id === 'minus') {
      decrementNum(numElement);
    }
  }
});

function incrementNum(numElement) {
  let num = parseInt(numElement.innerText, 10);
  num++;
  num = num < 10 ? '0' + num : num;
  numElement.innerText = num;
}

function decrementNum(numElement) {
  let num = parseInt(numElement.innerText, 10);
  if (num > 1) {
    num--;
    num = num < 10 ? '0' + num : num;
    numElement.innerText = num;
  }
}
