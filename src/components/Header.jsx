import React from 'react'

export const Header = () => {
  return (
    <div>
            {/* <!-- header --> */}
    <header class="header" id="header">
        <div class="flex items-center">
            <div class="container-nav hover:bg-[#f2f2f2]" id="icono-bar">
                <img src="/img/icono-nav-bar.png" alt='Navbar' class="w-6"/>
            </div>

            <img src="/img/logo.png" alt="" class="inline-block w-[120px] mx-5 cursor-pointer" />
        </div>
        <div class="center" id="center">
            <div class="container-search">
                <div class="icono">
                    <img src="/img/icono-search.png" class="icono w-[22px] h-[22px]" alt='Search' />
                </div>

                <input type="text" placeholder="Buscar" id="buscar"  class="inline-block w-full border-none p-2.5 ml-2.5 outline-none" />
                <div class="button-search hover:bg-[#f2f2f2]">
                    <img src="/img/icono-search.png" alt='Search' class="w-5 h-[22px]"/>
                </div>
            </div>
            <div class="container-micro hover:bg-[#f2f2f2]">
                <img src="/img/icono-microphone.png" class="micro" alt='Microphone'/>
            </div>
        </div>
        <div class="end">
            <div class="item-end hover:bg-[#f2f2f2]">
                <img src="/img/icono-camera.png" class="camera w-6 inline-block mx-[15px] hover:bg-[#f2f2f2]" alt='Camera'/>
            </div>
            <div class="item-end hover:bg-[#f2f2f2]">
                <img src="/img/icono-alarm.png" alt='Alarm' class="w-6 inline-block mx-[15px] hover:bg-[#f2f2f2]"/>
            </div>
            <img src="/img/logoCanal.jpeg" alt="" class="logo-canal w-8 cursor-pointer" />
        </div>
    </header>
    </div>
  )
}
