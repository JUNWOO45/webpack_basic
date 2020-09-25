module.exports = function myLoader(content) {
  console.log("로더 동작");

  return content.replace("console.log(", "alert(");
};
