const form = document.querySelector('form');

form.addEventListener('submit', function (form) {
  form.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    const para = document.createElement('p');
    if (bmi < 18.6) {
      const un = document.createTextNode('Under Weight');
      para.appendChild(un);
      result.appendChild(para);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      const un = document.createTextNode('Normal Range');
      para.appendChild(un);
      result.appendChild(para);
    } else {
      const un = document.createTextNode('Overweight');
      para.appendChild(un);
      result.appendChild(para);
    }
  }
});
