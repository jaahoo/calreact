const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map((appointment) =>
      <Appointment appointment={appointment} key={appointment.id} />
    )}
  </div>