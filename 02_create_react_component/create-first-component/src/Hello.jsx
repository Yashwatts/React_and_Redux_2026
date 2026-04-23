function Hello() {

  var myName = "Yash";
  let number = 456;
  let fullName = () => {
    return 'Yash Watts';
  }

  return <h3>
    MessageNo: {number}. I am {fullName()}
  </h3>
}

export default Hello;