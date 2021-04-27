document.addEventListener('DOMContentLoaded',()=>{

    const table = document.getElementsByClassName('rainbow')[0];
    const cells = Array.from(table.querySelectorAll('td'));
    let colors =['red', 'orange','yellow','green','blue','indigo','violet'];


    const btnOneStep = document.getElementsByClassName('toNextStep')[0];
    const btnCircleStep = document.getElementsByClassName('circleSteps')[0];
    const btnStop = document.getElementsByClassName('stop')[0];

    let circleFunc  =null;

    function moveColors(){
            let deletedElement = colors.shift();
            colors.push(deletedElement);
            cells.forEach((cell,idx) => cell.style.backgroundColor = colors[idx]);
    }

    btnOneStep.addEventListener('click',moveColors);

    btnCircleStep.addEventListener('click',()=>{
     if (circleFunc == null)
        circleFunc = setInterval(moveColors,300);
    
  
    });

    btnStop.addEventListener('click',()=>{
        clearInterval(circleFunc);
        circleFunc = null;
    });

    cells.forEach((cell,idx) => cell.style.backgroundColor = colors[idx]);

});