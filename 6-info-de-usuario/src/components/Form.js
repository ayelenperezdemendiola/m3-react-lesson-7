import React from 'react';

class Form extends React.Component {
    render() {
        const {onChangeValue, firstName, lastName, year, month, day} = this.props;
        return (
            <form action="/signup" method="get" className="formContainer">
                <label htmlFor="firstName">Nombre: </label>
                <input onChange={onChangeValue} id="firstName" type="text" name="firstName" className="input" value={firstName} />
                <label htmlFor="lastName">Apellido: </label>
                <input onChange={onChangeValue} id="lastName" type="text" name="lastName" className="input" value={lastName} />
                <label htmlFor="bDay">Cumpleaños: </label>
                <input onChange={onChangeValue} id="bDay" type="date" name="birdthDate" className="input" value={`${year}-${month}-${day}`} />
            </form>
        )
    }
}

export default Form;