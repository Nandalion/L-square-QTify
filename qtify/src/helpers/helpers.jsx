export default function truncate(str) {
  return str.length > 20 ? str.substring(0, 20) + "..." : str;
}
