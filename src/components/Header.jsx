import React from 'react'

export const Header = () => {
  return (
    <div>
            {/* <!-- header --> */}
    <header className="header" id="header">
        <div className="flex items-center">
            <div className="container-nav hover:bg-[#f2f2f2]" id="icono-bar">
                <img src="/img/icono-nav-bar.png" alt='Navbar' className="w-6"/>
            </div>

            <img src="/img/logo.png" alt="" className="inline-block w-[120px] mx-5 cursor-pointer" />
        </div>
        <div className="center" id="center">
            <div className="container-search">
                <div className="icono">
                    <img src="/img/icono-search.png" className="icono w-[22px] h-[22px]" alt='Search' />
                </div>

                <input type="text" placeholder="Buscar" id="buscar"  className="inline-block w-full border-none p-2.5 ml-2.5 outline-none" />
                <div className="button-search hover:bg-[#f2f2f2]">
                    <img src="/img/icono-search.png" alt='Search' className="w-5 h-[22px]"/>
                </div>
            </div>
            <div className="container-micro hover:bg-[#f2f2f2]">
                <img src="/img/icono-microphone.png" className="micro" alt='Microphone'/>
            </div>
        </div>
        <div className="end">
            <div className="item-end hover:bg-[#f2f2f2]">
                <img src="/img/icono-camera.png" className="camera w-6 inline-block mx-[15px] hover:bg-[#f2f2f2]" alt='Camera'/>
            </div>
            <div className="item-end hover:bg-[#f2f2f2]">
                <img src="/img/icono-alarm.png" alt='Alarm' className="w-6 inline-block mx-[15px] hover:bg-[#f2f2f2]"/>
            </div>
            <img src="/img/logoCanal.jpeg" alt="" className="logo-canal w-8 cursor-pointer" />
        </div>
    </header>
    </div>
  )
}
