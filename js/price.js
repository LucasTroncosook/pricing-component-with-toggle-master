const chekendBtn = document.getElementById('switch');
const h2Price = document.querySelectorAll('.main .container-cards .card .card-price h2');
const arrayPriceYear = [199.99,249.99,399.99]
const arrayPriceMonth = [19.99,24.99,39.99]
const mOrY = (e) =>{
    const status = e.target.checked;

    if(status){
        h2Price.forEach((h2, index) => {
            h2.textContent = `${arrayPriceMonth[index]}`
        })
    }else{
        h2Price.forEach((h2, index) => {
            h2.textContent = `${arrayPriceYear[index]}`
        });
    }
}

chekendBtn.addEventListener('click', mOrY);