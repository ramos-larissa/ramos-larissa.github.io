import React from "react";
import { Button, Card  } from '@material-ui/core';
import "../Header/style.css"



export default function Header(){
  return(
    <>
      <div id={'cardHeader'}>
        <Button id={'buttonHeader'}>Trabalhos</Button>
        <Button id={'buttonHeader'}>Contato</Button>
        <Button id={'buttonHeader'}>Sobre mim</Button>
      </div>
    </>
  )
}