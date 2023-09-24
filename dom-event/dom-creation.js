
const app = document.getElementById('app');

export function createList( listCount ) {
  const list = [];

  for (let index = 0; index < listCount; index++) {
    const div = document.createElement('div');

    div.className = "list-item"
    div.setAttribute('id', `list-${index}`);

    list.push(div);

    app.appendChild(div);
  }

  return list;
}