import React, {useState} from 'react';
import styles from './app.module.css';
import withStore from '~/hocs/withStore';
import {observer, inject} from "mobx-react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));
const App = inject("stores")(observer( ({stores}) => {
    const classes = useStyles();
    const [text, setText] = useState('')
    // let cart = props.stores.cart;

    const handleSubmit = (e)=>{
        e.preventDefault()
        stores.todo.addTask(text)
        setText('')
    }

    const handleRemove = (id)=>{
        stores.todo.removeTask(id)
    }


        return (
            <div>
                <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                    <TextField id="standard-basic" value={text} onChange={e=>setText(e.target.value)} label="Standard" />
                </form>
                <List component="nav" aria-label="secondary mailbox folders">
                    {
                        stores.todo.tasks.map((el, i)=>{
                            return  <ListItem button key={el.id}>
                                <ListItemText primary={el.text} />
                                <DeleteForeverIcon onClick={()=>handleRemove(el.id)} />
                            </ListItem>
                        })
                    }
                </List>
            </div>
        )
}))

export default App;