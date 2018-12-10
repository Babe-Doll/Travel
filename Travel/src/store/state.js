let defaultCity = '郑州'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }

}catch (e){

}

export default{
    // city的值默认localStorage.city去取，取不到用郑州
    city: defaultCity
}