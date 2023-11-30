"use strict";

const modalTitle = document.querySelector(".modal__title");
const modalForm = document.querySelector(".modal__form");
const modalCheckbox = document.querySelector(".modal__checkbox");
const modalInputDiscount = document.querySelector(".modal__input_discount");

document.querySelector(".overlay").classList.remove("active");

let goods = [
  {
    id: 1,
    title: "Смартфон Xiaomi 11T 8/128GB",
    price: 27000,
    description:
      "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    category: "mobile-phone",
    discont: false,
    count: 3,
    units: "шт",
    images: {
      small: "img/smrtxiaomi11t-m.jpg",
      big: "img/smrtxiaomi11t-b.jpg",
    },
  },
  {
    id: 2,
    title: "Радиоуправляемый автомобиль Cheetan",
    price: 4000,
    description:
      "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    category: "toys",
    discont: 5,
    count: 1,
    units: "шт",
    images: {
      small: "img/cheetancar-m.jpg",
      big: "img/cheetancar-b.jpg",
    },
  },
  {
    id: 3,
    title: "ТВ приставка MECOOL KI",
    price: 12400,
    description:
      "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    category: "tv-box",
    discont: 15,
    count: 4,
    units: "шт",
    images: {
      small: "img/tvboxmecool-m.jpg",
      big: "img/tvboxmecool-b.jpg",
    },
  },
  {
    id: 4,
    title: "Витая пара PROConnect 01-0043-3-25",
    price: 22,
    description:
      "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    category: "cables",
    discont: false,
    count: 420,
    units: "v",
    images: {
      small: "img/lan_proconnect43-3-25.jpg",
      big: "img/lan_proconnect43-3-25-b.jpg",
    },
  },
];

function renderGoods(arr) {
  const tableBody = document.querySelector(".table__body");

  goods.forEach((obj, index) => {
    const rowGoods = createRow(obj, index);
    tableBody.appendChild(rowGoods);
  });

  function createRow(obj, index) {
    const newElement = document.createElement("tr");

    const newElemenIdNumber = document.createElement("td");
    newElemenIdNumber.classList.add("table__cell");
    newElemenIdNumber.textContent = index + 1;
    newElement.appendChild(newElemenIdNumber);

    const newElemenId = document.createElement("td");
    newElemenId.classList.add(
      "table__cell",
      "table__cell_left",
      "table__cell_name"
    );
    newElemenId.setAttribute("data-id", obj.id);
    const spanNewElemenId = document.createElement("span");
    spanNewElemenId.classList.add("table__cell-id");
    spanNewElemenId.textContent = `ID: ${obj.id}`;
    newElemenId.textContent += `${obj.title}`;
    newElemenId.appendChild(spanNewElemenId);
    newElement.appendChild(newElemenId);

    const newElementCategory = document.createElement("td");
    newElementCategory.classList.add("table__cell", "table__cell_left");
    newElementCategory.textContent = `${obj.category}`;
    newElement.appendChild(newElementCategory);

    const newElementUnits = document.createElement("td");
    newElementUnits.classList.add("table__cell");
    newElementUnits.textContent = `${obj.units}`;
    newElement.appendChild(newElementUnits);

    const newElementCount = document.createElement("td");
    newElementCount.classList.add("table__cell");
    newElementCount.textContent = `${obj.count}`;
    newElement.appendChild(newElementCount);

    const newElementPrice = document.createElement("td");
    newElementPrice.classList.add("table__cell");
    newElementPrice.textContent = `$${obj.price}`;
    newElement.appendChild(newElementPrice);

    const newElementTotal = document.createElement("td");
    newElementTotal.classList.add("table__cell");
    newElementTotal.textContent = `$${obj.price * obj.count}`;
    newElement.appendChild(newElementTotal);

    const newElementButtons = document.createElement("td");
    newElementButtons.classList.add("table__cell", "table__cell_btn-wrapper");
    const newElementBtnPic = document.createElement("button");
    newElementBtnPic.classList.add("table__btn", "table__btn_pic");
    newElementButtons.appendChild(newElementBtnPic);
    const newElementBtnEdit = document.createElement("button");
    newElementBtnEdit.classList.add("table__btn", "table__btn_edit");
    newElementButtons.appendChild(newElementBtnEdit);
    const newElementBtnDelet = document.createElement("button");
    newElementBtnDelet.classList.add("table__btn", "table__btn_del");
    newElementButtons.appendChild(newElementBtnDelet);
    newElement.appendChild(newElementButtons);

    return newElement;
  }
}

renderGoods(goods);
