import React, { Component } from 'react';

class Typing extends Component {
  static defaultProps = {
    heading: '',
    dataText: []
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    }
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { text, isDeleting, loopNum, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 100
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500)
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }

    setTimeout(this.handleType, typingSpeed);
  }

  render() {
    return (
      <p id="cursor" className="text-3xl font-extrabold">{ this.props.heading }&nbsp;
        <span>{ this.state.text }</span>
      </p>
    )
  }
}

export default Typing;