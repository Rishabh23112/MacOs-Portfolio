import WindowControls from '#components/WindowControls'
import { socials } from '#constants'
import windowWrapper from '#hoc/windowWrapper'

const Contact = () => {
  return (
    <div>
        <div id='window-header'>
            <WindowControls target='contact'/>
            <h2>Contact Me</h2>
        </div>

        <div className='p-5 space-y-5'>
            <img src="/images/Rishabh.png" alt="rishabh"
            className='w-20 rounded-full' />

            <h3>Let's Connect</h3>
            <p>Got an idea? Have something new? I'm in.</p>
            <p className='italic'>irishabh.k2311@gmail.com</p>

            <ul>
                {socials.map(({id, bg, link, icon, text})=>(
                    <li key={id} style={{backgroundColor : bg}}>
                        <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                            <img src={icon} alt={text} className='size-5' />
                            <p>{text}</p>
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

const contactWindow=windowWrapper(Contact, 'contact')

export default contactWindow