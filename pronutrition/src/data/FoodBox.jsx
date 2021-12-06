import React, { Component } from 'react';
import Search from "./Search"
class FoodBox extends Component {
  constructor(props)
  {
    super(props)
    this.state ={
      Food:[
      {Name : "Orange", cal : "47", img:"https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg"},
      {Name : "apple", cal : "52", img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWX07iDArklMuiylVTsGCeBNlMvI4mwaI8w&usqp=CAU"},
      {Name : "Pizza", cal : "266" ,img:"https://i.imgur.com/eTmWoAN.png"},
      {Name : "bannana", cal : "89", img:"https://www.calorieking.com/food-images/us/c03d354f-af0a-4e3c-8c4d-adabe5d2b063.jpg"},
      {Name : "milk", cal :"42" ,img:"https//upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glass_of_Milk_%2833657535532%29.jpg/330px-Glass_of_Milk_%2833657535532%29.jpg"}
    ],
    searchText:"",
    calories_count : 0,
    myFruits : []
  }
  }
  render() {
    return (
      <div>
        <Search data = {this.state}/>
      </div>
    );
  }
}

export default FoodBox;