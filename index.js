import express from "express"
import cors from "cors"


const app=express()

const holidays = [
    { id:"1", date: "1/1/2022", name: "Confraternização mundial" },
    { id:"3", date: "3/1/2022", name: "Carnaval" },
    { id:"4", date: "4/17/2022", name: "Páscoa" },
    { id:"4", date: "4/21/2022", name: "Tiradentes" },
    { id:"5", date: "5/1/2022", name: "Dia do trabalho" },
    { id:"6", date: "6/16/2022", name: "Corpus Christi" },
    { id:"9", date: "9/7/2022", name: "Independência do Brasil" },
    { id:"10", date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { id:"11", date: "11/2/2022", name: "Finados" },
    { id:"11", date: "11/15/2022", name: "Proclamação da República" },
    { id:"12", date: "12/25/2022", name: "Natal" }
  ];

  app.get('/holidays/',(request , response)=>{
      response.send(holidays)

  })
  app.get('/holidays/:mes',(request , response)=>{

    const mes= request.params.mes
    console.log(mes)

    const feriado = holidays.filter(item=> item.id == mes)
    response.send(feriado)

 

})

  app.get('/is-today-holiday',(request , response)=>{
    const hoje = new Date();
    console.log(hoje.toLocaleDateString()); // 1/1/2022

    const verifica=holidays.find(day=>day.date==hoje)

    if(verifica){
        response.send("Sim , hj é feriado")
    }else{
        response.send("nao , hj nao é")
    }

})

app.listen(5006, () => {
    console.log('Ola o servidor está funcionando!!!!');
  });
  

  