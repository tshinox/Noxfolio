import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import MyPhoto from '../../assets/images/Tshinox1.jpg'
import AnimatedLetters from '../AnimatedLetters'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/esm/CardImg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['T', 's', 'h', 'i', 'n', 'o', 'x']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className='row col-12'>
          <div className='col-6'>
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                &nbsp;
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={18}
                />
              </h1>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
          </div>
          <div className='col-6 nox'>
            <Card className='w-75'>
              <CardImg src={MyPhoto}></CardImg>
            </Card>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home