let menu_Btn=document.querySelector('#menu-btn');
let navbar=document.querySelector('.nav');
menu_Btn.onclick=()=>{
    menu_Btn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
var group_add=document.querySelector('.root');
    var newDiv=React.createElement(
        'div',
        {
            className:"form-one-collection"
        },
        React.createElement(
            'label',
            {},
            "Inform",
        ),
        React.createElement(
            'span',
            {},
            React.createElement(
                'i',
                {
                    className:"fa-solid", className:"fa-envelope"
                },
                
            ),
            React.createElement(
                'div',
                {className:"notice"},
                'This will part of the metadata sent along with your token',
            ),
        ),
        React.createElement(
            'input',
            {type:"text",className:"name",placeholder:"Name of your inform"},       
        ),
        React.createElement(
            'input',
            {type:"text",className:"name",placeholder:"Value of your inform",},       
        ),
    
    );
//Add inform for token:

function Add(){
        ReactDOM.render(newDiv,group_add); 
}   
var payment=document.querySelector('.btn-submit');
payment.onclick=()=>{
    window.open('../Html/index.html','Payment');
}