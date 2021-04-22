import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedHandler} />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    onAddedHandler: (name, age) =>
      dispath({ type: "ADD", name: name, age: age }),
    onDeletedHandler: (id) => dispath({ type: "DELETE", personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
