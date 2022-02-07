import React from "react";
import "../css/MyContent.css";

const MyContent = () => {
  return (
    <>
      <div className="Content">
        <img
          id="img"
          src="https://wallpaperaccess.com/full/5204627.jpg"
          alt="image"
        />

        <div className="right-content">
          <h3>Дарт Ве́йдер </h3>
          <p>
            Центральный персонаж первых шести эпизодов саги «Звёздные войны».
            Также появляется в фильме «Изгой-один». В киноэпопее «Звёздные
            войны» демонстрируются его становление в качестве рыцаря-джедая, его
            переход на Тёмную сторону Силы и его итоговое искупление. Отец Люка
            Скайуокера и Леи Органы. Единственный персонаж, появляющийся в шести
            эпизодах и спин-оффе «Изгой-один» «во плоти». В его честь назван
            кратер Вейдер на Хароне.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyContent;
