export function generateOrderId() {
  const timestamp = Date.now().toString(); // Get current timestamp as a string
  const randomNum = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0"); // Generate a random number and pad it with zeros

  return `${timestamp}-${randomNum}`

}


export function removeSpeEleFromAArray(arr, num) {

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === num) {
      arr.splice(i, 1);
    }
  }
}

export function singularize(word) {
  const endings = {
    ves: 'fe',
    ies: 'y',
    i: 'us',
    zes: 'ze',
    ses: 's',
    es: 'e',
    s: ''
  };
  return word.replace(
    new RegExp(`(${Object.keys(endings).join('|')})$`),
    r => endings[r]
  );
}


export const generatePasscode = () => {
  const characters = "AB!@CDE#FGHI$JKL%MNOP&QRSTUVWZ*XYZ01(23456)789";
  const length = 11;
  let pass = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    pass += characters.charAt(randomIndex);
  }

  return pass;
};
export const generateSlug = (title) => {
  return title.replaceAll(' - ', '-').replaceAll(', ', '-').replaceAll(' ', '-').replaceAll('.', '-').replaceAll('/', '-').replaceAll(' | ', '-').replaceAll('|', '-').replaceAll(' # ', 'hash').replaceAll('#', 'hash').replaceAll('%', 'per')
}



export const calculatePercentage = (max,min) => {
  return (Number(min)*100)/Number(max)
}


