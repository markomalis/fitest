var React = require("react");

module.exports = React.createClass({
  render() {
    var ret;
    if(this.props.exercise.name){
      ret =  [
        <h3>{this.props.exercise.name}</h3>,
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YCg1YxMt3oY" frameborder="0" allowfullscreen></iframe>,
        <div>tags: arms, back</div>,
        <div class="exercise-detail-descrition">It is impossible to be a maverick or a true original if you're too well behaved and don't want to break the rules. You have to think outside the box. That's what I believe. After all, what is the point of being on this earth if all you want to do is be liked by everyone and avoid trouble?It is impossible to be a maverick or a true original if you're too well behaved and don't want to break the rules. You have to think outside the box. That's what I believe. After all, what is the point of being on this earth if all you want to do is be liked by everyone and avoid trouble?It is impossible to be a maverick or a true original if you're too well behaved and don't want to break the rules. You have to think outside the box. That's what I believe. After all, what is the point of being on this earth if all you want to do is be liked by everyone and avoid trouble?It is impossible to be a maverick or a true original if you're too well behaved and don't want to break the rules. You have to think outside the box. That's what I believe. After all, what is the point of being on this earth if all you want to do is be liked by everyone and avoid trouble?</div>
      ];
    }else{
      ret = <h3>Select the exercise that you are interested in!</h3>;
    }
  
    return (
      <div>
        {ret}
      </div>
    );
  }
});


