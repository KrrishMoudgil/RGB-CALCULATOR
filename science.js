const oneBtn=document.getElementById('oneBtn');
const box2 = document.getElementById('box2');
const twoBtn=document.getElementById('twoBtn');
const threeBtn=document.getElementById('threeBtn');
const fourBtn=document.getElementById('fourBtn');
const fiveBtn=document.getElementById('fiveBtn');
const sixBtn=document.getElementById('sixBtn');
const sevenBtn=document.getElementById('sevenBtn');
const eightBtn=document.getElementById('eightBtn');
const nineBtn=document.getElementById('nineBtn');
const zeroBtn=document.getElementById('zeroBtn');
const plusBtn=document.getElementById('plusBtn');
const minusBtn=document.getElementById('minusBtn');
const submitBtn=document.getElementById('submitBtn');
const MultiplyBtn=document.getElementById('MultiplyBtn');
const PercentageBtn=document.getElementById('PercentageBtn');
const ExponentBtn=document.getElementById('ExponentBtn');
const DivideBtn=document.getElementById('DivideBtn');
const dotBtn=document.getElementById('dotBtn');
const NopeBtn=document.getElementById('NopeBtn');
const clrBtn=document.getElementById('clrBtn');



oneBtn.onclick= function(){

    box2.textContent += 1;
};

twoBtn.onclick= function(){

    box2.textContent += 2;
};

threeBtn.onclick= function(){

    box2.textContent += 3;
};

fourBtn.onclick= function(){

    box2.textContent += 4;
};

fiveBtn.onclick= function(){

    box2.textContent += 5;
};

sixBtn.onclick= function(){

    box2.textContent += 6;
};


sevenBtn.onclick= function(){

    box2.textContent += 7;
};


eightBtn.onclick= function(){

    box2.textContent += 8;
};

nineBtn.onclick= function(){

    box2.textContent += 9;
};

zeroBtn.onclick= function(){

    box2.textContent += 0;
};

plusBtn.onclick=function(){

    box2.textContent += '+';
}

minusBtn.onclick=function(){

    box2.textContent +='-';
}

MultiplyBtn.onclick=function(){

    box2.textContent +='*';
}

DivideBtn.onclick=function(){

    box2.textContent +='/';
}

dotBtn.onclick=function(){

    box2.textContent +='.';
}

PercentageBtn.onclick=function(){

    box2.textContent +='%';
}

ExponentBtn.onclick=function(){

    box2.textContent +='**';
}

NopeBtn.onclick=function(){
    box2.textContent ='Kya kar raha hai TU!';
}

clrBtn.addEventListener('click', function() { 

    box2.textContent= '';
});

submitBtn.addEventListener('click', calculateResult);

function calculate(operator) {
    document.getElementById('box2').textContent += operator;

}

function calculateResult(){
    const expression = document.getElementById('box2').textContent;
    try {
        const result= eval(expression);
        document.getElementById('box2').textContent= result;
    } catch(error) {
        console.error('Galat Hai!',error);
        document.getElementById('box2').textContent ='Galat Hai!';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

   
    if (!isNaN(parseInt(key)) || ['+', '-', '*', '/','%','.','**'].includes(key)) {
        
        box2.textContent += key;
    } else if (key === 'Enter') {
       
        calculateResult();
    } else if (key === 'Escape') {
    
        box2.textContent = '';
    }
});

