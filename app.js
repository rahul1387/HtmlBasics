var btn = document.querySelector('#sub-btn');

btn.addEventListener('click',function()
{
    var input1 = document.querySelector('#inpt1').value;
    var input2 = document.querySelector('#inpt2').value;
    if(!input1.length>0 || !input2.length>0 )
    {
        alert("Please enter the number")
    }else{
        document.querySelector('#res').innerHTML = "Result are "+(parseInt(input1)+parseInt(input2));
        console.log("Result are "+(parseInt(input1)+parseInt(input2)));
    }
    
})
