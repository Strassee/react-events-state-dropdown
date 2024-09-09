[![Build status](https://ci.appveyor.com/api/projects/status/cy08f3e1bdxq42jb?svg=true)](https://ci.appveyor.com/project/Strassee/react-events-state-dropdown)

Выпадающий список
===

Вам необходимо реализовать компоненты выпадающего списка.

## Описание проекта

![Выпадающий список](./assets/dropdown.png)

Реализуйте компонент `DropdownList`, аналогичный указанному на рисунке. Для позиционирования выпадающего списка воспользуйтесь контейнером с `position: relatvie`. Для простоты будем считать, что размер кнопки, при нажатии на которую показывается выпадающий список, фиксированный. Соответственно, вам не нужно через DOM API вычислять размеры и отступы.

Структура компонентов:
- `Dropdown` — содержит кнопку и `DropdownList`, внутри себя хранит состояние, показывать или нет выпадающий список;
- `DropdownList` — содержит список `DropdownItem` и хранит информацию о текущем выбранном элементе.

Вам нужно:
1. При клике на кнопку показывать и скрывать выпадающее меню.
1. Отрисовывать список на базе массива, хранящегося в памяти, через `map`.
1. Подсвечивать выбранный элемент в списке, сделайте это на базе inline-стилей.

Подглядеть реализацию показа и сворачивания на чистом JS и CSS вы можете в исходниках, расположенных в этом же каталоге.

Вы можете реализовать эту задачу как с использованием functional компонентов, так и на базе class-based компонентов.

Но мы рекомендуем functional.
