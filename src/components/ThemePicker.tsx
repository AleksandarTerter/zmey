import { Component, createSignal, onMount } from 'solid-js';

import { svgs } from "../assets/svgs";

const ThemePicker: Component = () => {

    let themeEl: HTMLElement | null;
    const [isLight, setIsLight] = createSignal(JSON.parse(localStorage.getItem('isLight') ?? 'false'));
    const [isSolar, setIsSolar] = createSignal(JSON.parse(localStorage.getItem('isSolar') ?? 'false'));

    onMount(() => {
        themeEl = document.getElementById('root');
        activateLightOrDarkTheme();    
        activateOrDeactivateSolarTheme();
    })

    const onLightChange = () => {
        setIsLight(!isLight());
        localStorage.setItem('isLight', isLight().toString());
        activateLightOrDarkTheme();    
    }

    const onSolarChange = () => {
        setIsSolar(!isSolar());
        localStorage.setItem('isSolar', isSolar().toString());
        activateOrDeactivateSolarTheme();
    }

    const activateLightOrDarkTheme = () => {
        if (isLight()) {
            themeEl!.classList.add('light');
            themeEl!.classList.remove('dark');
        } else {
            themeEl!.classList.add('dark');
            themeEl!.classList.remove('light');
        }
    }

    const activateOrDeactivateSolarTheme = () => {
        isSolar()
            ? themeEl!.classList.add('solar')
            : themeEl!.classList.remove('solar');
    }

    return <span class='theme-picker'>
        <span onClick={onLightChange}>{svgs.darkLight}</span>
        <span onClick={onSolarChange}>{svgs.sun}</span>
    </span>
}

export default ThemePicker;


