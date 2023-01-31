/*function cpp(frequency, time) {
    per_week = frequency * 4;
    time_in_week = time * 52;
    load = per_week * time_in_week;
    load_in_gallons = ((load/1000)/3.78);
    profit =  load_in_gallons * 190000;
    return Number(profit);
}*/
/*FAILSAFE*/
function JProfit{
var USERINPUT1 = document.JizzProf.INPUT1.value;
var CALC1 = USERINPUT1 * 4;
var CALC2 = USERINPUT2 * 52;
var CALC3 = CALC1 * CALC2;
var CALC4 = (CALC3/1000)/3.78;
var CALC5 = CALC4 * 190000;
var CALC5 = OUTPUT1;
document.JizzProf.OUTPUT1.value = CALC5;
}
