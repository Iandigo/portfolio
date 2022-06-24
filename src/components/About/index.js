import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an enthusiastic and highly motivated graduate with a Bachelor of
            Computer Science degree. I have a great desire to pursue a front-end
            developer career and always strive towards excellence with a
            positive attitude.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. The main area of my
            expertise is front-end development, HTML, CSS, JS and React.
          </p>
          <p>
            I also have experience in agile project management and provided
            excellent customer service as well as work ethic. During my
            internship as an Intern Front-end Developer, I has demonstrated
            strong problem-solving skills and the ability to develop good
            working relationships.
          </p>
          <p>
            Vist my{' '}
            <a href="https://www.linkedin.com/in/ian-nguyen2511/">LinkedIn</a>{' '}
            profile for more details or just <a href="/contact">contact</a> me.
          </p>
        </div>

        <div className="skills-details">
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h2>
          <div className="skills">
            <div className="collumn">
              <p>
                <strong>HTML</strong>
              </p>
              <p>
                <strong>CSS</strong>
              </p>
              <p>
                <strong>JS</strong>
              </p>
              <p>
                <strong>React</strong>
              </p>
            </div>
            <div className="collumn">
              <p>
                <strong>Adobe XD</strong>
              </p>
              <p>
                <strong>Figma</strong>
              </p>
              <p>
                <strong>Adobe Premiere</strong>
              </p>
            </div>
          </div>

          <div className="work-row">
            <div className="work-box">
              <header>Squad Leader</header>
              <section>
                Deakin University
                <time>Nov 2020 - May 2021</time>
              </section>
              <footer>
                {' '}
                Planned and built a responsive web application to track timber
                packages moved across the AKD’s facility with a team of 8
                members.
              </footer>
            </div>
            <div className="work-box">
              <header>Intern Developer</header>
              <section>
                PingCo
                <time>Jul 2021 - Sep 2021</time>
              </section>
              <footer>
                {' '}
                Assisted in upgrading the company's website by adding a zoom
                in/out feature for a canvas and designing a dashboard with chart
                pages.
              </footer>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
