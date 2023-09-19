
      /*============= type js ==========================*/ 
  const typed = new Typed('.main-title' ,{
  strings :[ '' ,'Othman Shbeir' , 'Islam Abu Safyia ' , 
'Yousef-aljebrini ' , 'Rami Asad' ,'Sajeda Ali' ,'Shurouq Abu Ewili' ,'Sary Hammad'],
    typeSpeed : 100 ,
    backSpeed : 100 ,
    backDelay : 1000 ,
    loop : true
  });
  const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});




const numberInput = document.getElementById('numberInput');
        const errorMessage = document.getElementById('errorMessage');

        numberInput.addEventListener('input', () => {
            const inputValue = parseInt(numberInput.value);

            if (isNaN(inputValue) || inputValue < 0 || inputValue > 3) {
                errorMessage.textContent = 'Please enter a number between 0 and 3.';
                numberInput.setCustomValidity('Invalid input');
            } else {
                errorMessage.textContent = '';
                numberInput.setCustomValidity('');
            }
        });
function submitNumber() {
            const numberInput = document.getElementById('numberInput');
            const enteredNumber = numberInput.value;
            
            // Replace this with your desired action
            alert('Entered number: ' + enteredNumber);
        }