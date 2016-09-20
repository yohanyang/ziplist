/**
 * Created by YosupYang on 9/19/16.
 **/

const testlist1 = [1, 2, 3];
const testlist2 = ['a', 'b', 'c'];


function ziplist(list1, list2)
{
  let newbox = [];

  for(let i = 0; i < list1.length || i < list2.length; i++)
  {
    if (list1[i] != 0)
    {
      newbox.push(list1[i]);
    }

    if (list2[i] != 0)
    {
      newbox.push(list2[i]);
    }
  }

  return newbox;
}

console.log(ziplist(testlist1, testlist2));

function zipListTheSimpleWay(list1, list2)
{
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testlist1, testlist2));