import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import * as styles from './hero.module.scss'
import BackgroundImage from 'gatsby-background-image'

const Hero = () => {

    const heroImageBanner = useStaticQuery(
        graphql`
            query {
                heroImage: file(relativePath: { eq: "Charge-Ahead.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    );
    const homeBanner = heroImageBanner.heroImage.childImageSharp.fluid;

    useEffect(() => {
        // for animation
        gsap.fromTo(".marqueeLeft", {xPercent: "-100"}, {delay: 5, xPercent: "-3", duration: 1, ease: "linear", repeat: 0}).totalProgress(0.5);
        gsap.fromTo(".marqueeRight", {xPercent: "100"}, {delay: 5, xPercent: 0, duration: 1, ease: "linear", repeat: 0}).totalProgress(0.5);
        // for animation
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftContent}>
                <div className={styles.ChargeArrow}>
                    <p>CHARGE AHEAD
                    <FontAwesomeIcon className={styles.ChargeArrowDown} icon={faArrowDown} />
                    </p>
                </div>
            </div>
            <div className={styles.middleContent}>
                <h1>Charge Ahead!</h1>
                <p>The best agency for your brand. Come to see all services for you.</p>
                <Link to="/" className={`btn ${styles.HeroBtn}`}>SEE MORE</Link>
            </div>
            <BackgroundImage fluid={homeBanner} className={styles.rightContent}>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeLeftInner}>
                        <p className={`marqueeLeft ${styles.marquee}`}>Charge</p>
                    </div>
                    <div className={styles.marqueeRightInner}>
                        <p className={`marqueeRight ${styles.marquee}`}>Ahead</p>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default Hero
