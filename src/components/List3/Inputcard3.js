import React from 'react'
// import { Paper,Button, IconButton, InputBase } from '@material-ui/core';
// import ClearIcon from '@material-ui/icons/Clear'
import '../ALLstyles/Inputcard.css';
class  Inputcard extends React.Component {
    state = {
        newcard3 : [],
    }

    handleclick=e=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlesubmit=e=>{
        this.props.onaddoredit(this.state)

    }
    

    render(){
        
        return(
            <div className="card">
                <form class="confirm" onSubmit={this.handlesubmit}>
                    <input name="newcard3" placeholder="enter a title for this card" value={this.state.newcard3} onChange={this.handleclick}/>
                    <button type="submit">Add a new card</button>
                </form>
            </div>
        )
    }
}

export default Inputcard
