const htmlFragment = `
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Inter;
  color: #000000;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-width: fit-content;
  background-color: #FFFFFF;
}

.card__title {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
}

.card__list {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.card__item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 24px;
  background-color: #F8F8F8;
}

.card__image {
  width: 149px;
  height: 138px;
  border-radius: 16px;
  background-color: #C4C4C4;
}

.card__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  border-radius: 10px;
  border: none;
  background-color: #FFFFFF;
}
</style>
<section class="card">
  <header>
    <h2 class="card__title">Список товаров</h2>
  </header>
  <ul class="card__list">
    <li class="card__item">
      <div class="card__image"></div>
      <button class="card__button">
        Купить
      </button>
    </li>
    <li class="card__item">
      <div class="card__image"></div>
      <button class="card__button">
        Купить
      </button>
    </li>
    <li class="card__item">
      <div class="card__image"></div>
      <button class="card__button">
        Купить
      </button>
    </li>
  </ul>
</section>
`;

module.exports = function () {
    return htmlFragment;
};
