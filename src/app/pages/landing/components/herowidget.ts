import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TopbarWidget } from './topbarwidget.component';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule, CommonModule, TopbarWidget],
    template: `
        <div class="h-[50rem] lg:h-[44rem] relative animate-duration-500 animate-slidefadein">
            <!-- Background Image -->
            <img src="assets/img/hero-background.jpg" alt="Hero Background" class="w-full h-full object-cover absolute inset-0 -z-10" />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 -z-5 bg-[linear-gradient(106deg,rgba(0,0,0,0.36)_0.48%,rgba(0,0,0,0.10)_100%)]"></div>

            <!-- Container -->
            <div class="container mx-auto px-6">
                <div class="h-[50rem] lg:h-[44rem] relative overflow-hidden rounded-3xl lg:rounded-4xl shadow-lg flex flex-col">
                <topbar-widget></topbar-widget>
                    <!-- Main Content -->
                    <div class="flex-1 flex flex-col justify-between pb-16">
                        <div class="mt-10 lg:mt-20 lg:ml-20 px-6 lg:px-0">
                            <h1 class="title text-4xl lg:text-7xl max-w-2xl !leading-tight">Streamline Your Logistics Operations</h1>
                            <p class="mt-6 description max-w-[40rem] text-white/72 lg:text-base text-lg" style="color: #ffffffb8;">
                                Optimize your supply chain with our cutting-edge logistics solutions, ensuring timely and efficient delivery of your goods worldwide.
                            </p>
                            <div class="mt-8 flex items-center gap-3"><a routerlink="" class="button-regular" href="/"> Get Started </a><a routerlink="" class="button-outlined" href="/"> Explore </a></div>
                        </div>

                        <!-- Customer Logos -->
                        <div class="mb-0 mt-auto">
                            <div class="w-full flex flex-nowrap gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-128px),transparent_100%)]">
                                <div class="flex flex-nowrap items-center animate-infinite-scroll">
                                    <div class="w-44 flex items-center flex-nowrap justify-center gap-4" *ngFor="let customer of customers">
                                        <div class="h-10 w-10">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.1425 0.843088L16.9853 0L14.3248 9.89566L11.9228 0.961792L8.76556 1.80488L11.3608 11.4573L4.8967 5.01519L2.58549 7.31854L9.67577 14.3848L0.84596 12.0269L0 15.1733L9.64768 17.7496C9.53722 17.2748 9.47878 16.7801 9.47878 16.2717C9.47878 12.6737 12.4055 9.75686 16.0159 9.75686C19.6262 9.75686 22.553 12.6737 22.553 16.2717C22.553 16.7768 22.4952 17.2685 22.3862 17.7405L31.1541 20.0818L32 16.9354L22.314 14.3489L31.1444 11.9908L30.2984 8.84438L20.6128 11.4308L27.0768 4.98874L24.7656 2.68538L17.7737 9.65358L20.1425 0.843088Z"
                                                    fill="white"
                                                ></path>
                                                <path d="M22.3765 17.7771C22.1058 18.9176 21.5343 19.9421 20.7502 20.763L27.1022 27.0935L29.4134 24.7901L22.3765 17.7771Z" fill="white"></path>
                                                <path d="M20.6867 20.8291C19.8931 21.6369 18.8902 22.2397 17.7656 22.5503L20.077 31.1471L23.2341 30.304L20.6867 20.8291Z" fill="white"></path>
                                                <path d="M17.6464 22.5818C17.1246 22.7155 16.5777 22.7866 16.0141 22.7866C15.4103 22.7866 14.8256 22.705 14.2705 22.5522L11.957 31.1569L15.1142 31.9999L17.6464 22.5818Z" fill="white"></path>
                                                <path d="M14.1613 22.5206C13.0538 22.1945 12.0688 21.584 11.2914 20.7739L4.92383 27.1199L7.23503 29.4233L14.1613 22.5206Z" fill="white"></path>
                                                <path d="M11.2356 20.718C10.4715 19.9028 9.91499 18.8919 9.65009 17.769L0.853516 20.1181L1.69947 23.2645L11.2356 20.718Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <span class="font-semibold text-white/56 text-lg" style="color: #ffffff8f;">{{ customer.name }}</span>
                                    </div>
                                </div>
                                <!-- Duplicate for infinite scroll -->
                                <div class="flex flex-nowrap items-center animate-infinite-scroll" aria-hidden="true">
                                    <div class="w-44 flex items-center flex-nowrap justify-center gap-4" *ngFor="let customer of customers">
                                        <div class="h-10 w-10">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.1425 0.843088L16.9853 0L14.3248 9.89566L11.9228 0.961792L8.76556 1.80488L11.3608 11.4573L4.8967 5.01519L2.58549 7.31854L9.67577 14.3848L0.84596 12.0269L0 15.1733L9.64768 17.7496C9.53722 17.2748 9.47878 16.7801 9.47878 16.2717C9.47878 12.6737 12.4055 9.75686 16.0159 9.75686C19.6262 9.75686 22.553 12.6737 22.553 16.2717C22.553 16.7768 22.4952 17.2685 22.3862 17.7405L31.1541 20.0818L32 16.9354L22.314 14.3489L31.1444 11.9908L30.2984 8.84438L20.6128 11.4308L27.0768 4.98874L24.7656 2.68538L17.7737 9.65358L20.1425 0.843088Z"
                                                    fill="white"
                                                ></path>
                                                <path d="M22.3765 17.7771C22.1058 18.9176 21.5343 19.9421 20.7502 20.763L27.1022 27.0935L29.4134 24.7901L22.3765 17.7771Z" fill="white"></path>
                                                <path d="M20.6867 20.8291C19.8931 21.6369 18.8902 22.2397 17.7656 22.5503L20.077 31.1471L23.2341 30.304L20.6867 20.8291Z" fill="white"></path>
                                                <path d="M17.6464 22.5818C17.1246 22.7155 16.5777 22.7866 16.0141 22.7866C15.4103 22.7866 14.8256 22.705 14.2705 22.5522L11.957 31.1569L15.1142 31.9999L17.6464 22.5818Z" fill="white"></path>
                                                <path d="M14.1613 22.5206C13.0538 22.1945 12.0688 21.584 11.2914 20.7739L4.92383 27.1199L7.23503 29.4233L14.1613 22.5206Z" fill="white"></path>
                                                <path d="M11.2356 20.718C10.4715 19.9028 9.91499 18.8919 9.65009 17.769L0.853516 20.1181L1.69947 23.2645L11.2356 20.718Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <span class="font-semibold text-white/56 text-lg" style="color: #ffffff8f;">{{ customer.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            @keyframes slidefadein {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-slidefadein {
                animation: slidefadein 0.5s ease-out forwards;
            }
            @keyframes infinite-scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
            .animate-infinite-scroll {
                animation: infinite-scroll 20s linear infinite;
            }
            .button-regular {
                display: flex;
                min-width: 7rem;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                border-radius: 9999px;
                --tw-bg-opacity: 1;
                background-color: color-mix(in srgb, var(--p-surface-0) calc(100% * var(--tw-bg-opacity, 1)), transparent);
                padding: 0.7rem 1.25rem;
                font-weight: 500;
                --tw-text-opacity: 1;
                color: color-mix(in srgb, var(--p-surface-950) calc(100% * var(--tw-text-opacity, 1)), transparent);
                --tw-shadow: 0px 10px 10px -8px rgba(18, 18, 23, 0.02), 0px 2px 2px -1.5px rgba(18, 18, 23, 0.02), 0px 1px 1px -0.5px rgba(18, 18, 23, 0.02), 0px 0px 0px 1px rgba(18, 18, 23, 0.02);
                --tw-shadow-colored: 0px 10px 10px -8px var(--tw-shadow-color), 0px 2px 2px -1.5px var(--tw-shadow-color), 0px 1px 1px -0.5px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 0.15s;
            }
            .button-regular:hover {
                opacity: 0.8;
            }
            .button-outlined {
                display: flex;
                min-width: 7rem;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                border-radius: 9999px;
                border-width: 1px;
                border-color: #ffffff3d;
                padding: 0.7rem 1.25rem;
                font-weight: 500;
                --tw-text-opacity: 1;
                color: color-mix(in srgb, var(--p-surface-0) calc(100% * var(--tw-text-opacity, 1)), transparent);
                --tw-backdrop-blur: blur(16px);
                -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
                    var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
                backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
                    var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 0.15s;
            }
            .button-outlined:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            .container {
                margin-left: auto;
                margin-right: auto;
                max-width: 1152px;
                padding-left: 1rem;
                padding-right: 1rem;
            }
            .title {
                background-image: linear-gradient(180deg, #ffffffd9 5%, #fff 90%);
                font-size: 3.75rem;
                line-height: 1;
                font-weight: 600;
                line-height: 125%;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `
    ]
})
export class HeroWidget {
    customers = [{ name: 'Trimzales' }, { name: 'ZenTrailMs' }, { name: 'Wavelength' }, { name: 'AlphaHex' }, { name: 'Mistranet' }];
}
