var React = require("react");

module.exports = React.createClass({
  getInitialState() {
    return (
      { 
        name: '',
        tag: '',
        tags: []
      }
    )
  },
  
  addTag(e) {
    if (e.charCode == 13) {
      this.setState({tags: this.state.tags.concat([e.target.value]), tag: ''})
    }
    if (e.keyCode == 13) {
      alert('Enter... (KeyDown, use keyCode)');
    }
  },
  
  changeTag(event) {
    this.setState({ tag: event.target.value });
  },
  
  deleteTag(index) {
    this.state.tags.splice(index, 1)
    this.setState({ tags: this.state.tags });
  },
  
  render() {
    var tags = this.state.tags.map(function(tag,index){
        return <span className="tag"> {tag}  <span className="deleteTag" key={index} onClick={this.deleteTag.bind(this, index)}>x</span></span>
    }, this);
  
    return (
      <div className="workoutList">
        <input type="text" className="form-control high-input border-radius-1" id="workoutName" placeholder="Give a nice name to your workout, so you can find it easy next time!"></input>
        <input type="text" className="form-control high-input border-radius-1" id="addTagForm" placeholder="Tag this workout!" value={this.state.tag} onChange={this.changeTag} onKeyPress={this.addTag}></input>
        <div>
          {tags}
          <span className="tag">{ (this.state.tag!=="") ? this.state.tag : "..." }</span>
        </div>
      </div>
    );
  }
});
