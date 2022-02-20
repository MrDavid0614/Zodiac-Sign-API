const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const { day, month } = req.query

    if (day && month) {
        return res.send({ signo: getZodiac(+day, +month) });
    }

    res.send("Hello!");
});

function getZodiac(dayOfBirth, monthOfBirth) {
    let sign = "";

    if (monthOfBirth === 1)
        if ((dayOfBirth <= 20))
            sign = "Capricornio"
        else
            sign = "Acuario"

    else if (monthOfBirth == 2)
        if (dayOfBirth <= 18)
            sign = "Acuario"
        else
            sign = "Piscis"
        
    else if (monthOfBirth === 3)
        if (dayOfBirth <= 20)
            sign = "Piscis"
        else
            sign = "Aries"
    else if (monthOfBirth === 4)
        if (dayOfBirth <= 20)
            sign = "Aries"
        else
            sign = "Tauro"
    else if (monthOfBirth === 5)
        if (dayOfBirth <= 21)
            sign = "Tauro"
        else
            sign = "Géminis"
    else if (monthOfBirth === 6)
        if (dayOfBirth <= 21)
            sign = "Géminis"
        else
            sign = "Cáncer"
    else if (monthOfBirth === 7)
        if (dayOfBirth <= 22)
            sign = "Cáncer"
        else
            sign = "Leo"
    else if (monthOfBirth === 8)
        if (dayOfBirth <= 23)
            sign = "Leo"
        else
            sign = "Virgo"
    else if (monthOfBirth === 9)
        if (dayOfBirth <= 23)
            sign = "Virgo"
        else
            sign = "Libra"
    else if (monthOfBirth === 10)
        if (dayOfBirth <= 23)
            sign = "Libra"
        else
            sign = "Escorpio"
    else if (monthOfBirth === 11)
        if (dayOfBirth <= 22)
            sign = "Escorpio"
        else
            sign = "Sagitario"
    else if (monthOfBirth === 12){
        if (dayOfBirth <= 21)
            sign = "Sagitario"
        else
            sign = "Capricornio"
    }
    return sign
}

app.listen(PORT, () => {
    console.log(`Server listening on http//localhost${ PORT }`);
})