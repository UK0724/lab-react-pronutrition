import React, { Component } from 'react';
import "./FoodBox.css"


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.data
    }
    

    changeHandler = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    addHandler = (event) => {
        const val = this.state.Food.filter((ele)=> ele.Name === event.target.value)
        const Name = val.map(ele => ele.Name).toString() 
        const cal = val.map(ele => ele.cal).toString()
        const count = document.getElementById(event.target.value).value;
        console.log(Name,cal,count);
        let fruitObj = {
            id: event.target.value,
            text: `${count} ${event.target.value} = ${(cal) * count}`,
            btn_id: `${event.target.value}R`,
            calo: cal * count
        }
        this.setState({
            myFruits: this.state.myFruits.concat(fruitObj),
            calories_count: this.state.calories_count + (cal * count)
        })
        console.log(this.state.calories_count)
    }

    removeFruit = (event) => {
        document.getElementById(event.target.value).remove();
        let calorie = this.state.myFruits.filter((fruit) => {
            return `${fruit.id}R` === event.target.value
        })
        this.setState({
            calories_count: this.state.calories_count - calorie[0].calo
        })
    }

    render() {
        return (
            <>
                <div className="search-container">
                    <h1>Search</h1>
                    <input type="text" placeholder="Find a food" onChange={this.changeHandler} id="search" />
                </div>
                <div className="food-container">  
                    <div className="left">
                        {this.state.Food.filter((Food) => {
                            return Food.Name.toLowerCase().includes(this.state.searchText.toLowerCase());
                        })
                            .map((Food) => {
                                return <div key={Food.Name} className="Food">
                                    <img src={Food.img} alt="" />
                                    <div className="detail">
                                        <h1>{Food.Name}</h1>
                                        <h4>{Food.cal}</h4>
                                    </div>
                                    <div className="count">
                                        <input type="number" defaultValue="1" id={Food.Name} min="1" />
                                        <button onClick={this.addHandler} value={Food.Name}>+</button>
                                    </div>
                                </div>
                            })}
                    </div>
                    </div>
                    <div className="right">
                        <h1>Today's Food {this.state.calories_count} Calories</h1>
                        {
                            this.state.myFruits.filter((fruit) => {
                                return fruit.text !== "";
                            })
                                .map((fruit) => {
                                    return <div key={fruit.id} className="item" id={fruit.btn_id}>
                                        <span>{fruit.text}</span>
                                        <button onClick={this.removeFruit} value={fruit.btn_id}>X</button>
                                    </div>
                                })
                        }
                    </div>
                    </>)
                    }

    }

export default Search;