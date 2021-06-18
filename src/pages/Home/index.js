import React from "react"
import "../Home/style.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


export default function Home() {
  return (
    <>
      <Header/>
      <div className={'banner-top'}>
        <img className={'img-perfil'}
             src={'https://media-exp3.licdn.com/dms/image/C4E03AQGhMiLkf7CN0g/profile-displayphoto-shrink_800_800/0/1623880288531?e=1629331200&v=beta&t=9ov7Lr0qsrhDU8mjNHH8Coon3GPXGm3GUTVBMQ3bXPg'}/>
      </div>
      <div className={'banner-top'}>
        <p style={{color: "white", fontSize: 50}}> Larissa Ramos </p>
      </div>
      <div id={'card'}>
        <div className={"carrer"}>
          <center>Experiencias:</center>
          <span>
          Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro,
          já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês.
          -Dilma: O que que é R$10 mil? A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de
          exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente
          lucravito. Derrubar arvores da natureza é muito lucrativo!
          Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro,
          já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês.
          -Dilma: O que que é R$10 mil? A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de
          exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente
          lucravito. Derrubar arvores da natureza é muito lucrativo!
          Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro,
          já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês.
          -Dilma: O que que é R$10 mil? A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de
          exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente
          lucravito. Derrubar arvores da natureza é muito lucrativo!
        </span>
        </div>
      </div>

      <div className="container">
        <article className="card">
          <div className="flip">
            <section className="front-card">
              <img src="https://i1.wp.com/blog.nubank.com.br/wp-content/uploads/2019/02/Dashboard-cardAnalytics-1.png?resize=288%2C512&ssl=1" alt="Goblin Guide" style={{width: 250}}/>
            </section>

            <section className="back-card">
              <img src="https://vidafullstack.com.br/wp-content/uploads/2020/01/back-card.jpg" alt="Back Card"/>
            </section>
          </div>
        </article>

        <article className="card">
          <div className="flip">
            <section className="front-card">
              <img src="https://play-lh.googleusercontent.com/j9lwZ8W2xiyBfgfkc1aO3ZnLYaPIHHjURx-RfWwAGXnWmKhA7tgsXNBATGIQVQ14WA" alt="Arid Mesa" style={{width: 250}}/>
            </section>

            <section className="back-card">
              <img src="https://vidafullstack.com.br/wp-content/uploads/2020/01/back-card.jpg" alt="Back Card"/>
            </section>
          </div>
        </article>

        <article className="card">
          <div className="flip">
            <section className="front-card">
              <img src="https://s2.glbimg.com/9QyAidtcpGagLBs6ikNjTLvuCTM=/0x600/s.glbimg.com/po/tt2/f/original/2014/05/20/ifood-1.png" alt="Path to Exile" style={{width: 250}}/>
            </section>

            <section className="back-card">
              <img src="https://vidafullstack.com.br/wp-content/uploads/2020/01/back-card.jpg" alt="Back Card"/>
            </section>
          </div>
        </article>
      </div>

      <div className="footer">
        <img className={"img-footer"} src={"https://image.flaticon.com/icons/png/512/174/174857.png"}/>
        <img className={"img-footer"}
             src={"https://image.flaticon.com/icons/png/512/25/25231.png"}/>
        <img className={"img-footer"}
             src={"https://www.ifpb.edu.br/relacoes-internacionais/imagens/email.png/@@images/image.png"}/>
      </div>
    </>
  )
}
