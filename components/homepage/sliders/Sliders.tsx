import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import styles from './slider.module.scss'
import { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

const Slider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current === null) {
            return;
        }

        const glide = new Glide(sliderRef.current, {
            type: 'carousel', // Set the type to carousel for multi-item slider
            perView: 1.25, // Number of items visible at a time
            focusAt: 'center', // Center the current item
            breakpoints: {
                800: {
                    perView: 1
                }
            }
            // autoplay: 3000,
            // gap: 10,
            // peek: {
            //     before: 10,
            //     after: 10
            // },
            // Add other options as needed
        });

        glide.mount();

        return () => {
            glide.destroy();
        };
    }, []);

    return (
        <div ref={sliderRef} className={`glide ${styles.slider}`}>
            <div className="glide__track" data-glide-el="track">
                <div className="glide__slides">
                    <div className={`glide__slide ${styles.slide}`}>
                        <img src="/images/website-sliders/banner.webp" alt="Banner " />
                    </div>
                    <div className={`glide__slide ${styles.slide}`}>
                        <img src="/images/website-sliders/banner.webp" alt="Banner" />
                    </div>
                    <div className={`glide__slide ${styles.slide}`}>
                        <img src="/images/website-sliders/banner.webp" alt="Banner" />
                    </div>
                    <div className={`glide__slide ${styles.slide}`}>
                        <img src="/images/website-sliders/banner.webp" alt="Banner" />
                    </div>
                    <div className={`glide__slide ${styles.slide}`}>
                        <img src="/images/website-sliders/banner.webp" alt="Banner" />
                    </div>
                </div>
            </div>

            <div data-glide-el="controls" className={styles.arrow_group}>
                <span data-glide-dir="<" aria-label="previous" className={styles.left_arrow}>
                    <img src="/images/arrows/arrow-left.svg" alt="Arrow Left" />
                </span>
                <span data-glide-dir=">" aria-label="next" className={styles.right_arrow}>
                    <img src="/images/arrows/arrow-right.svg" alt="Arrow Right" />
                </span>
            </div>

            <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
                <button className="glide__bullet" data-glide-dir="=3"></button>
                <button className="glide__bullet" data-glide-dir="=4"></button>
                <button className="glide__bullet" data-glide-dir="=5"></button>
            </div>
        </div>
    );
};
export default Slider;
