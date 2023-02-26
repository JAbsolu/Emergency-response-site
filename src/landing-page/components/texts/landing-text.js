export const WelcomeText = () => {
    return (
        <p> 
            Where safety and quick action are our top priorities.
            With just the push of a button, our app connects users to 
            emergency services and trained responders, ensuring 
            that help is on the way in the quickest and most efficient manner possible.
        </p>
    );
}

export const FastResponseText = () => {
    return (
        <div>
            <h3>One Touch Emergency<span className="text-red">Call Feature</span></h3>
            <p className="MedER-benefits-p">
                The app allows users to quickly and easily notify emergency services
                 of an incident, which can significantly reduce the time it takes 
                 for first responders to arrive on the scene.
            </p>
        </div>
    )
};

export const LocationDetectionText = () => {
    return (
        <div>
            <h3>Accurate Location <span className='text-red'>Detection</span></h3>
            <p className="MedER-benefits-p">
                the app is equipped with GPS technology that allows 
                emergency services to more accurately pinpoint the 
                location of an incident, further reducing response 
                times and ensuring that help arrives at the right 
                place as soon as possible.
            </p>
        </div>
    )
};

export const MissionStatement = () => {
    return (
        <div id="missionStatement">
            <h1 className='text-left' id="aboutUs"> Our <span className="text-red"> Mission </span></h1>
            <p>
                MedER aims to provide quick and efficient assistance 
                during emergency situations by connecting users to local emergency services 
                and providing real-time information and support.
                MedER usesAdvanced Location Technology and user-reported incident data to ensure a rapid response.
                Our mission is to save lives and protect communities by providing 
                immediate access to emergency services and Real-Time Information 
                through our innovative emergency response app.
            </p>
        </div>
    );
}