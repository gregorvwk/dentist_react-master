import React, { Component } from "react"
import App from"./App"
import names from "./utils";

class ContainerApp extends Component{
    constructor(){
        super()
        this.state = {
            tandarts: [
                {"id":1001,"name":"Marcello","surname":"Birtwell","email":"mbirtwell0@tandartspraktijkbvt.nl","birthyear":2003,"phone":"295-199-0707","isZiek":false},
                {"id":1002,"name":"Rachele","surname":"Grogono","email":"rgrogono1@tandartspraktijkbvt.nl","birthyear":2003,"phone":"217-691-1813","isZiek":false},
                {"id":1003,"name":"Ingra","surname":"Benham","email":"ibenham2@tandartspraktijkbvt.nl","birthyear":2009,"phone":"549-877-6196","isZiek":false},
                {"id":1004,"name":"Karena","surname":"Jewers","email":"kjewers3@tandartspraktijkbvt.nl","birthyear":1996,"phone":"474-384-0823","isZiek":false}],
            assistent: [
                {"id":1005,"name":"Blanche","surname":"Filchagin","email":"bfilchagin4@tandartspraktijkbvt.nl","birthyear":2006,"phone":"561-112-0635"},
                {"id":1006,"name":"Hallsy","surname":"Pennell","email":"hpennell5@tandartspraktijkbvt.nl","birthyear":1973,"phone":"286-184-6500"},
                {"id":1007, "name": "", "surname": ""}],
            patienten: names,
            appointment: []
        }
        this.generateRandomAppointment = this.generateRandomAppointment.bind(this)
        this.getRandomTime = this.getRandomTime.bind(this)
        this.getRandomDay = this.getRandomDay.bind(this)
        this.getRandomDentist = this.getRandomDentist.bind(this)
        this.getRandomAssistent = this.getRandomAssistent.bind(this)
        this.getRandomPatient = this.getRandomPatient.bind(this)
        this.randomAppointments = this.randomAppointments.bind(this)
        this.setAppoitments = this.setAppoitments.bind(this)
        this.handleIsZiek = this.handleIsZiek.bind(this)
        this.handleDeleteAppointment = this.handleDeleteAppointment.bind(this)
        this.handleDoubleAppointment = this.handleDoubleAppointment.bind(this)
    }    

    getRandomTime = () => {
        let hour;
        while (true) {
            hour = Math.floor(Math.random() * 24);
            if (hour > 7 && hour < 19) {
            return hour;
            }
        }
    };

    getRandomDay() {
        return Math.floor(Math.random() * 20) + 1;
    };
    getRandomDentist = () => {
        const person = this.state.tandarts[Math.floor(Math.random() * 4)];
        return person;
    };
    getRandomAssistent = () => {
        const person = this.state.assistent[Math.floor(Math.random() * 3)];
        return person;
    };
    getRandomPatient = () => {
        const person = this.state.patienten[Math.floor(Math.random() * 1000)];
        return person;
    };

    generateRandomAppointment = () => ({
                day: this.getRandomDay(),
                time: this.getRandomTime(),
                patient: this.getRandomPatient(),
                dentist: this.getRandomDentist(),
                assistant: this.getRandomAssistent(),
    }); 
    randomAppointments = num => Array(num).fill(0).map(_ => this.generateRandomAppointment())

    setAppointments(){
        const addAppointment = this.randomAppointments(150)
        this.setState((prevstate) => {
            const newAppointments = [...prevstate.appointment , addAppointment]
            return {appointment: newAppointments[0]}
        })
    }

    componentDidMount(){
        this.setAppointments()
        this.handleDoubleAppointment()
    }
    handleDoubleAppointment(){
        console.log(this.state.appointment)
    }
    handleIsZiek(id){
        this.setState(prevstate =>{
            const updateIsZiek = prevstate.tandarts.map(arts => {
                if(id === arts.id){
                    arts.isZiek = true
                }
                return arts
            })
            return {tandarts: updateIsZiek}
        })
    }

handleDeleteAppointment(name, time){
    this.setState(prevstate => {
        const findAppointment = prevstate.appointment.filter(appointment => {
            if(name.name === appointment.patient.name && (time === appointment.time || true)){
                return !appointment
            }
            return appointment
        })
        return {appointment: findAppointment}
    })
}
    render() {
        return (
            <div>
                <App appointments={this.state.appointment.sort((a, b) => a.time - b.time)} 
                    employees={this.state} 
                    handleClick={this.handleIsZiek}
                    handleDelete={this.handleDeleteAppointment}
                />
            </div>
        )
    }
}

export default ContainerApp