let display = document.getElementById('display');

    function clearDisplay() {
      display.textContent = '0';
    }

    function addInput(value) {
      if (display.textContent === '0') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }

    function calculateResult() {
      try {
        display.textContent = eval(display.textContent.replace('÷', '/').replace('×', '*'));
      } catch (e) {
        display.textContent = 'Error';
      }
    }