import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "React Component reload sample" };
 }
  submit() {
    this.setState({ name: "React Component Updated - " + new Date() });
 }
 render() {
   return (
     <div>
       {this.state.name}
       <br />
       <button
        onClick={() => {
          this.submit();
        }}
      >
        Submit
      </button>
     </div>
   );
  }
 }
export default Home;