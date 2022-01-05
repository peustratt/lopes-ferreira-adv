import React from 'react'
import './sobre.scss'

function Sobre() {
    return (
        <div className='sobre' id='sobre'>
            <div className="img-wrapper">
                <img src="./images/library.jpg" alt="martelo da lei"/>
            </div>
            <div className="sobre__content">

                <h2 className="sobre__title">Sobre</h2>
                <div className="text-wrapper">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident repellendus ducimus illum? Temporibus, dolorum dignissimos. Excepturi hic earum rerum quidem! Obcaecati cupiditate, illum, temporibus asperiores unde exercitationem amet eveniet beatae, vero modi libero repudiandae doloremque nihil minus numquam in.</p>
                </div>
                <div className="sobre__boxes">

                    <div className="sobre__box">
                        <h3 className="box__title">Missão</h3>
                        <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae porro nulla, praesentium omnis libero fugit officiis totam sunt ea laboriosam reprehenderit quod! Accusantium earum, eligendi amet repellat quibusdam ipsam asperiores magni dolores, consectetur sint saepe labore perferendis nemo a delectus consequatur hic, dolore nihil magnam? Ut inventore quasi deserunt.</p>
                    </div>
                    <div className="sobre__box">
                        <h3 className="box__title">Visão</h3>
                        <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium voluptates adipisci impedit consequuntur atque reiciendis, dolor sunt quidem aspernatur veniam iste saepe necessitatibus beatae facilis et exercitationem suscipit sint in esse minus. Cumque repellendus alias voluptatibus maiores, impedit pariatur quisquam, mollitia adipisci facilis repellat officiis accusantium odio, dicta nisi.</p>
                    </div>
                    <div className="sobre__box">
                        <h3 className="box__title">Valores</h3>
                        <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi, iusto fugit fuga adipisci itaque voluptates minus tempora, inventore qui nihil nobis doloribus molestiae non! Iure itaque odio sunt aspernatur laborum esse! Provident nulla nisi soluta voluptatibus recusandae quibusdam praesentium, quia facilis reprehenderit sunt ea excepturi eum vel iusto officia!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sobre
