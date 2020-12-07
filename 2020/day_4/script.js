const {getInputArray} = require('../utilities.js')

// Day 4 - a
getInputArray()
    .then(data => getPassportInfo(data))
    .then(passports => countValidPassports(passports))
    .then(answer => console.log(answer))
    .catch(err => console.log(err))

const REQUIRED_FIELDS = ["byr","iyr","eyr","hgt","hcl","ecl","pid"];

function checkFieldValidity(passport) {

    const fields = Object.keys(passport);
    const invalidFields = []

    fields.forEach((field) => {

        let fieldValid = true;
        const val = passport[field];
     
        switch(field){
            case "byr":
                fieldValid = val.length == 4 && (val >= 1920 && val <= 2002)
                break;
            case "iyr":
                fieldValid = val.length == 4 && (val >= 2010 && val <= 2020)
                break;
            case "eyr":
                fieldValid = val.length == 4 && (val >= 2020 && val <= 2030)
                break;
            case "hgt":
                const [heightCM, afterCM] = val.split("cm");
                const [heightIN, afterIN] = val.split("in");
                fieldValid = (
                    (heightCM && afterCM == "") && (heightCM >= 150 && heightCM <= 193)
                ) || (
                    (heightIN && afterIN == "") && (heightIN >= 59 && heightIN  <= 76)
                )
                break;
            case "hcl":
                const [beforeHex, hexCode] = val.split("#");
                fieldValid = hexCode ? (hexCode && !beforeHex && (!!hexCode.match(/[a-f0-9]{6}/) != null)) : false;
                break;
            case "ecl":
                fieldValid = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(val)
                break;
            case "pid":
                fieldValid = !!val.match(/^\d{9}$/)
                break;
        }

        if (!fieldValid) {
            invalidFields.push(fieldValid);
        }
       
    });

    return !invalidFields.length
}

function passportIsValid(passport) {

    let passportValid = true;
    const fieldsPresent = Object.keys(passport);
    const numberOfFieldsPresent = fieldsPresent.length;
    
    if (numberOfFieldsPresent < REQUIRED_FIELDS.length) {
        passportValid = false;
    } else {
        REQUIRED_FIELDS.forEach((FIELD) => {
            if (!fieldsPresent.includes(FIELD)) {
                passportValid = false;
            }
        })
    }

    if (passportValid) {
        passportValid = checkFieldValidity(passport);
    }

    return passportValid;
}

function countValidPassports(passports){
    return passports.reduce((total,  passport) => total + Number(passportIsValid(passport)), 0);
}

function formatPassportData(passport) {
    const passportObject = {};

    const items = passport.split(' ');

    items.forEach(item => {
        const [key, val] = item.split(":");
        passportObject[key] = val;
    })

    return passportObject;
}

function getPassportArrayData(passports) {
    return passports.map(passport => {
        return formatPassportData(passport)
    });
}
    
function getPassportInfo(data) {

    let count = 0;
    let passports = [];

    data.forEach((item, i)=>{

        if (!passports[count]) {
            passports[count] = [item]
        } else {
            passports[count].push(item);
        }
        if (item === ""){
            count++
        }
    })

    passports = passports.map((passport) => {
        return passport.filter(line => line !== '').join(" ");
    })

    return getPassportArrayData(passports);;

}