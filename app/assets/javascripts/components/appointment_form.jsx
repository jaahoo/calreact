var AppointmentForm = React.createClass({
  handleChange: function(e){
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  setApptTime: function(e) {
    var name = 'appt_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function() {
    var inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.props.title} onChange={this.handleChange}
            name="title" placeholder="Appointment Title" type="text"/>
          <Datetime inputProps={inputProps}
            value={this.props.appt_time}
            open={true}
            input= {false}
            onChange={this.setApptTime}
          />
          <input className="submit-button" type="submit" value="Make Appointment" />
        </form>
      </div>
    )
  }
});