// part one
function businessHours(dayNumber, hourNumber) {
  if (hourNumber >= 9 && hourNumber <= 18) {
    switch (dayNumber) {
      case 0:
        console.log("Sunday, this is not a working day");
        break;
      case 1:
        console.log("Monday, this is a working day");
        break;
      case 2:
        console.log("Tues, this is a working day");
        break;
      case 3:
        console.log("Wed, this is a working day");
        break;
      case 4:
        console.log("Thurs, this is  a working day");
        break;
      case 5:
        console.log("Fri, this is  a working day");
        break;
      case 6:
        console.log("Sat, this is not a working day");
        break;
      default:
        console.log("invalid day");
    }
  } else {
    return "This is not a business hour";
  }
}

businessHours(0,19);

// part 2
    function getDayNumber (janFirstDayNumber, yearDayNumber){
	
        if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 0){
             return 0 ;}
            else if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 1){
                return 1;}
            else if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 2){
                return 2;}
            else if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 3){
                return 3;}
            else if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 4){
                return 4;}
            else if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 5){
                return 5;}
            else if (((yearDayNumber + 
             janFirstDayNumber) % 7) === 6){
                return 6;}
            else {return null;}
    }

    getDayNumber(6,200);


// part 3
function checking(janFirstDayNumber, yearDayNumber, hourNumber){

	if (((yearDayNumber + 
        janFirstDayNumber) % 7) === 0 && hourNumber >= 9 && hourNumber <= 18){
		return false;}
		else if (((yearDayNumber + 
            janFirstDayNumber) % 7) === 1 && hourNumber >= 9 && hourNumber <= 18){
		return true;}
		else if (((yearDayNumber + 
            janFirstDayNumber) % 7) === 2 && hourNumber >= 9 && hourNumber <= 18){
		return true;}
		else if (((yearDayNumber + 
            janFirstDayNumber) % 7) === 3 && hourNumber >= 9 && hourNumber <= 18){
		return true;}
		else if (((yearDayNumber + 
            janFirstDayNumber) % 7) === 4 && hourNumber >= 9 && hourNumber <= 18){
		return true;}
		else if (((yearDayNumber + 
            janFirstDayNumber) % 7) === 5 && hourNumber >= 9 && hourNumber <= 18){
		return true;}
		else if (((yearDayNumber + 
            janFirstDayNumber) % 7) === 6 && hourNumber >= 9 && hourNumber <= 18){
		return false;}
	else {return false;}
}

checking(0,0,20);

