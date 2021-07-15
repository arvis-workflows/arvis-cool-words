const arvish = require('arvish');
const superb = require('superb');
const yesNo = require('yes-no-words');

let word = '';
switch (arvish.input) {
  case 'yes':
    word = yesNo.yesRandom()
    break
  case 'no':
    word = yesNo.noRandom()
    break
  default:
    word = superb.random()
    break
}

if (word !== '') {
  arvish.output([
    {
      title: `cool: ${word}`,
      arg: word
    }
  ])
}
