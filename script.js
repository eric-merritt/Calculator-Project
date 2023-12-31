let a;
let b;
let operator;
let result;
let lastClicked;

window.addEventListener('click',() => {
    console.table(a,operator,b,result);
})

const opers = {
    mult: { value: '*',},
    plus: { value: '+',},
    div: { value: '/',},
    sub: { value: '-',},
    equals: { value: '=',},   
}

const numberPad = '0,1,2,3,4,5,6,7,8,9,.';

const operPad = Object.values(opers);



const calculator = document.getElementById('calculatorheader');
    calculator.style.margin = 'auto';
    calculator.style.display = 'flex';
    calculator.style.flexDirection = 'column';
    calculator.style.width = '550px';
    calculator.style.backgroundColor = 'gray';
    calculator.style.padding = '30px';
    calculator.style.borderRadius = '10px';
    calculator.style.borderStyle = 'outset';
    calculator.style.boxShadow = '12px 12px 12px 1px black';
    

    const calcUpperRow = document.createElement('div');
        calcUpperRow.style.display = 'flex';
        calcUpperRow.style.flexDirection = 'row';
        calcUpperRow.style.borderBottom = '3px inset darkgray';

    const display = document.createElement('textarea');
        
        display.style.borderStyle = 'inset';
        display.style.borderWidth = '3px';
        display.style.backgroundColor = 'yellowgreen';
        display.style.margin = '5px';
        display.style.fontSize = '22px';
        display.setAttribute('id','display');
        display.setAttribute('rows','1');
        display.setAttribute('readonly','1');
        display.style.resize = 'none';
        display.style.padding = '10px'
        display.style.width = '100%';
        display.style.fontFamily = 'sans-serif';
        display.style.textAlign = 'right';
        
        display.textContent = '5318008';

        let defaultText = '5318008';

calcUpperRow.appendChild(display);

    
    const calcLowerRow = document.createElement('div');
        calcLowerRow.style.display = 'flex';
        calcLowerRow.style.flexDirection = 'row';
        calcLowerRow.style.height = '240px';
        calcLowerRow.style.marginTop = '10px';
    

const calculatorKeys = document.createElement('div');
    calculatorKeys.style.display = 'flex';
    calculatorKeys.style.flexDirection = 'column';
    calculatorKeys.style.height = '240px';
    calculatorKeys.style.flex = '1';    


const numPad = document.createElement('div');
    
    numPad.style.display = 'flex';
    numPad.style.flexWrap = 'wrap';
    numPad.style.flexDirection = 'row-reverse';
    numPad.style.height = 'inherit';
    
for (let i = 9; i > 0; i--){
    const numKey = document.createElement('button');
    numKey.textContent = i;
    numKey.setAttribute('id',`numKey${i}`);
    numKey.setAttribute('value',i);
    numKey.setAttribute('key',i);
    numKey.className = 'numKey';
    numKey.style.flex = '1';
    numKey.style.height = '50px';


function getNumbers(event){

if (operator == undefined){

    if (display.textContent == '0' || display.textContent == defaultText){
    
        if (event.target.value != '.'){

            display.textContent = event.target.value;

        } else {

            display.textContent = '0' + event.target.value;

        }


    } else if ((display.textContent.includes('.'))){

        if (event.target.value != '.'){

            display.textContent = display.textContent + event.target.value;
        
        } 

    } else if (!display.textContent.includes('.')){

        display.textContent = display.textContent + event.target.value;

    }

        a = (display.textContent * 1);

        return a;

    
} else if (operator != undefined && lastClicked != '='){


        if (display.textContent == '0' || lastClicked == operator){

            if (event.target.value != '.'){

                display.textContent = event.target.value;

            } else {

                display.textContent = '0' + event.target.value;
                        
            }

        } else if (display.textContent.includes('.') && event.target.value != '.') {

            display.textContent = display.textContent + event.target.value;

        } else if (!display.textContent.includes('.')){

            if (lastClicked == '+' || lastClicked == '-' || lastClicked == '*' || lastClicked == '/'){

            display.textContent = display.textContent + event.target.value;

            } else {

                if (lastClicked == operator){

                display.textContent = event.target.value;
                
                } else {

                    display.textContent = display.textContent + event.target.value;

                }

            }

        } else {

            if (lastClicked == '+' || lastClicked == '-' || lastClicked == '/' || lastClicked == '*'){

                display.textContent = event.target.value;

            } else {

                display.textContent = display.textContent + event.target.value;

            }

        }



        b = (display.textContent * 1);

        return b;
        
        
} else if (lastClicked == '='){

        a = undefined;
        b = undefined;
        operator = undefined;
        result = undefined;

    if (event.target.value != '.'){

    display.textContent = event.target.value;

    } else {

    display.textContent = '0' + event.target.value;
            
    }
}
    
 

}



numKey.addEventListener('click',getNumbers); 
    

    numPad.appendChild(numKey);

    if (i == 7 || i == 4 || i == 1){
        const rowDiv = document.createElement('div');
            rowDiv.style.width = '100%';
            numPad.appendChild(rowDiv);

            if (i == 1){
               const zeroKey = document.createElement('button');

    zeroKey.textContent = '0';
    zeroKey.setAttribute('id','numKey0');
    zeroKey.className = 'numKey';
    zeroKey.setAttribute('value','0');
    zeroKey.setAttribute('key','0')

    zeroKey.addEventListener('click',getNumbers) 


const decimalKey = document.createElement('button');

    decimalKey.textContent = '.';
    decimalKey.setAttribute('id','decimalKey');
    decimalKey.className = 'numKey';
    decimalKey.setAttribute('value','.');
    decimalKey.setAttribute('key','.');

    decimalKey.addEventListener('click',getNumbers)


    numPad.appendChild(decimalKey);
    numPad.appendChild(zeroKey);
            }
    }
}


