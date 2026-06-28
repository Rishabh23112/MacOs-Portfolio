import { navIcons, navLinks } from "#constants"
import dayjs from "dayjs"

const Navbar = () => {
  return (
    <nav className='fixed top-2 left-2 right-2 rounded-2xl'>
        <div className="opacity-100">
            <img src="/images/logo.svg" alt="logo"/>
            <p className='font-bold'>Rishabh's Portfolio</p>

            <ul>
                {navLinks.map(({id, name})=>(
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div >
            <ul>
                {
                    navIcons.map(({id, img})=>(
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} className="icon-hover" />
                        </li>
                    ))
                }
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>

    </nav>
  )
}

export default Navbar