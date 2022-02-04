const value_txt = document.querySelector("#value_txt");
const btn_numbers = Array.from(document.getElementsByClassName("button numbers"));
const btn_op = Array.from(document.getElementsByClassName("button operators"));

btn_numbers.map(btn =>{
    btn.addEventListener('click', (e)=>{
    value_txt.value += e.target.innerText;
    })
})

btn_op.map(btn =>{
    btn.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'C':
                value_txt.value = '';
            break;

            case '=':
                value_txt.value = eval(value_txt.value);
            break;
            default:
                value_txt.value += e.target.innerText;
        }
    })
})