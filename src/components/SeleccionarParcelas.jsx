import { useEffect, useState } from "react";
import { newObjetos } from "../helpers/objetos";
import Intro from "./Intro";

const SeleccionarParcelas = () => {
  useEffect(() => {
    newFunction();
  }, []);
  const [newArrayValue, setNewArrayValue] = useState([]);
  const newFunctionTofoundTheCorrectPath = () => {
    let newValueArray = [];
    for (let i = 0; i < newObjetos.length; i++) {
      const calumnas = newObjetos[0].length;

      if (i % 2 === 0) {
        for (let k = 0; k < newObjetos[i].length; k++) {
          newValueArray.push(newObjetos[i][k]);
        }
      } else {
        for (let j = calumnas - 1; j >= 0; j--) {
          newValueArray.push(newObjetos[i][j]);
        }
      }
    }

    // console.log(newValueArray);

    return newValueArray;
    // console.log(newObjetos);
  };
  function newFunction() {
    setNewArrayValue(newFunctionTofoundTheCorrectPath);
  }

  const [arrays, setArrays] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 },
    { id: 51 },
    { id: 52 },
    { id: 53 },
    { id: 54 },
    { id: 55 },
    { id: 56 },
    { id: 57 },
    { id: 58 },
    { id: 59 },
    { id: 60 },
    { id: 61 },
    { id: 62 },
    { id: 63 },
    { id: 64 },
    { id: 65 },
    { id: 66 },
    { id: 67 },
    { id: 68 },
    { id: 69 },
    { id: 70 },
    { id: 71 },
    { id: 72 },
    { id: 73 },
    { id: 74 },
    { id: 75 },
    { id: 76 },
    { id: 77 },
    { id: 78 },
    { id: 79 },
    { id: 80 },
    { id: 81 },
    { id: 82 },
    { id: 83 },
    { id: 84 },
    { id: 85 },
    { id: 86 },
    { id: 87 },
    { id: 88 },
    { id: 89 },
    { id: 90 },
    { id: 91 },
    { id: 92 },
    { id: 93 },
    { id: 94 },
    { id: 95 },
    { id: 96 },
    { id: 97 },
    { id: 98 },
    { id: 99 },
    { id: 100 },
    { id: 101 },
    { id: 102 },
    { id: 103 },
    { id: 104 },
    { id: 105 },
    { id: 106 },
    { id: 107 },
    { id: 108 },
    { id: 109 },
    { id: 110 },
    { id: 111 },
    { id: 112 },
    { id: 113 },
    { id: 114 },
    { id: 115 },
    { id: 116 },
    { id: 117 },
    { id: 118 },
    { id: 119 },
    { id: 120 },
    { id: 121 },
    { id: 122 },
    { id: 123 },
    { id: 124 },
    { id: 125 },
    { id: 126 },
    { id: 127 },
    { id: 128 },
    { id: 129 },
    { id: 130 },
    { id: 131 },
    { id: 132 },
    { id: 133 },
    { id: 134 },
    { id: 135 },
    { id: 136 },
    { id: 137 },
    { id: 138 },
    { id: 139 },
    { id: 140 },
    { id: 141 },
    { id: 142 },
    { id: 143 },
    { id: 144 },
    { id: 145 },
    { id: 146 },
    { id: 147 },
    { id: 148 },
    { id: 149 },
    { id: 150 },
    { id: 151 },
    { id: 152 },
    { id: 153 },
    { id: 154 },
    { id: 155 },
    { id: 156 },
    { id: 157 },
    { id: 158 },
    { id: 159 },
    { id: 160 },
    { id: 161 },
    { id: 162 },
    { id: 163 },
    { id: 164 },
    { id: 165 },
    { id: 166 },
    { id: 167 },
    { id: 168 },
    { id: 169 },
    { id: 170 },
    { id: 171 },
    { id: 172 },
    { id: 173 },
    { id: 174 },
    { id: 175 },
    { id: 176 },
    { id: 177 },
    { id: 178 },
    { id: 179 },
    { id: 180 },
    { id: 181 },
    { id: 182 },
    { id: 183 },
    { id: 184 },
    { id: 185 },
    { id: 186 },
    { id: 187 },
    { id: 188 },
    { id: 189 },
    { id: 190 },
    { id: 191 },
    { id: 192 },
    { id: 193 },
    { id: 194 },
    { id: 195 },
    { id: 196 },
    { id: 197 },
    { id: 198 },
    { id: 199 },
    { id: 200 },
    { id: 201 },
    { id: 202 },
    { id: 203 },
    { id: 204 },
    { id: 205 },
    { id: 206 },
    { id: 207 },
    { id: 208 },
    { id: 209 },
    { id: 210 },
    { id: 211 },
    { id: 212 },
    { id: 213 },
    { id: 214 },
    { id: 215 },
    { id: 216 },
    { id: 217 },
    { id: 218 },
    { id: 219 },
    { id: 220 },
    { id: 221 },
    { id: 222 },
    { id: 223 },
    { id: 224 },
    { id: 225 },
    { id: 226 },
    { id: 227 },
    { id: 228 },
    { id: 229 },
    { id: 230 },
    { id: 231 },
    { id: 232 },
    { id: 233 },
    { id: 234 },
    { id: 235 },
    { id: 236 },
    { id: 237 },
    { id: 238 },
    { id: 239 },
    { id: 240 },
    { id: 241 },
    { id: 242 },
    { id: 243 },
    { id: 244 },
    { id: 245 },
    { id: 246 },
    { id: 247 },
    { id: 248 },
    { id: 249 },
    { id: 250 },
    { id: 251 },
    { id: 252 },
    { id: 253 },
    { id: 254 },
    { id: 255 },
    { id: 256 },
    { id: 257 },
    { id: 258 },
    { id: 259 },
    { id: 260 },
    { id: 261 },
    { id: 262 },
    { id: 263 },
    { id: 264 },
    { id: 265 },
    { id: 266 },
    { id: 267 },
    { id: 268 },
    { id: 269 },
    { id: 270 },
    { id: 271 },
    { id: 272 },
    { id: 273 },
    { id: 274 },
    { id: 275 },
    { id: 276 },
    { id: 277 },
    { id: 278 },
    { id: 279 },
    { id: 280 },
    { id: 281 },
    { id: 282 },
    { id: 283 },
    { id: 284 },
    { id: 285 },
    { id: 286 },
    { id: 287 },
    { id: 288 },
    { id: 289 },
    { id: 290 },
    { id: 291 },
    { id: 292 },
    { id: 293 },
    { id: 294 },
    { id: 295 },
    { id: 296 },
    { id: 297 },
    { id: 298 },
    { id: 299 },
    { id: 300 },
    { id: 301 },
    { id: 302 },
    { id: 303 },
    { id: 304 },
    { id: 305 },
    { id: 306 },
    { id: 307 },
    { id: 308 },
    { id: 309 },
    { id: 310 },
    { id: 311 },
    { id: 312 },
    { id: 313 },
    { id: 314 },
    { id: 315 },
  ]);
  const [parcelasOptimas, setParcelasOptimas] = useState("");
  const [parcelaCreada, setParcelaCreada] = useState(false);
  const [text, setText] = useState("Iniciar recorrido");
  const [estadoButton, setEstadoButton] = useState(true);
  const [animacion, setAnimacion] = useState(false);
  const [estadoInicio, setEstadoInicio] = useState(true);
  const handleLand = (id, i) => {
    if (id === 1000) {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: i + 1 };
      setArrays(newArray);
    } else if (id === 4000) {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: 4000 };
      setArrays(newArray);
    } else if (id === 316) {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: 316 };
    } else if (id === 3000) {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: 2000 };
      setArrays(newArray);
    } else if (id >= 2000) {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: 3000 };
      setArrays(newArray);
    } else if (id === 0) {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: 0 };
      setArrays(newArray);
    } else {
      const newArray = [...arrays];
      newArray[i] = { ...newArray[i], id: 1000 };
      setArrays(newArray);
    }
  };
  // console.log(arrays);

  const mapeoDeArray = arrays.map((array, i) => {
    /**Al utilizar el un forEach y darle valores dentro al un useState hace que nuestro codigo 
  este mal */
    // console.log(array.id);
    if (array.id === 1000) {
      // const newArray = [...arrays];
      return { ...array, id: 2000 + i };
    } else {
      // const newArray = [...arrays];
      return { ...array, id: 0 }; // return newArray;
    }
  });

  //Mapeo de campo o de array para poder recorrer las parcelas
  const MapeoArrayParcelas = arrays.map((array, i) => {
    if (array.id >= 2000 && array.id < 3000) {
      // console.log(i);
      return { ...array, id: 4000 };
    } else if (array.id === 3000) {
      return { ...array, id: 316 };
    }
    return { ...array, id: 0 };
  });
  const percelasRecorridas = arrays.map((array, i) => {
    // console.log(array);
    // console.log(newArrayValue);
    let value = newArrayValue[i];
    // let y = i + 1;
    // console.log(y);
    if (array.id >= 2000 && array.id < 3000) {
      // console.log(newArrayValue[i]);
      return `${value} `;
    }
  });

  const restartParcelasSelect = arrays.map((array) => {
    if (array.id === 4000 || array.id === 316) {
      return { ...array, id: 2000 };
    }
    return { ...array, id: 0 };
  });
  const handleNewLand = () => {
    setArrays(mapeoDeArray);
    setParcelaCreada(true);
    setEstadoButton(false);
  };
  const handleStartFarming = () => {
    if (text === "Iniciar recorrido") {
      setArrays(MapeoArrayParcelas);
      setParcelasOptimas(percelasRecorridas);
      setText("Regenerar terreno");
    } else {
      setArrays(restartParcelasSelect);
      setText("Iniciar recorrido");
    }
  };

  const resetLand = arrays.map((array) => {
    if (array.id === 2000 || array.id === 316 || array.id === 3000) {
      return { ...array, id: 2000 };
    }
    return { ...array, id: 0 };
  });
  const handleResetLand = () => {
    setArrays(resetLand);
  };
  // console.log(arrays);
  // console.log(estadoButton);
  const handleAnimation = () => {
    if (animacion) {
      setAnimacion(false);
    } else {
      setAnimacion(true);
    }
  };
  const handleButtonState = () => {
    setEstadoInicio(false);
  };

  return (
    <>
      {estadoInicio ? (
        <>
          <Intro handleButton={() => handleButtonState()} />
        </>
      ) : (
        <>
          {animacion ? (
            <>
              <div>
                <div className=" relative">
                  <div className=" h-screen w-screen bg-black absolute animate__animated animate__fadeInDown">
                    <div className=" container mx-auto mt-28 relative">
                      <h1 className=" absolute text-white font-bold text-8xl hover:text-gray-500 cursor-none animate__animated animate__backInDown">
                        Planteamiento del problema
                      </h1>
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <p className="text-black font-bold text-4xl hover:text-gray-200 transition-all">
                        Se busca desarrollar un sistema de trazado de rutas de
                        cosecha para los tractores agrícolas, esto para que el
                        proceso sea más rápido debido a un cálculo de distancias
                        preciso. Debido a que este tipo de prácticas agrícolas
                        se dan a lo largo del Estado de Sinaloa, optimizar uno
                        de los procesos más importantes de estas actividades
                        puede ser un tema de interés para los agricultores.
                      </p>
                      <h1 className="text-white font-bold text-8xl hover:text-gray-500 animate__animated animate__backInLeft ">
                        Algoritmo que se utilizo
                      </h1>
                      <br />
                      <p className="text-black font-bold text-6xl hover:text-gray-200 transition-all">
                        Camino mas rapido
                      </p>
                      <br />
                      <br />
                      <h1 className="text-white font-bold text-8xl hover:text-gray-500 animate__animated animate__backInUp">
                        Objetivo del programa
                      </h1>
                      <br />
                      <br />
                      <p className="text-black font-bold text-6xl hover:text-gray-200 transition-all">
                        El objetivo principal del programa es poder proporcionar
                        al operador de los tractores una ruta óptima y fácil de
                        interpretar de recolección de las cosechas.
                      </p>
                    </div>
                  </div>
                  <div className=" absolute">
                    <div className="">
                      {/* <h1 className="text-white text-6xl font-bold">
                        Como lo hicimos
                      </h1> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div>
                <div className=" relative">
                  <div className=" h-screen w-screen bg-black absolute animate__animated animate__fadeOutUp">
                    <div className=" container mx-auto mt-28 relative">
                      <h1 className=" absolute text-white font-bold text-8xl hover:text-gray-500 cursor-none animate__animated animate__fadeOutDown">
                        Planteamiento del problema
                      </h1>
                      <br />
                      <br />
                      <br />
                      <br /> <br />
                      <p className="text-black font-bold text-4xl hover:text-gray-200 transition-all">
                        Se busca desarrollar un sistema de trazado de rutas de
                        cosecha para los tractores agrícolas, esto para que el
                        proceso sea más rápido debido a un cálculo de distancias
                        preciso. Debido a que este tipo de prácticas agrícolas
                        se dan a lo largo del Estado de Sinaloa, optimizar uno
                        de los procesos más importantes de estas actividades
                        puede ser un tema de interés para los agricultores.
                      </p>
                      <h1 className="text-white font-bold text-8xl hover:text-gray-500 animate__animated animate__fadeOutLeftBig">
                        Algoritmo que se utilizo
                      </h1>
                      <br />
                      <p className="text-black font-bold text-6xl hover:text-gray-200 transition-all">
                        Camino mas rapido
                      </p>
                      <br />
                      <br />
                      <h1 className="text-white font-bold text-8xl hover:text-gray-500 animate__animated animate__fadeOutDown">
                        Objetivo del programa
                      </h1>
                      <br />
                      <br />
                      <p className="text-black font-bold text-6xl hover:text-gray-200 transition-all">
                        El objetivo principal del programa es poder proporcionar
                        al operador de los tractores una ruta óptima y fácil de
                        interpretar de recolección de las cosechas.
                      </p>
                    </div>
                  </div>
                  <div className=" absolute">
                    <div className="">
                      {/* <h1 className="text-white text-6xl font-bold">
                    Como lo hicimos
                  </h1> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className={`${animacion ? "" : "mt-5 items-centers p-5"}`}>
            <div className=" container mx-auto   relative items-center">
              <div className=" absolute end-1 py-10">
                <div id="menuToggle">
                  <input id="checkbox" type="checkbox" />
                  <label
                    onClick={() => handleAnimation()}
                    class="toggle"
                    for="checkbox"
                  >
                    <div class="bar bar--top"></div>
                    <div class="bar bar--middle"></div>
                    <div class="bar bar--bottom"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" container  mx-auto">
            <h1 className="font-bold text-3xl text-white ">
              Tu camino mas optimo es:{" "}
              <span className="t text-yellow-600">{parcelasOptimas}</span>
            </h1>
            <div
              className="grid place-items-center"
              onClick={() => handleStartFarming()}
            >
              <button className="text-3xl font-bold text-white  mb-16">
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO3aXUxbVRwA8OuLxvjkk8YH47MmvviyjN5zzi0wmbQF2l46QD7GFIMZQQeRbEFlA8JnezHMD5b4QrLExLhk8cX4IoZEfHLZHsYeJslI1BjcdAM57Vb6N6ejsZTTz3t7P9rzT/6hIe29p7+e//2fe1pJEiFCREY0ulzPNmOlX0X4dgDhzSZEznnd7ucynyciLdSX1Sc9CHlDMvnei8ieFxHIyERQxj83IqVLPXLk6fTXVnV4a5RXVBkvtCD8gIPGzWaZ0ICMlj0Yu6RqjDcwft6PyBkVkV8LRcuWKiK/tch4wlNT96JUydHQ0PCUD2M1iPCPPn6J/o+i1MLsm52wdvZsMtlj9r9cr/Ehkghh8hM7BzuXVCnR6FJeC8h4qUUm2zkBMIHhFj98O/ge3JubA6ppB/L+/Dz8MDwMY6ET0EzcBZQ4+dqHcZ0kSU9ITgvf0boX/IgMqZhs5CvBfo8Xvup/F/6YmjqEli23ZmaS0Aw83/GDiPzul/FkE8YvSU4oURXhlXwl2vP6cfj8ZC+sj40VjJYtb4+Pw3LfO/DW8cY8mDihYnLDi5S++vr6ZyQ7xWmXqyZfiZ6oOwafdHXDL6OjsBuJ6IbLTHZMdmx2DnauXGPxy2SbjVmyQwzI8tEQInHuQIk7ec367v0z8M/cvOFo2fJBOAyrIyMw19EJQTe/+bQiEh+UFWQtHqnDbCCZgxtsaoZvTg/An9PTpqFly79mZ5Mf4LmACj6sZF4f9wZk5Zht8Eb8AdicnLQcLVuysbExpo+ZVc+QrLgtx/vAH4C/OcsPuyW7lLDZaNlM5OGNBtXkOs1qnGKukezabDoiD+/DYKsuPL1R6nm3wxE4byYiD+8jNQT3w2Fds4HFUPepklIPYArxghmIPLyPW0PJUtBbTlYCphDHQ23lQ+ThTbS1w44BeNQGgCz/jURgpr3DeEQe3mRbh2F41CaAKUS262MYIg9vqr0Ddgy+DbMLYApx3ghEs/CozQANQeThRTq7yrIBQG0IyJK918Xuk8Ujel3uVzPxFrq6y4ZHbQqYQvy05zAi2yDOiueVydZBvJ6y4lEbA6YQP+vpzdzJucdFzMRjLyw3HrU5YFZEmWwdBkx7whe9p0zBow4ATOWXb/cdQMwKOEEU0wZFHQTIcpoouQE9Mp5Zq601HVBPmDlWZuOV8XkuoAeRC+yv2YDUQcls0q24IQC1vIA5QwBqApCWuYTFDNQEIFjZRMQM1AQgiBmoWb+uEyWsCUCwelaJJqIJQLB6ZolljCYAgVb7QtppIQArHXDvzh2IXrpkedlFl5Zgb2PDOYCxK1cgsbOTfJzY3YXY1auW4fHGYntAyvnU4zdvAr140Ty8xUWIX7vGrQZHANL9fLiyAhCPP54Bd+9C7PLlsuNFl5chsbW1L7cHj9bWgC4s5BynbQFp5huKx+HR6uqBN2RkFvKBOQ6Q5ikpQ2ZdEZcMZwJqj7McDabYYzoakBrZYEqc1Y4HpAY0mHyNoioAaYkNRm9nryhAWkQpGlX6lQeo5W8GRjafigWkvFl26xbEr18vulFULSDlXOdKaRQCcGUliXYA0KA7mOoq4fV1UcK0QDzRRPZD9zJmc1MsY2gZ7yjEQlrTD6Fni8zxTSQqNhNKB4yJ7awSZ+BiYY2i1KzoDdWojq0nWu1b+g+t/lKJ02AcARgVX2uWDhgTX6wb9NOOTWMbRdX8tMMpIQDtDCiyNqtBXkARIiQz4z9cXQdeyGlX8gAAAABJRU5ErkJggg==" />
              </button>
            </div>

            <div className="gridNewClass">
              <button onClick={() => handleStartFarming()}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO3aXUxbVRwA8OuLxvjkk8YH47MmvviyjN5zzi0wmbQF2l46QD7GFIMZQQeRbEFlA8JnezHMD5b4QrLExLhk8cX4IoZEfHLZHsYeJslI1BjcdAM57Vb6N6ejsZTTz3t7P9rzT/6hIe29p7+e//2fe1pJEiFCREY0ulzPNmOlX0X4dgDhzSZEznnd7ucynyciLdSX1Sc9CHlDMvnei8ieFxHIyERQxj83IqVLPXLk6fTXVnV4a5RXVBkvtCD8gIPGzWaZ0ICMlj0Yu6RqjDcwft6PyBkVkV8LRcuWKiK/tch4wlNT96JUydHQ0PCUD2M1iPCPPn6J/o+i1MLsm52wdvZsMtlj9r9cr/Ehkghh8hM7BzuXVCnR6FJeC8h4qUUm2zkBMIHhFj98O/ge3JubA6ppB/L+/Dz8MDwMY6ET0EzcBZQ4+dqHcZ0kSU9ITgvf0boX/IgMqZhs5CvBfo8Xvup/F/6YmjqEli23ZmaS0Aw83/GDiPzul/FkE8YvSU4oURXhlXwl2vP6cfj8ZC+sj40VjJYtb4+Pw3LfO/DW8cY8mDihYnLDi5S++vr6ZyQ7xWmXqyZfiZ6oOwafdHXDL6OjsBuJ6IbLTHZMdmx2DnauXGPxy2SbjVmyQwzI8tEQInHuQIk7ec367v0z8M/cvOFo2fJBOAyrIyMw19EJQTe/+bQiEh+UFWQtHqnDbCCZgxtsaoZvTg/An9PTpqFly79mZ5Mf4LmACj6sZF4f9wZk5Zht8Eb8AdicnLQcLVuysbExpo+ZVc+QrLgtx/vAH4C/OcsPuyW7lLDZaNlM5OGNBtXkOs1qnGKukezabDoiD+/DYKsuPL1R6nm3wxE4byYiD+8jNQT3w2Fds4HFUPepklIPYArxghmIPLyPW0PJUtBbTlYCphDHQ23lQ+ThTbS1w44BeNQGgCz/jURgpr3DeEQe3mRbh2F41CaAKUS262MYIg9vqr0Ddgy+DbMLYApx3ghEs/CozQANQeThRTq7yrIBQG0IyJK918Xuk8Ujel3uVzPxFrq6y4ZHbQqYQvy05zAi2yDOiueVydZBvJ6y4lEbA6YQP+vpzdzJucdFzMRjLyw3HrU5YFZEmWwdBkx7whe9p0zBow4ATOWXb/cdQMwKOEEU0wZFHQTIcpoouQE9Mp5Zq601HVBPmDlWZuOV8XkuoAeRC+yv2YDUQcls0q24IQC1vIA5QwBqApCWuYTFDNQEIFjZRMQM1AQgiBmoWb+uEyWsCUCwelaJJqIJQLB6ZolljCYAgVb7QtppIQArHXDvzh2IXrpkedlFl5Zgb2PDOYCxK1cgsbOTfJzY3YXY1auW4fHGYntAyvnU4zdvAr140Ty8xUWIX7vGrQZHANL9fLiyAhCPP54Bd+9C7PLlsuNFl5chsbW1L7cHj9bWgC4s5BynbQFp5huKx+HR6uqBN2RkFvKBOQ6Q5ikpQ2ZdEZcMZwJqj7McDabYYzoakBrZYEqc1Y4HpAY0mHyNoioAaYkNRm9nryhAWkQpGlX6lQeo5W8GRjafigWkvFl26xbEr18vulFULSDlXOdKaRQCcGUliXYA0KA7mOoq4fV1UcK0QDzRRPZD9zJmc1MsY2gZ7yjEQlrTD6Fni8zxTSQqNhNKB4yJ7awSZ+BiYY2i1KzoDdWojq0nWu1b+g+t/lKJ02AcARgVX2uWDhgTX6wb9NOOTWMbRdX8tMMpIQDtDCiyNqtBXkARIiQz4z9cXQdeyGlX8gAAAABJRU5ErkJggg==" />
              </button>
              <div className="grid grid3">
                {arrays.map((array, index) => {
                  return (
                    <div
                      onClick={() => handleLand(array.id, index)}
                      className={`${
                        array.id === 316
                          ? "bg-slate-500"
                          : array.id === 4000
                          ? "bg-green-500"
                          : array.id === 3000
                          ? "select-new-bad-parcela"
                          : array.id >= 2000
                          ? "parcelas"
                          : array.id >= 1000
                          ? "newcolor"
                          : array.id === 0
                          ? "newcolor2 border-none"
                          : "select-parcela "
                      } w-full borders rounded-sm h-14 grid place-items-center cursor-crosshair`}
                    >
                      <p className="font-bold text-color">
                        {array.id === 0 ? null : index + 1}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button className=" ml-16" onClick={() => handleStartFarming()}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO3aXUxbVRwA8OuLxvjkk8YH47MmvviyjN5zzi0wmbQF2l46QD7GFIMZQQeRbEFlA8JnezHMD5b4QrLExLhk8cX4IoZEfHLZHsYeJslI1BjcdAM57Vb6N6ejsZTTz3t7P9rzT/6hIe29p7+e//2fe1pJEiFCREY0ulzPNmOlX0X4dgDhzSZEznnd7ucynyciLdSX1Sc9CHlDMvnei8ieFxHIyERQxj83IqVLPXLk6fTXVnV4a5RXVBkvtCD8gIPGzWaZ0ICMlj0Yu6RqjDcwft6PyBkVkV8LRcuWKiK/tch4wlNT96JUydHQ0PCUD2M1iPCPPn6J/o+i1MLsm52wdvZsMtlj9r9cr/Ehkghh8hM7BzuXVCnR6FJeC8h4qUUm2zkBMIHhFj98O/ge3JubA6ppB/L+/Dz8MDwMY6ET0EzcBZQ4+dqHcZ0kSU9ITgvf0boX/IgMqZhs5CvBfo8Xvup/F/6YmjqEli23ZmaS0Aw83/GDiPzul/FkE8YvSU4oURXhlXwl2vP6cfj8ZC+sj40VjJYtb4+Pw3LfO/DW8cY8mDihYnLDi5S++vr6ZyQ7xWmXqyZfiZ6oOwafdHXDL6OjsBuJ6IbLTHZMdmx2DnauXGPxy2SbjVmyQwzI8tEQInHuQIk7ec367v0z8M/cvOFo2fJBOAyrIyMw19EJQTe/+bQiEh+UFWQtHqnDbCCZgxtsaoZvTg/An9PTpqFly79mZ5Mf4LmACj6sZF4f9wZk5Zht8Eb8AdicnLQcLVuysbExpo+ZVc+QrLgtx/vAH4C/OcsPuyW7lLDZaNlM5OGNBtXkOs1qnGKukezabDoiD+/DYKsuPL1R6nm3wxE4byYiD+8jNQT3w2Fds4HFUPepklIPYArxghmIPLyPW0PJUtBbTlYCphDHQ23lQ+ThTbS1w44BeNQGgCz/jURgpr3DeEQe3mRbh2F41CaAKUS262MYIg9vqr0Ddgy+DbMLYApx3ghEs/CozQANQeThRTq7yrIBQG0IyJK918Xuk8Ujel3uVzPxFrq6y4ZHbQqYQvy05zAi2yDOiueVydZBvJ6y4lEbA6YQP+vpzdzJucdFzMRjLyw3HrU5YFZEmWwdBkx7whe9p0zBow4ATOWXb/cdQMwKOEEU0wZFHQTIcpoouQE9Mp5Zq601HVBPmDlWZuOV8XkuoAeRC+yv2YDUQcls0q24IQC1vIA5QwBqApCWuYTFDNQEIFjZRMQM1AQgiBmoWb+uEyWsCUCwelaJJqIJQLB6ZolljCYAgVb7QtppIQArHXDvzh2IXrpkedlFl5Zgb2PDOYCxK1cgsbOTfJzY3YXY1auW4fHGYntAyvnU4zdvAr140Ty8xUWIX7vGrQZHANL9fLiyAhCPP54Bd+9C7PLlsuNFl5chsbW1L7cHj9bWgC4s5BynbQFp5huKx+HR6uqBN2RkFvKBOQ6Q5ikpQ2ZdEZcMZwJqj7McDabYYzoakBrZYEqc1Y4HpAY0mHyNoioAaYkNRm9nryhAWkQpGlX6lQeo5W8GRjafigWkvFl26xbEr18vulFULSDlXOdKaRQCcGUliXYA0KA7mOoq4fV1UcK0QDzRRPZD9zJmc1MsY2gZ7yjEQlrTD6Fni8zxTSQqNhNKB4yJ7awSZ+BiYY2i1KzoDdWojq0nWu1b+g+t/lKJ02AcARgVX2uWDhgTX6wb9NOOTWMbRdX8tMMpIQDtDCiyNqtBXkARIiQz4z9cXQdeyGlX8gAAAABJRU5ErkJggg==" />
              </button>
            </div>
            <div className="grid place-items-center">
              {!parcelaCreada ? (
                <button
                  onClick={() => handleNewLand()}
                  className="p-2 rounded text-xl text-white text-bold  my-1"
                >
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO3aXUxbVRwA8OuLxvjkk8YH47MmvviyjN5zzi0wmbQF2l46QD7GFIMZQQeRbEFlA8JnezHMD5b4QrLExLhk8cX4IoZEfHLZHsYeJslI1BjcdAM57Vb6N6ejsZTTz3t7P9rzT/6hIe29p7+e//2fe1pJEiFCREY0ulzPNmOlX0X4dgDhzSZEznnd7ucynyciLdSX1Sc9CHlDMvnei8ieFxHIyERQxj83IqVLPXLk6fTXVnV4a5RXVBkvtCD8gIPGzWaZ0ICMlj0Yu6RqjDcwft6PyBkVkV8LRcuWKiK/tch4wlNT96JUydHQ0PCUD2M1iPCPPn6J/o+i1MLsm52wdvZsMtlj9r9cr/Ehkghh8hM7BzuXVCnR6FJeC8h4qUUm2zkBMIHhFj98O/ge3JubA6ppB/L+/Dz8MDwMY6ET0EzcBZQ4+dqHcZ0kSU9ITgvf0boX/IgMqZhs5CvBfo8Xvup/F/6YmjqEli23ZmaS0Aw83/GDiPzul/FkE8YvSU4oURXhlXwl2vP6cfj8ZC+sj40VjJYtb4+Pw3LfO/DW8cY8mDihYnLDi5S++vr6ZyQ7xWmXqyZfiZ6oOwafdHXDL6OjsBuJ6IbLTHZMdmx2DnauXGPxy2SbjVmyQwzI8tEQInHuQIk7ec367v0z8M/cvOFo2fJBOAyrIyMw19EJQTe/+bQiEh+UFWQtHqnDbCCZgxtsaoZvTg/An9PTpqFly79mZ5Mf4LmACj6sZF4f9wZk5Zht8Eb8AdicnLQcLVuysbExpo+ZVc+QrLgtx/vAH4C/OcsPuyW7lLDZaNlM5OGNBtXkOs1qnGKukezabDoiD+/DYKsuPL1R6nm3wxE4byYiD+8jNQT3w2Fds4HFUPepklIPYArxghmIPLyPW0PJUtBbTlYCphDHQ23lQ+ThTbS1w44BeNQGgCz/jURgpr3DeEQe3mRbh2F41CaAKUS262MYIg9vqr0Ddgy+DbMLYApx3ghEs/CozQANQeThRTq7yrIBQG0IyJK918Xuk8Ujel3uVzPxFrq6y4ZHbQqYQvy05zAi2yDOiueVydZBvJ6y4lEbA6YQP+vpzdzJucdFzMRjLyw3HrU5YFZEmWwdBkx7whe9p0zBow4ATOWXb/cdQMwKOEEU0wZFHQTIcpoouQE9Mp5Zq601HVBPmDlWZuOV8XkuoAeRC+yv2YDUQcls0q24IQC1vIA5QwBqApCWuYTFDNQEIFjZRMQM1AQgiBmoWb+uEyWsCUCwelaJJqIJQLB6ZolljCYAgVb7QtppIQArHXDvzh2IXrpkedlFl5Zgb2PDOYCxK1cgsbOTfJzY3YXY1auW4fHGYntAyvnU4zdvAr140Ty8xUWIX7vGrQZHANL9fLiyAhCPP54Bd+9C7PLlsuNFl5chsbW1L7cHj9bWgC4s5BynbQFp5huKx+HR6uqBN2RkFvKBOQ6Q5ikpQ2ZdEZcMZwJqj7McDabYYzoakBrZYEqc1Y4HpAY0mHyNoioAaYkNRm9nryhAWkQpGlX6lQeo5W8GRjafigWkvFl26xbEr18vulFULSDlXOdKaRQCcGUliXYA0KA7mOoq4fV1UcK0QDzRRPZD9zJmc1MsY2gZ7yjEQlrTD6Fni8zxTSQqNhNKB4yJ7awSZ+BiYY2i1KzoDdWojq0nWu1b+g+t/lKJ02AcARgVX2uWDhgTX6wb9NOOTWMbRdX8tMMpIQDtDCiyNqtBXkARIiQz4z9cXQdeyGlX8gAAAABJRU5ErkJggg==" />
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleStartFarming()}
                    className=" p-2 rounded text-xl text-white text-bold bg-slate-400 my-1"
                  >
                    {text}
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* <button onClick={() => newFunction()}>recorrido 2</button> */}
    </>
  );
};

export default SeleccionarParcelas;
