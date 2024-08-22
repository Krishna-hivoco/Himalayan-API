import randomstring from "randomstring";
export default function generateOTP() {
  const OTP_LENGTH = 4;
  return randomstring.generate({
    length: OTP_LENGTH,
    charset: "numeric",
  });
}

export const generateSKU = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 11
  let sku = "Faz-";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sku += characters.charAt(randomIndex);
  }

  return sku;
};
export const generateOrderId = () => {
  const characters = "0123456789";
  let sku = "" + Date.now();
  const length = 5;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sku += characters.charAt(randomIndex);
  }
  return sku;
};

export const generatePassword = (phone) => {
  const characters = "AB!DEFGH@KLMNO#QRSTU$WX%Z01*3456789";
  let password = `Guest_User-${phone}` + Date.now();
  const length = 5;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
};
 