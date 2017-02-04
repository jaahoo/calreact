class AppointmentForm extends React.Component {
  handleChange(e){
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime(e) {
    const name = 'appt_time';
    const obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render() {
    var inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input value={this.props.title}
            onChange={(event) => this.handleChange(event)}
            name="title"
            placeholder="Appointment Title"
            type="text"/>
          <Datetime inputProps={inputProps}
            value={this.props.appt_time}
            open={true}
            input= {false}
            onChange={(event) => this.setApptTime(event)}
          />
          <input className="submit-button" type="submit" value="Make Appointment" />
        </form>
      </div>
    )
  }
}