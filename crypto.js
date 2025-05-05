
const Base64Password = btoa("mypassword123"); 
const MD5Password = CryptoJS.MD5("mypassword123").toString(); 


function encodeBase64(password) {
  return btoa(password); 
}


function compareBase64(inputPassword, storedEncodedPassword) {
  return encodeBase64(inputPassword) === storedEncodedPassword;
}


function hashMD5(password) {
  return CryptoJS.MD5(password).toString(); 
}


function compareMD5(inputPassword, storedHashedPassword) {
  return hashMD5(inputPassword) === storedHashedPassword;
}


function handleBase64() {
  const input = document.getElementById("password").value; 
  const encoded = encodeBase64(input); 
  const result = compareBase64(input, Base64Password); 
  document.getElementById("output").innerText = `Base64 Encoded: ${encoded}\nMatch: ${result}`; 
}


function handleMD5() {
  const input = document.getElementById("password").value; 
  const hashed = hashMD5(input); 
  const result = compareMD5(input, MD5Password); 
  document.getElementById("output").innerText = `MD5 Hash: ${hashed}\nMatch: ${result}`; 
}