let score = Number(prompt("Enter your score"));
let bonus = confirm("Good attendance?");
let grade;

switch (score >= 0 && score <= 100) {
  case score >= 90:
    grade = "A";
    break;

  case score >= 80:
    grade = "B";
    break;

  case score >= 70:
    grade = "C";
    break;

  case score >= 60:
    grade = "D";
    break;

  case score >= 50:
    grade = "D";
    break;

  default:
    grade = "F";
}

if (score >= 50) {
  if (bonus) {
    score = score + 3;
  }

  if (score > 100) {
    score = 100;
  }
  console.log("PASS");
} else {
  console.log("FAIL");
}
console.log("Final Grade: " + grade);
console.log("Final Score: " + score);
