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

  render: function() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.props.title} onChange={this.handleChange}
            name="title" placeholder="Appointment Title" type="text"/>
          <input value={this.props.appt_time} onChange={this.handleChange}
            name="appt_time" placeholder="Date and Time" type="text"/>
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
    )
  }
});