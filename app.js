//получаем перетаскиваемый элемент
const item = document.querySelector('.item') 

//получаем массив из элементов, в которые можно перетащить элемент
const placeholders = document.querySelectorAll('.placeholder')


//назначение слушателей событий
item.addEventListener('dragstart', dragStart) //при событии начала перетаскивания вызовется функция, которая будет накладывать на перетаскиваемый элемент стили
item.addEventListener('dragend', dragEnd) //при окончании события перетаскивания вызовется функция, которая вернет стиль к исходному

// назначение слушателей событий для каждого элемента из массива, которые могут принимать перетаскиваемый элемент
for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragOver) //при событии когда перемещаемый элемент оказывается над зоной, принимающей перетаскиваемые элементы, 
	placeholder.addEventListener('dragenter', dragEnter) //при событии, когда элемент находится над  объектом, на который может быть перенесен
	placeholder.addEventListener('dragleave', dragLeave) //при событии, когда перетаскиваемый элемент покидает область элемента, который может принять перетаскиваемый элемент
	placeholder.addEventListener('drop', dragDrop)

}


//функция, вызываемая при начале события перетаскивания
function dragStart(event) {
	event.target.classList.add('hold') //добавление класса, накладывающий стили при перетаскивании
	setTimeout(() => event.target.classList.add('hide'), 0) // добавление класса, накладывающий стили, 
	//которые прячут оставшийся на месте перетаскиваемый элемент. setTimeout для того, чтобы второй класс не накладывался сразу
}

//функция, вызываемая после окончания события перетаскивания
function dragEnd(event) {
	event.target.className = 'item' //возврат стиля к исходному
}

//функция, которая содержит метод, отменяющий стандартное поведение браузера, которое не позволяет элементам принимать перетаскиваемые элементы
function dragOver(event) {
	event.preventDefault()
}

//функция, которая добавляет стили для элемента, который может принять перетаскиваемый элемент и над которым перетаскиваемый элемент находится
function dragEnter(event) {
	event.target.classList.add('hovered')
}

//функция, которая удаляет стили для элемента, когда перетаскиваемый элемент покидает его область
function dragLeave(event) {
	event.target.classList.remove('hovered')
}

//функция, которая удаляет стили для элемента, который принял перетаскиваемый объект, и содержит метод, добавляющий перетаскиваемый элемент в разметку
function dragDrop(event) { 
	event.target.classList.remove('hovered')
	event.target.append(item)
}