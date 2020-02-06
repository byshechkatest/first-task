      function checkStr(){
        let sum = 0;
        let arrayStr = document.getElementById('str').value;
        arrayStr = arrayStr.replace(/[.,"":;]/g,'').replace(' - ',' ')
        arrayStr = arrayStr.split([' ']);
        arrayStr.forEach(element => {
            sum += element.length
        });
         middleWord = sum/arrayStr.length;
         document.getElementById('result').innerHTML = middleWord;
        }
     