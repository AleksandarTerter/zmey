import { Component, createSignal, onMount } from 'solid-js';

import { svgs } from "../assets/svgs";

const ThemePicker: Component = () => {

    let themeEl: HTMLElement | null;
    const [isLight, setIsLight] = createSignal(JSON.parse(localStorage.getItem('isLight') ?? 'false'));
    const [isSolar, setIsSolar] = createSignal(JSON.parse(localStorage.getItem('isSolar') ?? 'false'));

    onMount(() => {
        themeEl = document.getElementById('root');
        onLight();
        onSolar();
    })

    const onLight = () => {
        setIsLight(!isLight());
        localStorage.setItem('isLight', isLight().toString());
        if (isLight()) {
            themeEl!.classList.add('light')
            themeEl!.classList.remove('dark')
        } else {
            themeEl!.classList.add('dark')
            themeEl!.classList.remove('light')
        }    
    }

    const onSolar = () => {
        setIsSolar(!isSolar());
        localStorage.setItem('isSolar', isSolar().toString());
        isSolar()
            ? themeEl!.classList.add('solar')
            : themeEl!.classList.remove('solar')
    }

    return <span class='theme-picker'>
        <span onClick={onLight}>{svgs.darkLight}</span>
        <span onClick={onSolar}>{svgs.sun}</span>
    </span>
}

export default ThemePicker;


