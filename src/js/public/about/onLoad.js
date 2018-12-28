import setTitle from './functions/setTitle';

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost/portfolio2019/admin//wp-json/wp/v2/pages/19')
    .then((response)=> {return response.json();})
    .then((data)=> {
        console.log(data);
        setTitle(data);
    });
});