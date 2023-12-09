let resultadoMostrado = false;

function mostrarResultado(resultados) {
    if (!resultadoMostrado) {
        const resultadosContainer = document.createElement('div');
        resultadosContainer.classList.add('card');
        resultadosContainer.innerHTML = '<h3>Solución:</h3>';
        const listaResultados = document.createElement('ul');
        resultados.forEach(resultado => {
            const itemResultado = document.createElement('li');
            itemResultado.classList.add('resultado-item');
            const icono = document.createElement('img');
            icono.src = `img/${resultado.icono}.png`; // Ajusta la extensión según el formato de tus imágenes
            icono.alt = resultado.icono;
            icono.classList.add('icono');
            itemResultado.appendChild(icono);
            itemResultado.innerHTML += resultado.texto;
            listaResultados.appendChild(itemResultado);
        });
        resultadosContainer.appendChild(listaResultados);
        document.getElementById('preguntas-container').appendChild(resultadosContainer);
        resultadoMostrado = true;
    }
}

function mostrarResultadoEnOtraTarjeta(resultados) {
    const resultadosContainer = document.createElement('div');
    resultadosContainer.classList.add('card');
    resultadosContainer.innerHTML = '<h3>Solución 2:</h3>';
    const listaResultados = document.createElement('ul');
    resultados.forEach(resultado => {
        const itemResultado = document.createElement('li');
        itemResultado.classList.add('resultado-item');
        const icono = document.createElement('img');
        icono.src = `img/${resultado.icono}.png`; // Ajusta la extensión según el formato de tus imágenes
        icono.alt = resultado.icono;
        icono.classList.add('icono');
        itemResultado.appendChild(icono);
        itemResultado.innerHTML += resultado.texto;
        listaResultados.appendChild(itemResultado);
    });
    resultadosContainer.appendChild(listaResultados);
    document.getElementById('preguntas-container').appendChild(resultadosContainer);
}

function mostrarResultadoEnOtraTarjeta2(resultados) {
    const resultadosContainer = document.createElement('div');
    resultadosContainer.classList.add('card');
    resultadosContainer.innerHTML = '<h3>Solución 3:</h3>';
    const listaResultados = document.createElement('ul');
    resultados.forEach(resultado => {
        const itemResultado = document.createElement('li');
        itemResultado.classList.add('resultado-item');
        const icono = document.createElement('img');
        icono.src = `img/${resultado.icono}.png`; // Ajusta la extensión según el formato de tus imágenes
        icono.alt = resultado.icono;
        icono.classList.add('icono');
        itemResultado.appendChild(icono);
        itemResultado.innerHTML += resultado.texto;
        listaResultados.appendChild(itemResultado);
    });
    resultadosContainer.appendChild(listaResultados);
    document.getElementById('preguntas-container').appendChild(resultadosContainer);
}

function mostrarResultadoEnOtraTarjeta3(resultados) {
    const resultadosContainer = document.createElement('div');
    resultadosContainer.classList.add('card');
    resultadosContainer.innerHTML = '<h3>Solución 4:</h3>';
    const listaResultados = document.createElement('ul');
    resultados.forEach(resultado => {
        const itemResultado = document.createElement('li');
        itemResultado.classList.add('resultado-item');
        const icono = document.createElement('img');
        icono.src = `img/${resultado.icono}.png`; // Ajusta la extensión según el formato de tus imágenes
        icono.alt = resultado.icono;
        icono.classList.add('icono');
        itemResultado.appendChild(icono);
        itemResultado.innerHTML += resultado.texto;
        listaResultados.appendChild(itemResultado);
    });
    resultadosContainer.appendChild(listaResultados);
    document.getElementById('preguntas-container').appendChild(resultadosContainer);
}

function agregarPregunta(pregunta, descripcion, callback) {
    const preguntasContainer = document.getElementById('preguntas-container');
    preguntasContainer.innerHTML = ''; // Limpiar preguntas anteriores

    const preguntaElement = document.createElement('div');
    preguntaElement.innerHTML = `<h2>${pregunta}</h2>`;

    // Agregar descripción con un elemento <p>
    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = descripcion;
    preguntaElement.appendChild(descripcionElement);

    const botonSi = document.createElement('button');
    botonSi.textContent = 'SI';
    botonSi.onclick = () => callback(true);

    const botonNo = document.createElement('button');
    botonNo.textContent = 'NO';
    botonNo.onclick = () => callback(false);

    preguntaElement.appendChild(botonSi);
    preguntaElement.appendChild(botonNo);

    preguntasContainer.appendChild(preguntaElement);
}


