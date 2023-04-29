export default function getPreviousYearData(data, branch) {
  const sorted = data.sort((a, b) => a.examname.length - b.examname.length);
  // console.log(sorted);

  function removeDuplicates(books) {
    const jsonObject = books.map(JSON.stringify);

    const uniqueSet = [...new Set(jsonObject)];
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    return uniqueArray;
  }
  const uniqueArray = removeDuplicates(sorted);
  // console.table(uniqueArray);

  const gotArrayOfExamname = uniqueArray.map((i, index) => {
    return i.examname;
  });
  const uniqueArrayOfExamname = [...new Set(gotArrayOfExamname)];
  //   console.log(uniqueArrayOfExamname);

  var furnished = [];

  for (let i = 0; i < uniqueArrayOfExamname.length; i++) {
    const examname = uniqueArrayOfExamname[i];
    const d = uniqueArray.filter((i) => i.examname === examname);
    const sorted = d.sort((a, b) => b.branch.length - a.branch.length);
    furnished.push(sorted);
  }
  //   console.log(furnished);
  return furnished;
}