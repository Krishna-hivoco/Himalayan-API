
export  function pcoupongenerator() {
  let couponCode = "";
  let coderange = "123defghijkxyz0456789lmnopqrstuvwabc123";
  for (let i = 0; i < 8; i++) {
    couponCode += possible.charAt(Math.floor(Math.random() * coderange.length));
  }
  return couponCode;
  }

  export  function ccoupongenerator() {
    let couponCode = "";
    let coderange = "454defghijkxyz0456789lmn45op999qrstuvw23abc123";
    for (let i = 0; i < 7; i++) {
      couponCode += possible.charAt(Math.floor(Math.random() * coderange.length));
    }
    return couponCode;
    }
 