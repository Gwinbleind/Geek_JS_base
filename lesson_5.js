const desk = document.createElement('div');
const blackCell = desk.cloneNode(true);
const whiteCell = blackCell.cloneNode(true);
const colNumerator = whiteCell.cloneNode(true);
const rowNumerator = whiteCell.cloneNode(true);
const emptyCell = rowNumerator.cloneNode(true);
desk.classList.add('desk');
blackCell.classList.add('blackCell');
whiteCell.classList.add('whiteCell');
colNumerator.classList.add('colNumerator');
rowNumerator.classList.add('rowNumerator');
emptyCell.classList.add('emptyCell');

let str = ' 12345678';
const rowName = [...str];
str = ' ABCDEFGH';
const colName = [...str];
const h2Tag = document.getElementsByTagName('h2')[0];
h2Tag.insertAdjacentElement('afterend',desk);

function blackWhiteReturn(f) {
    if (f) {
        return [blackCell.cloneNode(true), !f]
    } else {
        return [whiteCell.cloneNode(true), !f]
    }
}

function generateDesk() {
    let f = true;
    rowName.forEach(rowElem => {
        colName.forEach(colElem => {
            let s = emptyCell.cloneNode(true);
            if (rowElem === ' ' && colElem === ' ') {       //empty cell in top left corner
                s = emptyCell.cloneNode(true);
            } else if (rowElem === ' ') {                   //top row
                s = colNumerator.cloneNode(true);
                s.textContent = colElem;
            } else if (colElem === ' ') {                   //left column
                s = rowNumerator.cloneNode(true);
                s.textContent = rowElem;
            } else {                                        //all another cells
                [s, f] = blackWhiteReturn(f);
            }
            desk.insertAdjacentElement('beforeend',s);
        });
        f = !f
    })
}

generateDesk();