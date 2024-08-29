class HeroSettings extends React.Component {
    render() {
        const { hero, onColorChange, onSpeedChange, onFireRateChange } = this.props;
        return (
            <div>
                <h3>Настройки героя {hero.id}</h3>
                <div>
                    <label>Цвет заклинаний: </label>
                    <input type="color" value={hero.color} onChange={(e) => onColorChange(hero.id, e.target.value)} />
                </div>
                <div>
                    <label>Скорость движения: </label>
                    <input type="range" min="1" max="10" value={hero.speed} onChange={(e) => onSpeedChange(hero.id, e.target.value)} />
                </div>
                <div>
                    <label>Частота стрельбы: </label>
                    <input type="range" min="500" max="3000" value={hero.fireRate} onChange={(e) => onFireRateChange(hero.id, e.target.value)} />
                </div>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [
                { id: 1, color: '#FF0000', speed: 2, fireRate: 1000 },
                { id: 2, color: '#0000FF', speed: 2, fireRate: 1000 }
            ]
        };
    }

    handleColorChange = (id, color) => {
        this.setState((prevState) => ({
            heroes: prevState.heroes.map(hero =>
                hero.id === id ? { ...hero, color } : hero
            )
        }), () => {
            this.props.onHeroChange(this.state.heroes);
        });
    };

    handleSpeedChange = (id, speed) => {
        this.setState((prevState) => ({
            heroes: prevState.heroes.map(hero =>
                hero.id === id ? { ...hero, speed: Number(speed) } : hero
            )
        }), () => {
            this.props.onHeroChange(this.state.heroes);
        });
    };

    handleFireRateChange = (id, fireRate) => {
        this.setState((prevState) => ({
            heroes: prevState.heroes.map(hero =>
                hero.id === id ? { ...hero, fireRate: Number(fireRate) } : hero
            )
        }), () => {
            this.props.onHeroChange(this.state.heroes);
        });
    };

    render() {
        return (
            <div id="menu">
                {this.state.heroes.map(hero => (
                    <HeroSettings
                        key={hero.id}
                        hero={hero}
                        onColorChange={this.handleColorChange}
                        onSpeedChange={this.handleSpeedChange}
                        onFireRateChange={this.handleFireRateChange}
                    />
                ))}
            </div>
        );
    }
}

ReactDOM.render(<Menu onHeroChange={(heroes) => updateHeroSettings(heroes)} />, document.getElementById('menu'));
