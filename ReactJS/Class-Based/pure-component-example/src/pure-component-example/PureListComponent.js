import React, { PureComponent } from "react";

export default class PureListComponent extends PureComponent {
  render() {
    console.log('PureListCompoenet called - ', this.props.listName);
    return (
      <div>
        Pure List Component {this.props.listName}
        {this.props.items.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    );
  }
}
