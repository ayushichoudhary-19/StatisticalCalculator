const myFrom=document.getElementById('my-form');
const formValues=document.getElementById('Inputvalues');
const msg=document.getElementById('alert');
const submit=document.getElementById('submit');

submit.addEventListener("click", Calculate);

function checkError(formValues){
    let cleanValues=[];
    formValues.value.trim();
    valueArray=formValues.value.split(',');
    for(let i=0;i<valueArray.length;i++){
        valueArray[i].trim();
        setTimeout(() => msg.style.visibility='hidden',3000);
        if(valueArray[i]==''){
            msg.style.visibility='visible'; 
            return 0;
        }
        valueArray[i]=Number(valueArray[i]);
        if(isNaN(valueArray[i])){
            msg.style.visibility='visible'; 
            return 0;
        }
        cleanValues.push(valueArray[i]);    
    }
    return cleanValues;
    
}

function Calculate(event){
    event.preventDefault();
    cleanValues=checkError(formValues);
    if(cleanValues!=0){
        let N=cleanValues.length;
        let sum=0;
        for(let i=0;i<N;i++){
            sum=sum+cleanValues[i];
        }
        let mean=sum/N;
        let Xi_emu=0;
        for(let i=0;i<N;i++){
            Xi_emu=Xi_emu+(Math.pow((cleanValues[i]-mean),2))
        }
        let pSD= Math.pow((Xi_emu/N),0.5);
        let sSD=Math.pow((Xi_emu/(N-1)),0.5);
        let variance=Math.pow(sSD,0.5);

        msg.style.visibility='hidden'; 

        document.getElementById('sdResult').style.visibility='visible';  
        document.getElementById('mean').innerHTML=`Mean: ${mean}`;      
        document.getElementById('populationSD').innerHTML=`Population Standard Deviation is: ${pSD}`;
        document.getElementById('sampleSD').innerHTML=`Sample Standard Deviation is: ${sSD}`;
        document.getElementById('variance').innerHTML=`Variance is: ${variance}`;
    }
}
