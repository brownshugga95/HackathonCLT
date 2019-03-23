var userScore;
var ageScore;
var sexScore;
var incomeScore;
var raceScore;
//

function calcAge() {
    var ageInput = document.getElementById("userAge").value;
    if (ageInput>0 && ageInput<=18) {
        ageScore = "A"; //A is little to no risk HIV, little to no risk mental health
    } else if (ageInput>18 && ageInput<=40) {
        ageScore = "B"; //B is low risk HIV, little to no risk mental health
    } else if (ageInput>40 && ageInput<=60) {
        ageScore = "D"; //D is high risk HIV, mid risk mental health
    } else if (ageInput>60) {
        ageScore = "C"; //C is mid risk HIV, high risk mental health
    }
    return ageScore;
}

function calcSex() {
    if (document.getElementById("userSexF").checked) {
        sexScore = "F"; //Little risk HIV, mid risk mental health
    } else if (document.getElementById("userSexM").checked) {
        sexScore = "M"; //mid risk HIV, low risk mental health 
    }
    return sexScore;
}

function calcIncome() {
    var incomeInput = document.getElementById("userIncome").value;
    if (incomeInput>=0 && incomeInput<30000) {
        incomeScore = 4;    //mid to high risk of HIV, mid risk of mental health
    } else if (incomeInput>=30000 && incomeInput<60000) {
        incomeScore = 3;    //mid risk of HIV, insignificant on mental health
    } else if (incomeInput>=60000 && incomeInput<90000) {
        incomeScore = 2;    //low risk of HIV, insignificant on mental health
    } else if (incomeInput>=90000) {
        incomeScore = 1;    //little to no risk of HIV, insignificant on mental health
    }
    return incomeScore;
}

function calcRace() {
    var raceInput = document.getElementById("userRace").value;
    if (document.getElementById("raceWhite").checked) {
        raceScore = "W";    //low risk HIV, no relation with mental health
    } else if (document.getElementById("raceBlack").checked) {
        raceScore = "B";    //mid risk HIV, no relation with mental health
    } else if (document.getElementById("raceHispanic").checked) {
        raceScore = "H";    //mid risk HIV, no relation with mental health
    } else if (document.getElementById("raceNative").checked) {
        raceScore = "N";    //low risk HIV, no relation with mental health
    } else if (document.getElementById("raceAsian").checked) {
        raceScore = "A";    //low risk HIV, no relation with mental health
    }
    return raceScore;
}