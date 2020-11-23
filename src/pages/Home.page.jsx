import React from 'react';
import './Home.styles.css';
import Card from '../components/Card.component';

function Home() {
    return (
        <div className="Home">
            <div className="card__container">
                <Card 
                src="https://cdllife.com/wp-content/uploads/2020/11/retire-3.jpg" 
                headline="This trucker is spreading the love for his soon-to-retire trucking pops" 
                description="A truck driver and CDLLife App member is sending off his pops in style as the eve of his retirement approaches. 
                “How much love can my 75 year old pops”..."    
                date="November 20, 2020"
                />

                <Card 
                src="https://cdllife.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-20-at-9.20.43-AM-768x537.png" 
                headline="VIDEO: Trucker makes an insane save after wind nearly topples truck" 
                description="A YouTuber was filming on an Illinois highway the moment that a trucker battled a fierce wind gust — and won.The video was captured on November 15 in Dwight..." 
                date="November 20, 2020"
                />


                <Card 
                src="https://cdllife.com/wp-content/uploads/2020/11/joint-768x461.jpg" 
                headline="Man “frightened” by merging semi truck facing charges following subsequent fatal crash" 
                description="A 19-year-old is facing up to 31 years in prison for a crash involving two semi trucks that killed a young woman.Cortez Moore was charged on November 16th..." 
                date="November 20, 2020"
                />


        
                <Card 
                src="https://cdllife.com/wp-content/uploads/2020/03/If-Trucks-Stopped-Covid-19.png" 
                headline="CDC updates COVID-19 guidelines for OTR truckers as pandemic worsens" 
                description="As the number of COVID-19 cases continue to rise, the Centers for Disease Control (CDC) issued new guidelines for..." 
                date="November 20, 2020"
                />


                <Card 
                    src="https://cdllife.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-16-at-12.40.25-PM-768x489.png" 
                    headline="VIDEO: Tire blowout topples cement truck" 
                    description="A dash cam was rolling to catch the frightening moment that a tire blowout turned the world upside down for a cement truck driver..." 
                    date="November 20, 2020"
                />

                <Card 
                    src="https://cdllife.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-10.59.42-AM-768x557.png" 
                    headline="CHP catches distracted driver’s ‘Dukes of Hazzard’ moment on camera" 
                    description="The California Highway Patrol (CHP) shared spectacular video of a car driver catching “several feet” of air during a distracted driving incident..."
                    date="November 20, 2020"
                />
            </div>
        </div>
    )
}

export default Home;
