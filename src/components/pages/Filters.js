import React, { Component } from "react";
import '../../App.css';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.initValue.text,
      manufacture: props.initValue.manufacture
    };
  }

  onChange = data => {
    this.setState({ ...data }, () => this.props.onChange(this.state));
  };

  onClear = () => { this.onChange({text: "",manufacture: "All"}); };

  render() {
    const { state: { text, manufacture }, props: { manufacturers }} = this;

    return (
      <div className="filter">
        <div className="header">
          <h4>Search</h4>
          <span className="clear" onClick={this.onClear}>
            Clear
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="search..."
            value={text}
            onChange={e => this.onChange({ text: e.target.value })}/>
        </div>

        <h4>Manufacturer</h4>
        <div>
          {manufacturers.map(item => (
            <div key={item}>
              <input
                type="radio"
                name="manufacturere"
                id={item}
                value={item}
                checked={item === manufacture}
                onChange={e => this.onChange({ manufacture: e.target.value })}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Filters;
