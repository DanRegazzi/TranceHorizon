import * as React from 'react';

interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hoi, {name}
        </h1>
      </>
    );
  }
}

export default App;