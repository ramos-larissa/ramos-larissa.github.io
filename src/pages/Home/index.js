import React from "react"
import "../Home/style.css"
import Header from "../../components/Header"



export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <div className={'banner-top'}>
          <img className={'img-perfil'}
               src={'https://media-exp3.licdn.com/dms/image/C4E03AQGhMiLkf7CN0g/profile-displayphoto-shrink_800_800/0/1623880288531?e=1629331200&v=beta&t=9ov7Lr0qsrhDU8mjNHH8Coon3GPXGm3GUTVBMQ3bXPg'}/>
        </div>
        <div className={'banner-top'}>
          <p style={{ color: "white", fontSize: 50}}> Larissa Ramos </p>
        </div>
      </div>
        <div id={'card'}>
          <p> Teste </p>
          <p> Teste </p>
          <p> Teste </p>
          <p> Teste </p>
          <p> Teste </p>
        </div>

      </>
      )
      }
