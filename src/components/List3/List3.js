import React from 'react'
import {Paper} from '@material-ui/core';
import Title from "./Title3";
import Card from './Card3';
import '../ALLstyles/List.css';
import Inputplace from './Inputplace3';
class List extends React.Component {
    state={
        currentIndex:-1,
        list: this.returnlist()
    }
    returnlist() {
        if(localStorage.getItem('newcard3')==null)
        localStorage.setItem('newcard3',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('newcard3'))
    }
    onAddoredit=(data)=>{
        var list = this.returnlist()
        list.push(data)
        localStorage.setItem('newcard3',JSON.stringify(list))
        this.setState(list)
    
    }
    handledelete=index=>{
        var list = this.returnlist()
        list.splice(index,1)
        localStorage.setItem('newcard3',JSON.stringify(list))
        this.setState({list,index:-1})
    }
    render(){
        const list = this.state.list;
        const card = list.map(item=> < Card key={item.id} rap={item.newcard3} handledelete={this.handledelete} />)
        return (
            <div>
                <Paper className="paper">
                    <Title/>
                    {card}
                    <Inputplace onAddoredit={this.onAddoredit}/>
                    
                </Paper>
                
            </div>
        )

    }
    
}

export default List;
