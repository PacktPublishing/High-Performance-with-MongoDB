grep 'aCollection' mongodb.log* | grep -v 'getMore' | wc -l
  122784

grep 'aCollection' mongodb.log* | grep '"cursorExhausted":true' | wc -l
  46954
