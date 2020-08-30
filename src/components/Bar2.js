import React from 'react'
import "./Bar2.css";
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {IconButton, Avatar} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

function Bar2() {
    return (
        <div className = "bar_2">
            <div className = "leftbar" >
                <h3>Kanban Board</h3>
            
                <IconButton>
                    <StarBorderRoundedIcon />
                </IconButton>
               
                <Avatar />
                
            </div>
            <div className  = "rightbar">
            <IconButton>
            <MoreHorizIcon/>
                <h1 className = "show">Show Menu</h1>
                
            </IconButton>
            </div>
        </div>

    )
}

export default Bar2
