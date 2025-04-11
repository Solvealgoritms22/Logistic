import { Component, OnInit } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer } from '@angular/platform-browser';
import { AppConfigService } from '../../../core/services/app-config.service';
import { AuthService } from '../../../core/services/auth.service';
import { AvatarComponent } from '../../../shared';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, AvatarComponent, CommonModule],
    template: `
        <!-- Navbar -->
        <nav class="border-b border-dashed border-white/10 flex items-center justify-between py-6 px-6 relative z-50">
            <!-- Logo -->
            <a href="/">
                <svg viewBox="0 0 122 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-surface-0 h-8 w-fit">
                    <path
                        d="M26.8844 14.5C27.5005 14.5 28.0045 13.9997 27.9555 13.3856C27.7658 11.0094 26.9717 8.71425 25.6405 6.722C24.1022 4.41972 21.9157 2.62531 19.3575 1.56569C16.7994 0.506066 13.9844 0.22882 11.2687 0.769012C8.55298 1.3092 6.05843 2.64257 4.1005 4.6005C2.14257 6.55843 0.809203 9.05298 0.269012 11.7687C-0.27118 14.4844 0.00606599 17.2994 1.06569 19.8575C2.12531 22.4157 3.91972 24.6022 6.222 26.1405C8.21425 27.4717 10.5094 28.2658 12.8856 28.4555C13.4997 28.5045 14 28.0005 14 27.3844V24.0155C14 23.3994 13.4983 22.9076 12.8877 22.826C11.6208 22.6567 10.4041 22.1998 9.33319 21.4843C7.95182 20.5613 6.87517 19.2494 6.2394 17.7145C5.60362 16.1796 5.43728 14.4906 5.76139 12.8612C6.08551 11.2318 6.88553 9.73504 8.06028 8.56028C9.23504 7.38553 10.7318 6.58551 12.3612 6.26139C13.9906 5.93728 15.6796 6.10362 17.2145 6.7394C18.7494 7.37517 20.0613 8.45182 20.9843 9.83319C21.6998 10.9041 22.1567 12.1208 22.326 13.3877C22.4076 13.9983 22.8994 14.5 23.5155 14.5H26.8844Z"
                    ></path>
                    <path
                        d="M20.5013 15.8426C20.5077 15.8118 20.484 15.7829 20.4525 15.7829H16.3982C15.7821 15.7829 15.2826 16.2823 15.2826 16.8984V20.9526C15.2826 20.9841 15.3115 21.0077 15.3423 21.0014C17.9308 20.4697 19.9695 18.431 20.5013 15.8426Z"
                    ></path>
                    <path
                        d="M22.2952 15.7829C22.2474 15.7829 22.2067 15.818 22.1989 15.8652C21.621 19.3613 18.8611 22.1212 15.3649 22.6989C15.3177 22.7067 15.2826 22.7474 15.2826 22.7953V27.3845C15.2826 28.0006 15.7821 28.5 16.3982 28.5H18.6292C19.2453 28.5 19.7448 28.0006 19.7448 27.3845V23.0905C19.7448 23.0727 19.7663 23.0638 19.7789 23.0764L24.4655 27.763C24.9011 28.1986 25.6075 28.1986 26.0431 27.763L27.2627 26.5434C27.6983 26.1077 27.6983 25.4014 27.2627 24.9658L22.5761 20.2792C22.5635 20.2666 22.5724 20.245 22.5902 20.245H26.8842C27.5003 20.245 27.9997 19.7456 27.9997 19.1295V16.8984C27.9997 16.2823 27.5003 15.7829 26.8842 15.7829H22.2952Z"
                    ></path>
                    <path
                        v-if="withText"
                        d="M45.5809 22.7697C40.8841 22.7697 37.7715 19.556 37.7715 14.2411C37.7715 8.80262 41.0414 5.69009 45.7158 5.69009C49.7272 5.69009 52.5926 8.19584 52.8735 11.7466H49.3115C49.0868 10.0049 47.6934 8.76891 45.772 8.76891C42.9965 8.76891 41.4234 10.8477 41.4234 14.2186C41.4234 17.5559 42.9066 19.6909 45.8394 19.6909C48.1766 19.6796 49.5924 18.1177 49.6598 16.2749H45.8281V13.6456H52.9858V22.5H50.6037L50.3902 20.5785H50.3565C49.2216 21.9382 47.7945 22.7697 45.5809 22.7697ZM59.6267 22.6798C56.0197 22.691 53.7612 20.3089 53.7612 16.5783C53.7612 12.9377 56.031 10.4656 59.548 10.4544C63.0201 10.4656 65.2112 12.8703 65.2112 16.5671V17.3649H57.0872V17.4548C57.076 18.9942 58.0423 20.1965 59.6604 20.2077C60.784 20.1965 61.7167 19.6459 62.0088 18.7582H65.1101C64.6831 21.1291 62.6044 22.691 59.6267 22.6798ZM57.0872 15.3086H62.0762C62.0313 13.904 60.9638 12.9377 59.593 12.9264C58.1434 12.9377 57.1546 13.9939 57.0872 15.3086ZM70.0879 15.8367V22.5H66.6383V10.6342H69.9755V12.8028H70.0205C70.5711 11.3983 71.8858 10.4544 73.7173 10.4544C76.2568 10.4544 78.1333 12.2298 78.1333 15.1176V22.5H74.6724V15.7243C74.6724 14.1737 73.8072 13.3085 72.4251 13.3085C71.0767 13.3085 70.0879 14.1512 70.0879 15.8367ZM85.4483 22.6798C81.8414 22.691 79.5828 20.3089 79.5828 16.5783C79.5828 12.9377 81.8526 10.4656 85.3696 10.4544C88.8417 10.4656 91.0329 12.8703 91.0329 16.5671V17.3649H82.9088V17.4548C82.8976 18.9942 83.8639 20.1965 85.482 20.2077C86.6057 20.1965 87.5383 19.6459 87.8305 18.7582H90.9317C90.5048 21.1291 88.426 22.691 85.4483 22.6798ZM82.9088 15.3086H87.8979C87.8529 13.904 86.7855 12.9377 85.4146 12.9264C83.9651 12.9377 82.9763 13.9939 82.9088 15.3086ZM102.562 14.4321H99.3592C99.3367 13.5107 98.5164 12.9264 97.4377 12.9264C96.4489 12.9264 95.7073 13.3534 95.7073 14.0164C95.7073 14.5557 96.1455 14.9378 97.1119 15.14L99.3367 15.5783C101.539 16.0277 102.843 16.9716 102.843 18.8032C102.843 21.219 100.606 22.691 97.5613 22.691C94.3027 22.691 92.2352 21.219 92.0442 18.7245H95.4489C95.5725 19.7246 96.359 20.219 97.5726 20.219C98.64 20.219 99.3704 19.8257 99.3704 19.129C99.3704 18.4998 98.7749 18.2076 97.8759 18.0278L95.8421 17.6346C93.46 17.1739 92.3138 15.9603 92.3138 14.1625C92.3138 11.859 94.3027 10.4656 97.3703 10.4656C100.472 10.4656 102.494 11.9489 102.562 14.4321ZM104.225 22.5V10.6342H107.674V22.5H104.225ZM105.955 9.08353C104.876 9.08353 104.011 8.25203 104.022 7.2295C104.011 6.20697 104.876 5.37546 105.955 5.37546C107.011 5.37546 107.876 6.20697 107.888 7.2295C107.876 8.25203 107.011 9.08353 105.955 9.08353ZM119.641 14.4321H116.439C116.416 13.5107 115.596 12.9264 114.517 12.9264C113.528 12.9264 112.787 13.3534 112.787 14.0164C112.787 14.5557 113.225 14.9378 114.191 15.14L116.416 15.5783C118.619 16.0277 119.922 16.9716 119.922 18.8032C119.922 21.219 117.686 22.691 114.641 22.691C111.382 22.691 109.315 21.219 109.124 18.7245H112.528C112.652 19.7246 113.439 20.219 114.652 20.219C115.72 20.219 116.45 19.8257 116.45 19.129C116.45 18.4998 115.854 18.2076 114.956 18.0278L112.922 17.6346C110.54 17.1739 109.393 15.9603 109.393 14.1625C109.393 11.859 111.382 10.4656 114.45 10.4656C117.551 10.4656 119.574 11.9489 119.641 14.4321Z"
                    ></path>
                </svg>
            </a>
            <!-- Desktop Menu -->
            <ul class="hidden lg:flex items-center gap-3">
                <li>
                    <a (click)="router.navigate([''], { fragment: 'home' })" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Home</a>
                </li>
                <li>
                    <a (click)="router.navigate([''], { fragment: 'features' })" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Features</a>
                </li>
                <li>
                    <a (click)="router.navigate([''], { fragment: 'highlights' })" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Highlights</a>
                </li>
                <li>
                    <a (click)="router.navigate([''], { fragment: 'pricing' })" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Pricing</a>
                </li>
            </ul>

            <!-- Desktop Buttons -->
            <div class="hidden lg:flex gap-2">
                <button class="button-outlined text-xs" *ngIf="!authService.isLoggedIn" routerLink="/auth/login">
                    <i class="fa-duotone fa-solid fa-user mr-1"></i>
                    Login
                </button>
                <button class="button-outlined" *ngIf="authService.isLoggedIn" routerLink="/dashboard">
                    <app-avatar [imgUrl]="userWithImage.img" [username]="userWithImage.name" [role]="userWithImage.role" [avatarSize]="28" [textSize]="8"></app-avatar>
                </button>
                <button class="button-outlined text-xs" *ngIf="!authService.isLoggedIn" routerLink="/auth/register">
                    <i class="fa-sharp-duotone fa-solid fa-registered mr-1"></i>
                    Register
                </button>
            </div>
            <!-- Mobile Menu Toggle -->
            <div class="lg:hidden cursor-pointer">
                <a class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" (click)="toggleMobileMenu()">
                    <i class="pi" [ngClass]="isMobileMenuOpen ? 'pi-times' : 'pi-bars'"></i>
                </a>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="lg:hidden bg-black bg-opacity-30 backdrop-blur-md border-t border-dashed border-white/10 py-4 px-6 absolute right-0 rounded-md" *ngIf="isMobileMenuOpen">
            <ul class="flex flex-col gap-3">
                <li>
                    <a (click)="navigateAndClose([''], 'home')" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Home</a>
                </li>
                <li>
                    <a (click)="navigateAndClose([''], 'features')" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Features</a>
                </li>
                <li>
                    <a (click)="navigateAndClose([''], 'highlights')" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Highlights</a>
                </li>
                <li>
                    <a (click)="navigateAndClose([''], 'pricing')" class="inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-2 pl-3 text-[#ffffffb8] hover:text-white hover:bg-white/8 transition-all">Pricing</a>
                </li>
            </ul>
            <div class="flex flex-col gap-2 mt-4">
                <button class="button-outlined text-xs" *ngIf="!authService.isLoggedIn" (click)="navigateAndClose('/auth/login')" routerLink="/auth/login">
                    <i class="fa-duotone fa-solid fa-user mr-1"></i>
                    Login
                </button>
                <button class="button-outlined" *ngIf="authService.isLoggedIn" (click)="navigateAndClose('/dashboard')" routerLink="/dashboard">
                    <app-avatar [imgUrl]="userWithImage.img" [username]="userWithImage.name" [role]="userWithImage.role" [avatarSize]="28" [textSize]="8"></app-avatar>
                </button>
                <button class="button-outlined text-xs" *ngIf="!authService.isLoggedIn" (click)="navigateAndClose('/auth/register')" routerLink="/auth/register">
                    <i class="fa-sharp-duotone fa-solid fa-registered mr-1"></i>
                    Register
                </button>
            </div>
        </div>
    `,
    styles: `
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
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
                var(--tw-backdrop-sepia);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
        }
        .button-outlined:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    `
})
export class TopbarWidget implements OnInit {
    sanitizedLogo: any;
    isMobileMenuOpen: boolean = false;
    userWithImage = {
        name: '',
        email: '',
        role: '',
        img: ''
    };
    constructor(
        public router: Router,
        public configService: AppConfigService,
        public authService: AuthService,
        private sanitizer: DomSanitizer
    ) {
        this.sanitizedLogo = this.sanitizer.bypassSecurityTrustHtml(this.configService.appLogoSvgLanding);
    }

    ngOnInit() {
        // Llamamos a getUser() al iniciar
        this.authService
            .getUser()
            .then((user) => {
                // Ajusta según la estructura real que retorne tu `getUser()`.
                this.userWithImage = {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    img: user.img
                };
            })
            .catch((err) => {
                console.error('Error al obtener usuario:', err);
                // Podrías mostrar un mensaje de error o fallback
            });
    }
    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    navigateAndClose(path: string | string[], fragment?: string): void {
        this.isMobileMenuOpen = false;
        if (typeof path === 'string') {
            this.router.navigate([path]);
        } else {
            this.router.navigate(path, fragment ? { fragment } : undefined);
        }
    }
}
