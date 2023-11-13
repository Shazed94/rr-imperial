'use client';
import Lottie from 'lottie-react'
import heroVideo from '../public/lottie/Slider.json'
import aboutLeftVideo from '../public/lottie/About Left.json'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';


export function LottieSlider() {
    return (
        <Lottie animationData={heroVideo} loop={true} />
    )
}

// function LottieScrollTrigger(vars) {
//     let playhead = { frame: 0 },
//         target = gsap.utils.toArray(vars.target)[0],
//         speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
//         st = {
//             trigger: target,
//             pin: true,
//             start: "top top",
//             end: speeds[vars.speed] || "+=1000",
//             scrub: 1,
//         },
//         ctx = gsap.context && gsap.context(),
//         animation = Lottie.loadAnimation({
//             container: target,
//             renderer: vars.renderer || "svg",
//             loop: false,
//             autoplay: false,
//             path: vars.path,
//             rendererSettings: vars.rendererSettings || {
//                 preserveAspectRatio: "xMidYMid slice",
//             },
//         });
//     for (let p in vars) {
//         // let users override the ScrollTrigger defaults
//         st[p] = vars[p];
//     }
//     animation.addEventListener("DOMLoaded", function () {
//         let createTween = function () {
//             animation.frameTween = gsap.to(playhead, {
//                 frame: animation.totalFrames - 1,
//                 ease: "none",
//                 onUpdate: () => animation.goToAndStop(playhead.frame, true),
//                 scrollTrigger: st,
//             });
//             return () => animation.destroy && animation.destroy();
//         };
//         ctx && ctx.add ? ctx.add(createTween) : createTween();
//         // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
//         ScrollTrigger.sort();
//         ScrollTrigger.refresh();
//     });
//     return animation;
// }

export function LottieAboutLeft() {

    return (
        <>
            <Lottie animationData={aboutLeftVideo} loop={false} style={{ height: 610 }} />
        </>
    )
}
