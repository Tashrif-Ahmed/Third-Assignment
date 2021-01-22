// https://github.com/Tashrif-Ahmed/Third-Assignment

/* #1 this function will convert kilometers to meters */
 function kilometerToMeter(km) {  // km = kilometer 
    var m  // m = meter
    var error="This value can't be a kilometer value, please try another value."
    if(km >= 0){
        m = km*1000;         
        return m;
     }
     else{
         return error;
     }
     
 }

 var meter = kilometerToMeter(8)
 console.log(meter)





// #2 this function will give me total cost the products i have ordered

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var total
    error2 = "wrong value , please try again"
    if(watch < 0 || phone < 0 || laptop < 0 ){
        return error2;
    }
    else{
        total =watch*watchPrice + phone*phonePrice + laptop*laptopPrice;
        return total;
    }
}
totalPrice = budgetCalculator(2,9,1);
console.log(totalPrice);



// #3 this function will calculate my cost in hotle

function hotelCost(days) {
    var error = "not number of days"
    if (days >= 0 && days <= 10) {
        var totalCost = days*100;
        return totalCost;
        
    }
    else if (days > 10  && days <= 20) {
        firstTenDaysCost = 10*100;
        afterTenDayscost = (days-10)*80;
        totalCost = firstTenDaysCost+afterTenDayscost;
        return totalCost;

    }
    else if (days > 20) {
        firstTenDaysCost = 10*100;
        afterTenDayscost = 10*80;
        afterTwentyDayscost = (days-20)*50;
        totalCost = firstTenDaysCost+afterTenDayscost+afterTwentyDayscost;
        return totalCost;

    }
    else{
        return error;
    }
}
var hotleStayingCost = hotelCost(75);
console.log(hotleStayingCost);



/*
#4 this function will return me my friend's name wity the biggest legth
If more then 1 name has the largest length this function will return those aswell. 
*/ 

function megaFriend(names) {
    var largestNameLength = 0;
    for (let i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length > largestNameLength){
            largestNameLength = element.length;
        }

        
    }
    var largestNames= [];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length == largestNameLength) {
            largestNames.push(element)
            
        }
        
    }
    return largestNames;
}
friendNames = megaFriend(["Rafi", "Riaj", "Siam", "abcgef", "Mrinmoy", "Nrinmoy","Drinmoy","Saif"])
console.log(friendNames);