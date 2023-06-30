import './about.css'
import img1 from '../asset/about1.png'
import img2 from '../asset/about2.png'
import img3 from '../asset/about3.png'
export default function about() {
    
    return(
        <div>
            <div className='containerAbout'>
            <img src ={img1} className='containerA1'/>
            <img src ={img2} className='containerA2'/>
            <img src ={img3} className='containerA3'/>
            </div>
            <div className='wordAbout'>
            <h1 className='hd1' >ABOUT</h1>
            <p>
            Welcome to our Computer Club! We are a passionate group of tech enthusiasts who come together to explore the exciting world of computers and technology.
            Through coding workshops, hands-on projects, and collaborative learning, we aim to deepen our understanding of programming, software development,
            and emerging technologies. Join us to expand your skills, connect with like-minded individuals,
            and embark on a journey of innovation and creativity in the ever-evolving realm of computer science.</p>
            </div>
            
            
            
        </div>
    )
}