import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
    return (
        <>
            <section className="heading">
                <h1>What do you need help with?</h1>
                <p>Please choose from options below</p>
            </section>

            <Link to='/new-ticket' className='btn btn-reverse btn-custom'>
                <FaQuestionCircle/> Create New Ticket
            </Link>

            <Link to='/tickets' className='btn btn-block'>
                <FaTicketAlt/> View My tTckets
            </Link>
        </>
    )
}

export default Home