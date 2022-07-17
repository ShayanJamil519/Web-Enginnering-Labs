// Q2
import PartTimeEmployee from "../Q2/PartTimeEmployee.js";
import PermanentEmployee from "../Q2/PermanentEmployee.js";

const permanent = new PermanentEmployee("Shayan Jamil", 1122, "North Nazimabad Karachi", 90000, "Principal Software Engineer", 10, 5000)
permanent.showPermanentEmployeeData()

const partTime = new PartTimeEmployee("Rayyan", 1133, "Buffer Zone", 40000, "Associate Software Engineer", 3, 6)
partTime.showPartTimeEmployeeData()