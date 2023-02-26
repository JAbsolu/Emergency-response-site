import './index.scss'


const Home = () => {

    return (
        <main className='container home-page'>
            <div className='img-bg'>
                <h3> Medical emergency response at your finger tips </h3>
                <div className='article'>
                    <form className='form-btn'>
                        <h2> Book a Service </h2>
                        <div>
                            <button id='response'>Emergency response</button>
                            <button id='first-aid'>First Aid Kit</button>
                            <button id='track'>Track request</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Home