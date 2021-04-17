import * as React from 'react';
import "./App.scss";

interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
        <div className="body">
            <nav className="navBar">NavBar</nav>
            <main className="main"> 
                <section className="heading"><h1>Heading Section</h1></section>
                <section className="latest">Latest Episode</section> 
                <section className="past">Past Episodes</section>
                <section className="follow">Follow Me</section>
            </main>
        </div>
    );
  }
}

export default App;