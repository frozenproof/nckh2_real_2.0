
window.addEventListener('click', function() {
    var menu_Btn=document.querySelector('#menu-btn');
    var navbar=document.querySelector('.nav');
    menu_Btn.onclick=()=>{
        menu_Btn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
});
//Add inform for token:
// function Add(){
//     let group_add=document.querySelector('.root');
//     let newDiv=React.createElement(
//         'div',
//         {
//             className:"form-one-collection"
//         },
//         React.createElement(
//             'label',
//             {},
//             'Inform  ',
//         ),
//         React.createElement(
//             'span',
//             {},
//             React.createElement(
//                 'i',
//                 {  
//                     className:"fa-solid fa-circle-plus"
//                 },
                
//             ),
//             React.createElement(
//                 'div',
//                 {className:"notice"},
//                 'This will part of the metadata sent along with your token',
//             ),
//         ),
//         React.createElement(
//             'input',
//             {type:"text",className:"name",placeholder:'Name of your inform'},       
//         ),
//         React.createElement(
//             'input',
//             {type:"text",className:"name",placeholder:"Value of your inform",},       
//         ),
    
//     );
//     ReactDOM.render(newDiv,group_add);
// }   
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// let submit=document.querySelector('.btn-submit');
// submit.onclick=()=>{
//     let Display1=document.querySelectorAll(".check-value");
//     let Display2=document.querySelectorAll(".check-value-ria");
//     let getValue_input=document.querySelectorAll('.collection-input');
//     for(var i=0;i<getValue_input.length;i++){
//         if(getValue_input[i].value==""){
//             Display1[i].style.display="block"; 
//             Display2[i].style.display="block";
//           }
//         else {
//             Display1[i].style.display="none"; 
//             Display2[i].style.display="none";
//           }      
//     } 
// }
// // display image 
// const fileInput = document.getElementById('input-file');
// const imageContainer = document.getElementById('image-container');

// fileInput.addEventListener("change", (event) => {
//   const files = event.target.files;
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const img = document.createElement('img');
//       img.src = reader.result;
//       imageContainer.appendChild(img);
//     }
//   }
// });