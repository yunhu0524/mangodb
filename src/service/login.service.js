import readlineSync from "readline-sync";
// import comparePwd from "../util/crypt.util";

export default async function login() {
  const userid = readlineSync.question("Enter userid? ");
  const password = readlineSync.question("Enter password? ");
  if (await loginFailed(userid, password)) {
    console.info("No such user.");
    process.exit(0);
  }
}
