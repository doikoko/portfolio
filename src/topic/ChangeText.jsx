import React from "react";

class ChangeText extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            develop: "",
        }
        this.usages = {
            firstRow: "Daniil Sasunov",
            lastRow: "Front-End Developer"
        }
        this.interval = null
        this.countFirstRow = 0
        this.countLastRow = 0
        this.frLength = this.usages.firstRow.length
        this.lrLength = this.usages.lastRow.length

        this.edit()
        this.endEdit()
    }
    edit(){
        this.interval = setInterval(() => {
            this.countFirstRow < this.frLength?
                this.setState({
                name: this.state.name + this.usages.firstRow[this.countFirstRow],
                develop: this.state.develop + this.usages.lastRow[this.countLastRow]}):

                this.setState({
                develop: this.state.develop + this.usages.lastRow[this.countLastRow]})

            this.countFirstRow++
            this.countLastRow++
            this.endEdit()
        }, 100)
    }
    endEdit(){
        if(this.countLastRow >= this.lrLength) clearInterval(this.interval)
    }
    render() {
        return(<div>
            <h2>{this.state.name}</h2>
            <h3>{this.state.develop}</h3>
            </div>
        )
    }
}

export default ChangeText