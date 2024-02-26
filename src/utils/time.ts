import MD5 from 'crypto-js/md5'

const PASSWORD = "Valantis";

const getMD5PasswordWithTimestamp = (): string => {
  const now = new Date();

  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(now.getUTCDate()).padStart(2, "0");

  return MD5(`${PASSWORD}_${yyyy}${mm}${dd}`).toString();
}


export { getMD5PasswordWithTimestamp };