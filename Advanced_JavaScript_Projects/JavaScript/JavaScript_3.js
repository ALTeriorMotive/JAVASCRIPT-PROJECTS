function showCom(company){
    var com = company.getAttribute('data-company');
    company.setAttribute('data-company', company.innerHTML);
    company.innerHTML = com;
}