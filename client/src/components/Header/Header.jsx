import './Candle.css';
import './C3.css';
import 'animate.css';

export default function Header() {
    return (
        <div className="Header">
            <div className="C3">
                <h1 className="animate__headShake">
                    <b>
                        Create
                    </b>
                </h1>
                <h1 className="animate__headShake">
                    <b>
                        Collaborate
                    </b>
                </h1>
                <h1 className="animate__headShake">
                    <b>
                        Connect
                    </b>
                </h1>
            </div>
            <div className="wrapper">
                <div className="candles">
                    <div className="light__wave"></div>
                    <div className="candle1">
                        <div className="candle1__body">
                            <div className="candle1__eyes">
                            <span className="candle1__eyes-one"></span>
                            <span className="candle1__eyes-two"></span>
                            </div>
                            <div className="candle1__mouth"></div>
                        </div>
                        <div className="candle1__stick"></div>
                    </div>
                    
                    <div className="candle2">
                        <div className="candle2__body">
                            <div className="candle2__eyes">
                            <div className="candle2__eyes-one"></div>
                            <div className="candle2__eyes-two"></div>
                            </div>
                        </div>
                        <div className="candle2__stick"></div>
                    </div>

                    <div className="candle2__fire"></div>
                    <div className="sparkles-one"></div>
                    <div className="sparkles-two"></div>
                    <div className="candle__smoke-one"></div>
                    <div className="candle__smoke-two"></div>
                </div>
                <div className="floor"></div>
            </div>
        </div>
    );
}