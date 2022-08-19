import Carousel from 'react-bootstrap/Carousel';
import './MainCarousel.css';

export default function MainCarousel() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="carousel-img d-block w-100"
                    src="https://wallpapercave.com/dwp1x/wp10285042.jpg"
                    alt="Explore"
                />
                <Carousel.Caption>
                    <h2>Explore</h2>
                    <p>
                        Explore projects and research done by other users.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="carousel-img d-block w-100"
                    src="https://wallpapercave.com/dwp1x/wp9827062.jpg"
                    alt="Collaborate"
                />
                <Carousel.Caption>
                    <h2>Collaborate</h2>
                    <p>
                        Collaborate with other users on projects and research programs.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="carousel-img d-block w-100"
                    src="https://wallpapercave.com/dwp1x/wp8792408.png"
                    alt="Learn"
                />
                <Carousel.Caption>
                    <h2>Learn</h2>
                    <p>
                        Learn from some of our kickstart tutorials and by interacting with people with a like mindset.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="carousel-img d-block w-100"
                    src="https://wallpapercave.com/dwp1x/wp11324950.jpg"
                    alt="Connect"
                />
                <Carousel.Caption>
                    <h2>Connect</h2>
                    <p>
                        Reach out to others and expand your network.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}