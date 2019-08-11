/*

let formSend = document.getElementById('button4block');

formSend.addEventListener('click',(e)=>{
    e.preventDefault();
});

let cards = document.getElementsByClassName('service_card');

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click',()=>{
        let n = cards[i].querySelector('.service_name');
        switch(n.innerText.toLowerCase()){
            case 'минимум':
                alert('вы выбрали минимум');
       
            break;
            case 'стандарт':
                alert('вы выбрали стандарт');
             
            break;
            case 'максимум':
                alert('вы выбрали максимум');
       
            break;
        }

    });
}
*/

let images = document.getElementsByClassName('social_img');

Array.prototype.forEach.call(images,function(item){
        item.addEventListener('click',()=>{
            alert();
        });
});