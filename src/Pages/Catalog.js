// import { useCallback, useEffect, useState } from "react";
import Card from "../components/Card";
import {
  BODY,
  DRIVE,
  ENGINE,
  STAMP,
  TRANSMISSION,
  TYPE_OF_FUEL,
} from "../data/db";
import "../styles/catalogPage.css";

const Catalog = () => {
  return (
    <main className="catalog__main">
      <aside>
        <section>
          <h2>Марка</h2>

          <ul>
            {STAMP.map((stamp, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" value={stamp} />
                  {stamp}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Кузов</h2>

          <ul>
            {BODY.map((body, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" value={body} />
                  {body}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Двигатель</h2>

          <ul>
            {ENGINE.map((engine, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" value={engine} />
                  {engine}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Коробка передач</h2>

          <ul>
            {TRANSMISSION.map((transmission, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" value={transmission} />
                  {transmission}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Привод</h2>

          <ul>
            {DRIVE.map((drive, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" value={drive} />
                  {drive}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Вид топлива</h2>

          <ul>
            {TYPE_OF_FUEL.map((type_of_fuel, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" value={type_of_fuel} />
                  {type_of_fuel}
                </label>
              </li>
            ))}
          </ul>
        </section>
      </aside>
      <section>
        <Card />
      </section>
    </main>
  );
};

export default Catalog;