function reiniciarFlujo() {
    const preguntasContainer = document.getElementById('preguntas-container');
    preguntasContainer.innerHTML = '';
    resultadoMostrado = false;
    // Reiniciar el flujo volviendo a la primera pregunta
    document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 081705.png';
    agregarPregunta("¿Área rural concentrada?", "Este factor se refiere a la distancia geográfica en las viviendas de una misma población, aplicando la tabla de Criterios de definición de población rural y urbana explicado en el marco teórico, donde se define una población rural o urbana.", (respuesta) => {
        if (respuesta) {
            mostrarResultado([
                { icono: 'icono1', texto: 'ALCANTARILLADO SIMPLIFICADO' },
                { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                { icono: 'icono2', texto: 'BIORREFINERIA' },
                { icono: 'icono2', texto: 'GASIFICACION POR PLASMA' },
                { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                { icono: 'icono2', texto: 'SEDIMENTADOR' },
                { icono: 'icono2', texto: 'TANQUE IMHOFF' },
                { icono: 'icono3', texto: 'COMPOSTAJE' },
                { icono: 'icono3', texto: 'GAS METANO' },
                { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                { icono: 'icono3', texto: 'RIEGO' }

            ]);
        } else {
            // Resto del flujo de preguntas
            document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 092947.png';
            agregarPregunta("¿Número de habitantes menor a 200?", "Este factor se refiere a la cantidad de población existe en la zona de estudio, aplicando la tabla de Clasificación de poblaciones dispersas expuesta en el marco teórico, donde se pueden clasificar en 4 tipos de población, es SI cuando son del tipo 2, será NO cuando sean de Tipo 3 y tipo 4 considerando la parcialidad de semi concentrados.", (resp) => {
                if (resp) {
                    agregarPregunta("¿Disponibilidad de agua?", "Este factor indica si la zona tiene captaciones de agua que le permitan el abastecimiento suficiente. Según las normas técnicas peruanas IS.010 considerando los aparatos mínimos de un baño ¾, es necesario 4UH, las cuales al transformarse son 0.16 l/s. por lo cual habrá disponibilidad de agua (SI) cuando el caudal promedio será mayor o igual a 0.16 l/s, caso contrario se elegirá una opción seca o con arrastre hidráulico manual (NO).", (agua) => {
                        if (agua) {
                            agregarPregunta("¿Nivel freático mayor a 4 metros?", "Este factor indica que si el nivel freático es bajo por lo cual la distancia frente el nivel del suelo a la capa freática es mayor a 4 metros será (SI) donde se puede implementar opciones secas enterradas, sin embargo, si el nivel freático es alto y la distancia entre el suelo y la capa freática es menor a 4 metros será (NO) y se implementaran opciones sobre el nivel del piso.", (freatico) => {
                                if (freatico) {
                                    agregarPregunta("¿Facilidad de excavación?", "Este factor se refiere al tipo de suelo existente donde se requiere implementar el sistema de saneamiento, si es una zona rocosa, no se podrá realizar excavaciones profundas para implementar sistemas enterrados. Esto depende del estudio de suelo en la zona.", (excavacion) => {
                                        if (excavacion) {
                                            document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 092853.png';
                                            agregarPregunta("¿Infiltración del suelo > a 8min/cm?", "Este criterio es para determinar la capacidad de infiltración que tiene el suelo para la implementación de los sistemas complementarios, los suelos según su capacidad de infiltración puedes ser lentos, rápidos o medios, si la infiltración es mayor a 8min/cm es un suelo lento (SI), y es menor o igual a 8min/cm se clasificaran como rápidos o medios (NO).", (infiltracion) => {
                                                if (infiltracion) {
                                                    mostrarResultado([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                        { icono: 'icono2', texto: 'TANQUE SEPTICO + SANJA DE INFILTRACION' },
                                                        { icono: 'icono2', texto: 'TANQUE SEPTICO + HUMEDAL' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                                        { icono: 'icono2', texto: 'SISTEMA HIBRIDO ANAEROBICO/AEROBICO' },
                                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                        { icono: 'icono3', texto: 'GAS METANO' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                        { icono: 'icono3', texto: 'RIEGO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta2([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                        { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                                                        { icono: 'icono2', texto: 'SISTEMA INTEGRADO CON HUMEDALES ARTIFICIALES' },
                                                        { icono: 'icono3', texto: 'AGUA RESIDUAL TRATADA PARA RIEGO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta3([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                        { icono: 'icono2', texto: 'SISTEMA DE TRATAMIENTO ECOLOGICO INTEGRADO' },
                                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                        { icono: 'icono3', texto: 'RIEGO' }
                                                    ]);
                                                } else {
                                                    mostrarResultado([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                        { icono: 'icono2', texto: 'TANQUE SEPTICO + POZO DE PERCOLACION' },
                                                        { icono: 'icono2', texto: 'TANQUE SEPTICO + HUMEDAL' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                                        { icono: 'icono2', texto: 'SISTEMA HIBRIDO ANAEROBICO/AEROBICO' },
                                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                        { icono: 'icono3', texto: 'GAS METANO' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                        { icono: 'icono3', texto: 'RIEGO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta2([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                        { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                                                        { icono: 'icono2', texto: 'SISTEMA INTEGRADO CON HUMEDALES ARTIFICIALES' },
                                                        { icono: 'icono3', texto: 'AGUA RESIDUAL TRATADA PARA RIEGO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta3([
                                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                        { icono: 'icono2', texto: 'SISTEMA DE TRATAMIENTO ECOLOGICO INTEGRADO' },
                                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                        { icono: 'icono3', texto: 'RIEGO' }
                                                    ]);
                                                }
                                            });
                                        } else {
                                            mostrarResultado([
                                                { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                                { icono: 'icono2', texto: 'CAMARAS DE DESHIDRATACION' },
                                                { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                                { icono: 'icono2', texto: 'LETRINA DE COLECTOR SOLAR' },
                                                { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                { icono: 'icono3', texto: 'RIEGO' }
                                            ]);
                                        }
                                    });
                                } else {
                                    mostrarResultado([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                        { icono: 'icono2', texto: 'CAMARAS DE DESHIDRATACION' },
                                        { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                        { icono: 'icono2', texto: 'LETRINA DE COLECTOR SOLAR' },
                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                        { icono: 'icono3', texto: 'RIEGO' }
                                    ]);
                                }
                            });
                        } else {
                            agregarPregunta("¿Nivel freático mayor a 4 metros?", "Este factor indica que si el nivel freático es bajo por lo cual la distancia frente el nivel del suelo a la capa freática es mayor a 4 metros será (SI) donde se puede implementar opciones secas enterradas, sin embargo, si el nivel freático es alto y la distancia entre el suelo y la capa freática es menor a 4 metros será (NO) y se implementaran opciones sobre el nivel del piso.", (freatico) => {
                                if (freatico) {
                                    agregarPregunta("¿Facilidad de excavación?", "Este factor se refiere al tipo de suelo existente donde se requiere implementar el sistema de saneamiento, si es una zona rocosa, no se podrá realizar excavaciones profundas para implementar sistemas enterrados. Esto depende del estudio de suelo en la zona.", (excavacion) => {
                                        if (excavacion) {
                                            document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 092853.png';
                                            agregarPregunta("¿Infiltración del suelo > a 8min/cm?", "Este criterio es para determinar la capacidad de infiltración que tiene el suelo para la implementación de los sistemas complementarios, los suelos según su capacidad de infiltración puedes ser lentos, rápidos o medios, si la infiltración es mayor a 8min/cm es un suelo lento (SI), y es menor o igual a 8min/cm se clasificaran como rápidos o medios (NO).", (infiltracion) => {
                                                if (infiltracion) {
                                                    mostrarResultado([
                                                        { icono: 'icono1', texto: 'SANITARIO DE SECO' },
                                                        { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                                                        { icono: 'icono2', texto: 'CAMARAS COMPOSTERAS' },
                                                        { icono: 'icono2', texto: 'HOYO SECO VENTILADO' },
                                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                        { icono: 'icono3', texto: 'ARBORLOO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta([
                                                        { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                                        { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + ZANJA DE INFILTRACION' },
                                                        { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + HUMEDAL' },
                                                        { icono: 'icono2', texto: 'HOYO SECO VENTILADO + ZANJA DE INFILTRACION' },
                                                        { icono: 'icono2', texto: 'HOYO SECO VENTILADO + HUMEDAL' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                        { icono: 'icono3', texto: 'ARBORLOO' },
                                                        { icono: 'icono3', texto: 'RIEGO' }
                                                    ]);
                                                } else {
                                                    mostrarResultado([
                                                        { icono: 'icono1', texto: 'SANITARIO DE SECO' },
                                                        { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                                                        { icono: 'icono2', texto: 'HOYO SECO VENTILADO' },
                                                        { icono: 'icono2', texto: 'CAMARAS COMPOSTERAS' },
                                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                        { icono: 'icono3', texto: 'ARBORLOO' }
                                                    ]);
                                                    mostrarResultadoEnOtraTarjeta([
                                                        { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                                        { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + HUMEDAL' },
                                                        { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + POZO DE PERCOLACION' },
                                                        { icono: 'icono2', texto: 'HOYO SECO VENTILADO + POZO DE PERCOLACION' },
                                                        { icono: 'icono2', texto: 'HOYO SECO VENTILADO + HUMEDAL' },
                                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                        { icono: 'icono3', texto: 'ARBORLOO' },
                                                        { icono: 'icono3', texto: 'RIEGO' }
                                                    ]);
                                                }
                                            });
                                        } else {
                                            mostrarResultado([
                                                { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                                { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                                { icono: 'icono3', texto: 'LETRINA DE COLECTOR SOLAR' },
                                                { icono: 'icono3', texto: 'CAMARAS DE DESHIDRATACION' },
                                                { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                { icono: 'icono3', texto: 'RIEGO' }
                                            ]);
                                        }
                                    });
                                } else {
                                    mostrarResultado([
                                        { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                        { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                        { icono: 'icono3', texto: 'LETRINA DE COLECTOR SOLAR' },
                                        { icono: 'icono3', texto: 'CAMARAS DE DESHIDRATACION' },
                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                        { icono: 'icono3', texto: 'RIEGO' }
                                    ]);
                                }
                            });
                        }
                    });
                } else {
                    agregarPregunta("¿Disponibilidad de agua?", "Este factor indica si la zona tiene captaciones de agua que le permitan el abastecimiento suficiente. Según las normas técnicas peruanas IS.010 considerando los aparatos mínimos de un baño ¾, es necesario 4UH, las cuales al transformarse son 0.16 l/s. por lo cual habrá disponibilidad de agua (SI) cuando el caudal promedio será mayor o igual a 0.16 l/s, caso contrario se elegirá una opción seca o con arrastre hidráulico manual (NO).", (agua) => {
                        if (agua) {
                            agregarPregunta("¿Nivel freático mayor a 4 metros?", "Este factor indica que si el nivel freático es bajo por lo cual la distancia frente el nivel del suelo a la capa freática es mayor a 4 metros será (SI) donde se puede implementar opciones secas enterradas, sin embargo, si el nivel freático es alto y la distancia entre el suelo y la capa freática es menor a 4 metros será (NO) y se implementaran opciones sobre el nivel del piso.", (freatico) => {
                                if (freatico) {
                                    mostrarResultado([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                        { icono: 'icono2', texto: 'SISTEMA HIBRIDO ANAEROBICO/AEROBICO' },
                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                        { icono: 'icono3', texto: 'GAS METANO' },
                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                        { icono: 'icono3', texto: 'RIEGO' }
                                    ]);
                                    mostrarResultadoEnOtraTarjeta([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                        { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                                        { icono: 'icono2', texto: 'SISTEMA INTEGRADO CON HUMEDALES ARTIFICIALES' },
                                        { icono: 'icono3', texto: 'AGUA RESIDUAL TRATADA PARA RIEGO' }
                                    ]);
                                    mostrarResultadoEnOtraTarjeta2([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                        { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                                        { icono: 'icono2', texto: 'BIORREFINERIA' },
                                        { icono: 'icono3', texto: 'BIOGAS' },
                                        { icono: 'icono3', texto: 'BIODIESEL' },
                                        { icono: 'icono3', texto: 'BIOETANOL' }
                                    ]);
                                    mostrarResultadoEnOtraTarjeta3([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                        { icono: 'icono2', texto: 'SISTEMA DE TRATAMIENTO ECOLOGICO INTEGRADO' },
                                        { icono: 'icono3', texto: 'COMPOSTAJE' },
                                        { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                        { icono: 'icono3', texto: 'RIEGO' }
                                    ]);
                                } else {
                                    mostrarResultado([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                        { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                                        { icono: 'icono3', texto: 'BIOGAS' }

                                    ]);
                                    mostrarResultadoEnOtraTarjeta([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                        { icono: 'icono2', texto: 'BIORREFINERIA' },
                                        { icono: 'icono3', texto: 'BIOGAS' },
                                        { icono: 'icono3', texto: 'BIODIESEL' },
                                        { icono: 'icono3', texto: 'BIOETANOL' }
                                    ]);
                                    mostrarResultadoEnOtraTarjeta2([
                                        { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                        { icono: 'icono2', texto: 'GASIFICACION POR PLASMA' },
                                        { icono: 'icono3', texto: 'AGREGADOS (PRODUCTOS VITREO)' }
                                    ]);
                                }
                            });
                        } else {
                            mostrarResultado([
                                { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                                { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                                { icono: 'icono3', texto: 'BIOGAS' }

                            ]);
                            mostrarResultadoEnOtraTarjeta([
                                { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                                { icono: 'icono2', texto: 'GASIFICACION POR PLASMA' },
                                { icono: 'icono3', texto: 'AGREGADOS (PRODUCTOS VITREO)' }
                            ]);
                        }
                    });

                }
            });
        }
    });
}

function responderPregunta(respuesta) {
    if (respuesta) {
        mostrarResultado([
            { icono: 'icono1', texto: 'ALCANTARILLADO SIMPLIFICADO' },
            { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
            { icono: 'icono2', texto: 'BIORREFINERIA' },
            { icono: 'icono2', texto: 'GASIFICACION POR PLASMA' },
            { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
            { icono: 'icono2', texto: 'SEDIMENTADOR' },
            { icono: 'icono2', texto: 'TANQUE IMHOFF' },
            { icono: 'icono3', texto: 'COMPOSTAJE' },
            { icono: 'icono3', texto: 'GAS METANO' },
            { icono: 'icono3', texto: 'RETORNO AL SUELO' },
            { icono: 'icono3', texto: 'RIEGO' }

        ]);
    } else {
        // Resto del flujo de preguntas
        document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 092947.png';
        agregarPregunta("¿Número de habitantes menor a 200?", "Este factor se refiere a la cantidad de población existe en la zona de estudio, aplicando la tabla de Clasificación de poblaciones dispersas expuesta en el marco teórico, donde se pueden clasificar en 4 tipos de población, es SI cuando son del tipo 2, será NO cuando sean de Tipo 3 y tipo 4 considerando la parcialidad de semi concentrados.", (resp) => {
            if (resp) {
                agregarPregunta("¿Disponibilidad de agua?", "Este factor indica si la zona tiene captaciones de agua que le permitan el abastecimiento suficiente. Según las normas técnicas peruanas IS.010 considerando los aparatos mínimos de un baño ¾, es necesario 4UH, las cuales al transformarse son 0.16 l/s. por lo cual habrá disponibilidad de agua (SI) cuando el caudal promedio será mayor o igual a 0.16 l/s, caso contrario se elegirá una opción seca o con arrastre hidráulico manual (NO).", (agua) => {
                    if (agua) {
                        agregarPregunta("¿Nivel freático mayor a 4 metros?", "Este factor indica que si el nivel freático es bajo por lo cual la distancia frente el nivel del suelo a la capa freática es mayor a 4 metros será (SI) donde se puede implementar opciones secas enterradas, sin embargo, si el nivel freático es alto y la distancia entre el suelo y la capa freática es menor a 4 metros será (NO) y se implementaran opciones sobre el nivel del piso.", (freatico) => {
                            if (freatico) {
                                agregarPregunta("¿Facilidad de excavación?", "Este factor se refiere al tipo de suelo existente donde se requiere implementar el sistema de saneamiento, si es una zona rocosa, no se podrá realizar excavaciones profundas para implementar sistemas enterrados. Esto depende del estudio de suelo en la zona.", (excavacion) => {
                                    if (excavacion) {
                                        document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 092853.png';
                                        agregarPregunta("¿Infiltración del suelo > a 8min/cm?", "Este criterio es para determinar la capacidad de infiltración que tiene el suelo para la implementación de los sistemas complementarios, los suelos según su capacidad de infiltración puedes ser lentos, rápidos o medios, si la infiltración es mayor a 8min/cm es un suelo lento (SI), y es menor o igual a 8min/cm se clasificaran como rápidos o medios (NO).", (infiltracion) => {
                                            if (infiltracion) {
                                                mostrarResultado([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                    { icono: 'icono2', texto: 'TANQUE SEPTICO + SANJA DE INFILTRACION' },
                                                    { icono: 'icono2', texto: 'TANQUE SEPTICO + HUMEDAL' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                                    { icono: 'icono2', texto: 'SISTEMA HIBRIDO ANAEROBICO/AEROBICO' },
                                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                    { icono: 'icono3', texto: 'GAS METANO' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                    { icono: 'icono3', texto: 'RIEGO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta2([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                    { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                                                    { icono: 'icono2', texto: 'SISTEMA INTEGRADO CON HUMEDALES ARTIFICIALES' },
                                                    { icono: 'icono3', texto: 'AGUA RESIDUAL TRATADA PARA RIEGO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta3([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                    { icono: 'icono2', texto: 'SISTEMA DE TRATAMIENTO ECOLOGICO INTEGRADO' },
                                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                    { icono: 'icono3', texto: 'RIEGO' }
                                                ]);
                                            } else {
                                                mostrarResultado([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                    { icono: 'icono2', texto: 'TANQUE SEPTICO + POZO DE PERCOLACION' },
                                                    { icono: 'icono2', texto: 'TANQUE SEPTICO + HUMEDAL' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                                    { icono: 'icono2', texto: 'SISTEMA HIBRIDO ANAEROBICO/AEROBICO' },
                                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                    { icono: 'icono3', texto: 'GAS METANO' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                    { icono: 'icono3', texto: 'RIEGO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta2([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                    { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                                                    { icono: 'icono2', texto: 'SISTEMA INTEGRADO CON HUMEDALES ARTIFICIALES' },
                                                    { icono: 'icono3', texto: 'AGUA RESIDUAL TRATADA PARA RIEGO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta3([
                                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                                    { icono: 'icono2', texto: 'SISTEMA DE TRATAMIENTO ECOLOGICO INTEGRADO' },
                                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                    { icono: 'icono3', texto: 'RIEGO' }
                                                ]);
                                            }
                                        });
                                    } else {
                                        mostrarResultado([
                                            { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                            { icono: 'icono2', texto: 'CAMARAS DE DESHIDRATACION' },
                                            { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                            { icono: 'icono2', texto: 'LETRINA DE COLECTOR SOLAR' },
                                            { icono: 'icono3', texto: 'COMPOSTAJE' },
                                            { icono: 'icono3', texto: 'RIEGO' }
                                        ]);
                                    }
                                });
                            } else {
                                mostrarResultado([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                    { icono: 'icono2', texto: 'CAMARAS DE DESHIDRATACION' },
                                    { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                    { icono: 'icono2', texto: 'LETRINA DE COLECTOR SOLAR' },
                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                    { icono: 'icono3', texto: 'RIEGO' }
                                ]);
                            }
                        });
                    } else {
                        agregarPregunta("¿Nivel freático mayor a 4 metros?", "Este factor indica que si el nivel freático es bajo por lo cual la distancia frente el nivel del suelo a la capa freática es mayor a 4 metros será (SI) donde se puede implementar opciones secas enterradas, sin embargo, si el nivel freático es alto y la distancia entre el suelo y la capa freática es menor a 4 metros será (NO) y se implementaran opciones sobre el nivel del piso.", (freatico) => {
                            if (freatico) {
                                agregarPregunta("¿Facilidad de excavación?", "Este factor se refiere al tipo de suelo existente donde se requiere implementar el sistema de saneamiento, si es una zona rocosa, no se podrá realizar excavaciones profundas para implementar sistemas enterrados. Esto depende del estudio de suelo en la zona.", (excavacion) => {
                                    if (excavacion) {
                                        document.getElementById('imagenPregunta').src = 'img/Screenshot 2023-12-09 092853.png';
                                        agregarPregunta("¿Infiltración del suelo > a 8min/cm?", "Este criterio es para determinar la capacidad de infiltración que tiene el suelo para la implementación de los sistemas complementarios, los suelos según su capacidad de infiltración puedes ser lentos, rápidos o medios, si la infiltración es mayor a 8min/cm es un suelo lento (SI), y es menor o igual a 8min/cm se clasificaran como rápidos o medios (NO).", (infiltracion) => {
                                            if (infiltracion) {
                                                mostrarResultado([
                                                    { icono: 'icono1', texto: 'SANITARIO DE SECO' },
                                                    { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                                                    { icono: 'icono2', texto: 'CAMARAS COMPOSTERAS' },
                                                    { icono: 'icono2', texto: 'HOYO SECO VENTILADO' },
                                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                    { icono: 'icono3', texto: 'ARBORLOO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta([
                                                    { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                                    { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + ZANJA DE INFILTRACION' },
                                                    { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + HUMEDAL' },
                                                    { icono: 'icono2', texto: 'HOYO SECO VENTILADO + ZANJA DE INFILTRACION' },
                                                    { icono: 'icono2', texto: 'HOYO SECO VENTILADO + HUMEDAL' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                    { icono: 'icono3', texto: 'ARBORLOO' },
                                                    { icono: 'icono3', texto: 'RIEGO' }
                                                ]);
                                            } else {
                                                mostrarResultado([
                                                    { icono: 'icono1', texto: 'SANITARIO DE SECO' },
                                                    { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                                                    { icono: 'icono2', texto: 'HOYO SECO VENTILADO' },
                                                    { icono: 'icono2', texto: 'CAMARAS COMPOSTERAS' },
                                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                                    { icono: 'icono3', texto: 'ARBORLOO' }
                                                ]);
                                                mostrarResultadoEnOtraTarjeta([
                                                    { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                                    { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + HUMEDAL' },
                                                    { icono: 'icono2', texto: 'CAMARA COMPOSTERAS + POZO DE PERCOLACION' },
                                                    { icono: 'icono2', texto: 'HOYO SECO VENTILADO + POZO DE PERCOLACION' },
                                                    { icono: 'icono2', texto: 'HOYO SECO VENTILADO + HUMEDAL' },
                                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                                    { icono: 'icono3', texto: 'ARBORLOO' },
                                                    { icono: 'icono3', texto: 'RIEGO' }
                                                ]);
                                            }
                                        });
                                    } else {
                                        mostrarResultado([
                                            { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                            { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                            { icono: 'icono2', texto: 'LETRINA DE COLECTOR SOLAR' },
                                            { icono: 'icono2', texto: 'CAMARAS DE DESHIDRATACION' },
                                            { icono: 'icono3', texto: 'COMPOSTAJE' },
                                            { icono: 'icono3', texto: 'RIEGO' }
                                        ]);
                                    }
                                });
                            } else {
                                mostrarResultado([
                                    { icono: 'icono1', texto: 'SANITARIO DE SECO CON DESVIACION DE ORINA' },
                                    { icono: 'icono2', texto: 'LETRINA ABONERA' },
                                    { icono: 'icono2', texto: 'LETRINA DE COLECTOR SOLAR' },
                                    { icono: 'icono2', texto: 'CAMARAS DE DESHIDRATACION' },
                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                    { icono: 'icono3', texto: 'RIEGO' }
                                ]);
                            }
                        });
                    }
                });
            } else {
                agregarPregunta("¿Disponibilidad de agua?", "Este factor indica si la zona tiene captaciones de agua que le permitan el abastecimiento suficiente. Según las normas técnicas peruanas IS.010 considerando los aparatos mínimos de un baño ¾, es necesario 4UH, las cuales al transformarse son 0.16 l/s. por lo cual habrá disponibilidad de agua (SI) cuando el caudal promedio será mayor o igual a 0.16 l/s, caso contrario se elegirá una opción seca o con arrastre hidráulico manual (NO).", (agua) => {
                    if (agua) {
                        agregarPregunta("¿Nivel freático mayor a 4 metros?", "Este factor indica que si el nivel freático es bajo por lo cual la distancia frente el nivel del suelo a la capa freática es mayor a 4 metros será (SI) donde se puede implementar opciones secas enterradas, sin embargo, si el nivel freático es alto y la distancia entre el suelo y la capa freática es menor a 4 metros será (NO) y se implementaran opciones sobre el nivel del piso.", (freatico) => {
                            if (freatico) {
                                mostrarResultado([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE CON DESVIACION DE ORINA' },
                                    { icono: 'icono2', texto: 'SISTEMA HIBRIDO ANAEROBICO/AEROBICO' },
                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                    { icono: 'icono3', texto: 'GAS METANO' },
                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                    { icono: 'icono3', texto: 'RIEGO' }
                                ]);
                                mostrarResultadoEnOtraTarjeta([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                    { icono: 'icono2', texto: 'HUMEDALES ARTIFICIALES HIBRIDOS' },
                                    { icono: 'icono2', texto: 'SISTEMA INTEGRADO CON HUMEDALES ARTIFICIALES' },
                                    { icono: 'icono3', texto: 'AGUA RESIDUAL TRATADA PARA RIEGO' }
                                ]);
                                mostrarResultadoEnOtraTarjeta2([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                    { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                                    { icono: 'icono2', texto: 'BIORREFINERIA' },
                                    { icono: 'icono3', texto: 'BIOGAS' },
                                    { icono: 'icono3', texto: 'BIODIESEL' },
                                    { icono: 'icono3', texto: 'BIOETANOL' }
                                ]);
                                mostrarResultadoEnOtraTarjeta3([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                    { icono: 'icono2', texto: 'SISTEMA DE TRATAMIENTO ECOLOGICO INTEGRADO' },
                                    { icono: 'icono3', texto: 'COMPOSTAJE' },
                                    { icono: 'icono3', texto: 'RETORNO AL SUELO' },
                                    { icono: 'icono3', texto: 'RIEGO' }
                                ]);
                            } else {
                                mostrarResultado([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                    { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                                    { icono: 'icono3', texto: 'BIOGAS' }

                                ]);
                                mostrarResultadoEnOtraTarjeta([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                    { icono: 'icono2', texto: 'BIORREFINERIA' },
                                    { icono: 'icono3', texto: 'BIOGAS' },
                                    { icono: 'icono3', texto: 'BIODIESEL' },
                                    { icono: 'icono3', texto: 'BIOETANOL' }
                                ]);
                                mostrarResultadoEnOtraTarjeta2([
                                    { icono: 'icono1', texto: 'SANITARIO DE TANQUE' },
                                    { icono: 'icono2', texto: 'GASIFICACION POR PLASMA' },
                                    { icono: 'icono3', texto: 'AGREGADOS (PRODUCTOS VITREO)' }
                                ]);
                            }
                        });
                    } else {
                        mostrarResultado([
                            { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                            { icono: 'icono2', texto: 'PIROLISIS DE DESECHOS' },
                            { icono: 'icono3', texto: 'BIOGAS' }

                        ]);
                        mostrarResultadoEnOtraTarjeta([
                            { icono: 'icono1', texto: 'SANITARIO CON ARRASTRE HIDRAULICO' },
                            { icono: 'icono2', texto: 'GASIFICACION POR PLASMA' },
                            { icono: 'icono3', texto: 'AGREGADOS (PRODUCTOS VITREO)' }
                        ]);
                    }
                });

            }
        });
    }
}