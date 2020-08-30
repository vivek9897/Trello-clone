import React from 'react'
import '../ALLstyles/Title.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

class Title extends React.Component {
    state={
        value:"Add Title",
        isInEditMode:false
    }
    changeEditmode=()=>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }
    updateComponentValue=()=>{
        this.setState({
            isInEditMode:false,
            value: this.refs.theTextInput.value
        })
    }
    renderEditView=()=>{
        return <div>
            <input
            type='text'
            defaultValue={this.state.value}
            ref="theTextInput"
            />
            <button onClick={this.changeEditmode}>X</button>
            <button onClick={this.updateComponentValue}>yes</button>
        </div>
    }
    renderDefaultView=()=>{
        return <div onClick={this.changeEditmode}>
            {this.state.value}

        </div>
    }
    render(){
        return (
            <div className="container">
            {this.state.isInEditMode?
            this.renderEditView(): 
            this.renderDefaultView()
              }
              <MoreHorizIcon/>
            </div>
                

           
       
        
    
)

    }
   
}


export default Title;
