//https://reactnavigation.org/docs/hello-react-navigation
//use React Navigation and Stack Navigator to go between Marmoset and Home, and maybe other pages

myList = [8, 5, 7, 1, 9, 3];

//
function insertSort(myArray) {
  for (let i = 1; i < myArray.length; i++) {
    // The first element in our unsorted subarray
    let current = myArray[i];

    // The last element of our sorted subarray
    let last = i - 1;
    while (last > -1 && current < myArray[last]) {
      myArray[last + 1] = myArray[last];
      last = last - 1;
    }
    myArray[last + 1] = current;
  }
  return myArray;
}

biscuit = insertSort(myList);