const rightDiv = document.createElement('div');
    rightDiv.style.display = 'flex';
    rightDiv.style.flexDirection = 'column';

const clearDiv = document.createElement('div');
    clearDiv.display = 'flex';
    clearDiv.flexDirection = 'row';

const clearBtn = document.createElement('button');
    clearBtn.setAttribute('id','clearBtn');
    clearBtn.value = '0';
    clearBtn.textContent = 'C';
    clearBtn.style.width = '210px';
    clearBtn.style.margin = '5px';
    clearBtn.style.height = '50px'

    const clearDisplay = () => {

        display.textContent = '0';

        a = undefined;
        b = undefined;
        operator = undefined;
        result = undefined;

    }  
    
    clearBtn.addEventListener('click',clearDisplay); 


clearDiv.appendChild(clearBtn);


const operatorPad = document.createElement('div');
    operatorPad.style.display = 'flex';
    operatorPad.style.flexDirection = 'column';
    operatorPad.style.flexWrap = 'wrap';
    operatorPad.style.justifyContent = 'flex-end';
    operatorPad.style.height = '180px';


for (var key in opers){

    

    const operatorKey = document.createElement('button');

      operatorKey.className = 'operatorKey';
        operatorKey.setAttribute('id',`operatorKey${key}`);
        operatorKey.setAttribute('value',`${opers[key].value}`);
        operatorKey.setAttribute('key',`${opers[key].value}`);
        operatorKey.textContent = operatorKey.value;
        
        operatorPad.appendChild(operatorKey);

        

        const getOperator = (event) => {

        if (result == undefined && event.target.value == '='){

            if (a != undefined && b == undefined){
                
                result = a;

                display.textContent = Math.round((result + Number.EPSILON) *100)/100;

            } else if (a != undefined & b != undefined){

                result = operate(a,b);

                display.textContent = Math.round((result + Number.EPSILON) *100)/100;

            } 

        } else if (result != undefined && event.target.value == '='){

            a = result;

            result = operate(a,b);

            display.textContent = Math.round((result + Number.EPSILON) *100)/100;

        } else if (result == undefined && event.target.value != '='){

            if (a != undefined && b == undefined){

                if (display.textContent == '0.'){

                    display.textContent = '0.0';
                    
                    operator = event.target.value;

                    return operator;

                } else {

                operator = event.target.value;

                return operator;
                
                }
                
            } else if (a != undefined && b != undefined){

                if (lastClicked != '+' && lastClicked != '-' && lastClicked != '*' && lastClicked != '/' && lastClicked != '='){

                    result = operate(a,b);

                    display.textContent = Math.round((result + Number.EPSILON) *100)/100;
                
                    operator = event.target.value;

                    return operator;

                }
            } else if (a == undefined) {

                a = (display.textContent * 1);

                operator = event.target.value;

                return operator;
                
            } 

        } else if (result != undefined && event.target.value != '='){
            
            if (lastClicked != '-' && lastClicked != '+' && lastClicked != '/' && lastClicked != '*'){
            
                if (lastClicked == '='){

                    display.textContent = display.textContent;

                    operator = event.target.value;

                    return operator;

                } else {

                a = result;

                result = operate(a,b);

                display.textContent = Math.round((result + Number.EPSILON) *100)/100;

                operator = event.target.value;

                return result;

                }
            
            } else {

                display.textContent = display.textContent;

                operator = event.target.value;

                return operator;

            }

        } else if (display.textContent == '0' && event.target.value != '='){

            if (a == undefined){

                a = (display.textContent * 1);

                return a;

            } else if (a != undefined && b == undefined){

                operator = event.target.value;

                return operator;

            }

        } else if (display.textContent == '0.' && b == undefined){

            if (event.target.value != '='){

                display.textContent = '0.0';
            
            } else if (event.target.value == '='){

                display.textContent = '0';

            }
        
        } 

        }

        

operatorKey.addEventListener('click',getOperator); 

}
        





calculatorKeys.appendChild(numPad);

rightDiv.appendChild(clearDiv);
rightDiv.appendChild(operatorPad);

calcLowerRow.appendChild(calculatorKeys);
calcLowerRow.appendChild(rightDiv);

calculator.appendChild(calcUpperRow);
calculator.appendChild(calcLowerRow);

const multKey = document.getElementById('operatorKeymult');
multKey.classList.add('multKey');

const plusKey = document.getElementById('operatorKeyplus');
    plusKey.classList.add('plusKey');




function operate(a,b){

if (operator == '+'){
    return a + b;
} else if (operator == '-'){
    return a - b;
} else if (operator == '*'){
    return a * b;
} else if (operator == '/'){
    return a / b;
}

}



window.addEventListener('click', storeLastClicked)

function storeLastClicked(event){

lastClicked = event.target.value;

return lastClicked;

}



let clickTarget;

let equalsKey = document.querySelector(`button[value='=']`);

window.addEventListener('keyup',keyboardEntry)

function keyboardEntry(event){


    if (event.key != 'Enter'){

    clickTarget = document.querySelector(`button[value='${event.key}']`);

clickTarget.click();

}

}











