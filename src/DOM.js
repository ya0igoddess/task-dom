/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    if (count > 0) {
        let elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.appendChild(elem);
        appendToBody(tag, content, count - 1);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level, curLevel = 1) {
    let div = document.createElement('div');
    div.setAttribute('class', 'item_' + curLevel);
    if (curLevel < level)
        for (let i = 0; i < childrenCount; ++i) {
            div.appendChild(generateTree(childrenCount, level, curLevel + 1));
        }
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    for (let elem of tree.getElementsByClassName('item_2')) {
        let section = document.createElement('section');
        section.setAttribute('class', 'item_2');
        while (elem.firstChild) {
            section.appendChild(elem.firstChild);
        }
        elem.parentNode.replaceChild(section, elem);
    }
    return tree;
}
